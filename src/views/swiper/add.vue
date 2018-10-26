<template>
    <div>
        <el-card>
            <div slot="header">添加轮播图</div>

            <el-form :model="formData" label-width="100px" label-position="left" style="width: 600px">
                <el-form-item required label="轮播图：">
                    <upload v-model="formData.img"></upload>
                </el-form-item>
                <el-form-item required label="标题：">
                    <el-input v-model="formData.title"></el-input>
                </el-form-item>
                <el-form-item required label="新闻：">
                    <el-select v-model="formData.newsId">
                        <el-option v-for="(item, index) in news" 
                            :key="index" 
                            :label="item.title" 
                            :value="item._id"/>
                    </el-select>
                </el-form-item>
                <el-form-item label="排序：">
                    <el-input-number v-model="formData.sort" :min="1" :step="1"/>
                </el-form-item>
                <el-form-item label="是否显示：">
                    <el-switch
                        v-model="formData.status"
                        active-text="显示"
                        inactive-text="不显示"
                        :active-value="1"
                        :inactive-value="0"/>
                </el-form-item>
                <el-form-item>
                    <el-button v-if="!isEdit" type="primary" @click="handleClick">提交</el-button>
                    <el-button v-else type="danger" @click="handleSave">保存更改</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>


<script>
    import upload from '@/components/upload.vue'
    import axios from 'axios'

    export default {
        components: {upload},
        data() {
            return {
                formData: {
                    title: '',
                    img: '',
                    newsId: '',
                    sort: 1, // 控制排序
                    status: 1 // 控制显示
                },
                token: '',
                news: [],
                isEdit: false
            }
        },
        methods: {       
            handleClick() {
                this.$axios.post('/admin/swiper', this.formData).then(res=>{
                    if(res.code == 200) {
                        this.$message.success(res.msg)
                        this.$router.push('/layout/swiper')
                    }
                })
            },
            getNews() {
                this.$axios.get('/admin/news').then(res=>{
                    console.log(res)
                    if(res.code == 200){
                        this.news = res.data
                    }
                })
            },
            getData() {
                const id = this.$route.query.id
                this.$axios.get(`/admin/swiper/${id}`).then(res=>{
                    console.log(res)
                    if(res.code == 200){
                        this.formData = res.data
                    }
                })
            },
            handleSave() {
                const id = this.$route.query.id
                this.$axios.patch(`/admin/swiper/${id}`, this.formData).then(res=>{
                    if(res.code == 200) {
                        this.$message.success(res.msg)
                        this.$router.push('/layout/swiper')
                    }
                })
            }
        },
        created() {
            if(this.$route.name == 'editSwiper') {
                this.isEdit = true
            }else {
                this.isEdit = false
            }
            this.getNews()
            this.getData()
        },
        watch: {
            $route(to, from) {
                if(this.$route.name == 'editSwiper') {
                    this.isEdit = true
                }else {
                    this.isEdit = false
                    this.formData = {
                        title: '',
                        img: '',
                        newsId: '',
                        sort: 1, // 控制排序
                        status: 1 // 控制显示
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>