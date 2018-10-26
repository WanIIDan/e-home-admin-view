<template>
    <div>
        <el-card>
            <div slot="header">轮播图列表</div>

            <el-table :data="tableData" border style="margin: 15px 0">
                <el-table-column
                    prop="img"
                    label="轮播图"
                    width="180">
                    <template slot-scope="scope">
                        <img :src="scope.row.img" class="img">
                    </template>
                </el-table-column>
                <el-table-column
                    prop="title"
                    label="轮播图标题"
                    width="300"/>
                <el-table-column
                    prop="newsId.title"
                    label="新闻标题"
                    width="300"/>
                <el-table-column
                    prop="sort"
                    label="排序"
                    width="100"/>
                <el-table-column
                    prop="status"
                    label="是否显示"
                    width="100">
                    <div slot-scope="scope">{{scope.row.status ? '显示' : '不显示'}}</div>
                </el-table-column>
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="warning"
                            @click="handleEdit(scope.row._id)">编辑
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
                this.$axios.get('/admin/swiper').then(res=>{
                    console.log(res)
                    if(res.code == 200){
                        this.tableData = res.data
                    }
                })
            },
            handleEdit(id) {
                this.$router.push({name: 'editSwiper', query: {id}})
            },
            handleDelete(id) {
                
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped>
    .img {
        width: 140px;
        height: 100px;
    }
</style>