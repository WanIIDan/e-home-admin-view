<template>
    <div>
        <el-card>
            <div slot="header">管理员列表</div>

            <el-table :data="tableData" border style="margin: 15px 0">
                <el-table-column
                    prop="nickname"
                    label="昵称"
                    width="180"/>
                <el-table-column
                    prop="sex"
                    label="性别"
                    width="100">
                    <div slot-scope="scope">{{scope.row.sex ? '男' : '女'}}</div>
                </el-table-column>
                <el-table-column
                    prop="phone"
                    label="手机号"
                    width="220"/>
                <el-table-column
                    prop="avatar"
                    label="头像"
                    width="180">
                    <template slot-scope="scope">
                        <img :src="scope.row.avatar" class="avatar">
                    </template>
                </el-table-column>
                <el-table-column
                    prop="desc"
                    label="个性签名"
                    width="300"/>
                <el-table-column label="操作" width="200">
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
                this.$axios.get('/admin/adminUser').then(res=>{
                    console.log(res)
                    if(res.code == 200){
                        this.tableData = res.data
                    }
                })
            },
            handleDelete(id) {
                this.$confirm('此操作将删除一位管理员, 是否继续?', '警告', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.post('/admin/adminUser/del', {_id: id}).then(res=>{
                        this.$message.success(res.msg)
                        this.getData()
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
            },
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped>
    img {
        height: 80px;
        width: 80px;
    }
</style>