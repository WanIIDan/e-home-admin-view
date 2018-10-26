<template>
    <div>
        <el-card>
            <div slot="header">添加新闻</div>

            <el-form :model="formData" label-width="100px" label-position="left">
                <el-form-item label="新闻头图：">
                    <upload v-model="formData.img"></upload>
                </el-form-item>
                <el-form-item label="新闻标题：">
                    <el-input v-model="formData.title"></el-input>
                </el-form-item>
                <el-form-item label="作者：">
                    <el-select v-model="formData.author">
                        <el-option v-for="(item, index) in users" 
                            :key="index" 
                            :label="item.username" 
                            :value="item._id"/>
                    </el-select>
                </el-form-item>
                <el-form-item label="新闻内容：">
                    <quill-editor v-model="formData.content"
                        ref="myQuillEditor"
                        :options="editorOption"
                        @change="onEditorChange($event)"/>
                </el-form-item>
                <el-form-item label="新闻分类：">
                    <el-select v-model="formData.type">
                        <el-option v-for="(item, index) in categories" 
                            :key="index" 
                            :label="item.title" 
                            :value="item._id"/>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleClick">提交</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import upload from '@/components/upload.vue'
    import axios from 'axios'

    import {quillEditor, Quill} from 'vue-quill-editor'
    import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
    Quill.register('modules/ImageExtend', ImageExtend)

    export default {
        components: {
            upload,
            quillEditor
        },
        data() {
            return {
                formData: {
                    title: '',
                    content: '',
                    contentText: '',
                    img: '',
                    author: '',
                    type: ''
                },
                token: '',
                users: [],
                categories: [],
                // 富文本框参数设置
                editorOption: {  
                    modules: {
                        ImageExtend: {
                            loading: true,
                            name: 'file',
                            action: "https://upload-z1.qiniup.com",
                            response: (res) => {
                                return res.url
                            },
                            change: (xhr, formData) => {
                                formData.append('token', this.token)
                            } // 可选参数 每次选择图片触发，也可用来设置头部，但比headers多了一个参数，可设置formData
                        },
                        toolbar: {
                            container: container,
                            handlers: {
                                'image': function () {
                                    QuillWatch.emit(this.quill.id)
                                }
                            }
                        }
                    }
                }
            }
        },
        methods: {
            getUser() {
                this.$axios.get('/admin/adminUser').then(res=> {
                    if(res.code == 200) {
                        this.users = res.data
                    }
                })
            },
            getCategory() {
                this.$axios.get('/admin/category').then(res=> {
                    if(res.code == 200) {
                        this.categories = res.data
                    }
                })
            },
            handleClick() {
                this.$axios.post('/admin/news', this.formData).then(res=>{
                    if(res.code == 200) {
                        this.$message.success(res.msg)
                        this.$router.push('/layout/news')
                    }
                })
            },
            onEditorChange({ quill, html, text }) {
                this.formData.contentText = text
            }
        },
        created() {
            this.getUser()
            this.getCategory()
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        }
    }
</script>

<style>
    .ql-container {
        min-height: 200px;
    }
</style>