<template>
    <div class="login">
        <h2 class="title">党建E家后台管理系统</h2>
        <div class="login-box">
            <el-form :model="formData">
                <el-form-item label="用户名">
                    <el-input v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="formData.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="btn" type="primary" @click="handleLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    username: 'admin',
                    password: 'admin'
                }
            }
        },
        methods: {
            handleLogin() {
                this.$axios.post('admin/adminUser/login', this.formData).then(res=>{
                    if(res.code == 200) {
                        this.$message.success(res.msg)
                        this.$router.push({name: 'home'})
                    }else {
                        this.$message.info(res.msg)
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .login {
        overflow: hidden; // 解决margin造成的顶部空白
        height: 100vh;
        background: #2d3a4b;
    }

    .title {
        margin-top: 100px;
        text-align: center;
        color: #fff;
        font-weight: 400;
    }

    .login-box {
        width: 500px;
        height: 380px;
        border-radius: 6px;
        border: 1px solid #f1f1f1;
        margin: 40px auto;
        padding: 30px;
        box-sizing: border-box; // 防止padding把盒子撑大
    }

    /deep/ .el-input {
        background: #2d3a4b;
        border: none;
    }

    /deep/ .el-form-item__label {
        color: #fff;
    }

    .btn {
        display: block;
        width: 100%;
        box-sizing: border-box;
        margin: 30px 0 0;
    }
</style>