<template>
    <div>
        <el-row>

            <el-col :span="4" style="height: 100vh">
                <!-- SideBar -->
                <div class="side-bar">
                    <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-menu-item index="/layout/home">
                            <router-link to="/layout/home">首页</router-link>
                        </el-menu-item>
                        <el-menu-item index="/login">
                            <router-link to="/login">登录页</router-link>
                        </el-menu-item>
                        <el-submenu index="/admin">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>管理员管理</span>
                            </template>
                            <el-menu-item index="/layout/adminUser">
                                <router-link to="/layout/adminUser">管理员列表</router-link>
                            </el-menu-item>
                            <el-menu-item index="/layout/addAdmin">
                                <router-link to="/layout/addAdmin">添加管理员</router-link>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="/news">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>新闻管理</span>
                            </template>
                            <el-menu-item index="/layout/news">
                                <router-link to="/layout/news">新闻列表</router-link>
                            </el-menu-item>
                            <el-menu-item index="/layout/addNews">
                                <router-link to="/layout/addNews">添加新闻</router-link>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="/swiper">
                            <template slot="title">
                                <i class="el-icon-document"></i>
                                <span>轮播图管理</span>
                            </template>
                            <el-menu-item index="/layout/swiper">
                                <router-link to="/layout/swiper">轮播图列表</router-link>
                            </el-menu-item>
                            <el-menu-item index="/layout/addSwiper">
                                <router-link to="/layout/addSwiper">添加轮播图</router-link>
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </div>
            </el-col>

            <el-col :span="20"  style="height:100vh;overflow-y: scroll">
                <!-- Header -->
                <div class="header clearfix ml-200">
                    <el-dropdown class="fr">
                        <span class="el-dropdown-link">
                            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>   

                <div class="app-mian ml-200">
                    <router-view></router-view>
                </div>
            </el-col>   
        </el-row>   
    </div>
</template>

<script>
    
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="scss">
    .ml-200 {
        // margin-left: 200px;
        padding: 20px;
    }

    .header {
        padding: 0 20px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #f1f1f1;
    }

    /deep/ .el-breadcrumb {
        line-height: 50px;
    }

    .side-bar {
        // position: fixed;
        // top: 0;
        // bottom: 0;
        // left: 0;
        // width: 200px;
        border-right: 1px solid #f1f1f1;
        // overflow: hidden;
        // padding-top: 60px;
        background: #545c64;
        min-height: 100vh;

        /deep/ {
            .el-menu {
                border-right: none;
            }
        }
    }

    .mian {
        padding: 30px;
    }

</style>