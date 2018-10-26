<template>
    <div>
        <el-card>
            <div slot="header">新闻列表</div>

            <el-table :data="tableData" border style="margin: 15px 0">
                <el-table-column
                    prop="title"
                    label="新闻标题"
                    width="389"/>
                <el-table-column
                    prop="author.nickname"
                    label="作者"
                    width="180"/>
                <el-table-column
                    prop="img"
                    label="新闻头图"
                    width="180">
                    <template slot-scope="scope">
                        <img :src="scope.row.img" class="img">
                    </template>
                </el-table-column>
                <el-table-column
                    prop="type.title"
                    label="分类"
                    width="180"/>
                <el-table-column label="操作" width="250">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="primary"
                            @click="handleDetails(scope.row._id)">查看详情
                        </el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.row._id)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>

        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: []
            }
        },
        methods: {
            getData() {
                this.$axios.get('/admin/news').then(res=>{
                    console.log(res)
                    if(res.code == 200){
                        this.tableData = res.data
                    }
                })
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped>
    .img {
        width: 150px;
        height: 110px;
    }
</style>