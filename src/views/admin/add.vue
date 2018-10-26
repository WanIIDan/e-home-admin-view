<template>
    <div>
        <el-card>
            <div slot="header">添加管理员</div>

            <el-form class="form" :model="formData">
                <el-form-item label="用户头像：">
                    <upload v-model="formData.avatar"></upload>
                </el-form-item>
                <el-form-item label="用户名：">
                    <el-input v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input v-model="formData.password" type="passwprd"></el-input>
                </el-form-item>
                <el-form-item label="昵称：">
                    <el-input v-model="formData.nickname"></el-input>
                </el-form-item>
                <el-form-item label="性别：">
                    <template>
                        <el-radio v-model="radio" label="1">男</el-radio>
                        <el-radio v-model="radio" label="2">女</el-radio>
                    </template>
                </el-form-item>
                <el-form-item label="手机号：">
                    <el-input v-model="formData.phone"></el-input>
                </el-form-item>
                <el-form-item label="个性签名：">
                    <el-input v-model="formData.desc"></el-input>
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

    export default {
        data() {
            return {
                formData: {
                    username: '',
                    nickname: '',
                    avatar: '',
                    password: '',
                    dec: '',
                    job: '',
                    phone: '',
                    sex: ''
                },
                radio: '1'
            }
        },
        components: {
            upload
        },
        methods: {
            handleClick() {
                this.$axios.post('/admin/adminUser', this.formData).then(res=>{
                    if(res.code == 200) {
                        this.$message.success(res.msg)
                        this.$router.push('/layout/adminUser')
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .form {
        width: 600px;
    }
</style>