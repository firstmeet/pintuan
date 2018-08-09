<template>
    <div>
        <div v-for="(item,index) in list">
            <template v-if="item.type==2">
                <label for="">{{item.question_name}}</label>
                <template v-if="item.tags_id" v-for="(item2,index2) in item.tags_id">
                    <el-checkbox v-model="item2.id" :label="item2.name" border></el-checkbox>
                </template>
                <el-button type="primary" size="mini" icon="el-icon-delete" @click="deletes(index)">删除</el-button>
            </template>

        </div>
        <el-button type="primary" @click="add_checkbox">添加多选框</el-button>
        <el-dialog title="问题名称" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="问题名称" :label-width="formLabelWidth">
                    <el-input v-model="form.question_name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.type" placeholder="请选择活动区域">
                        <el-option label="单选" value="1"></el-option>
                        <el-option label="多选" value="2"></el-option>
                        <el-option label="文本" value="3"></el-option>
                        <el-option label="上传图片" value="4"></el-option>
                        <el-option label="文本域" value="5"></el-option>

                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="add()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                list: [{question_id: 1, question_name: '测试', tags_id: [{id: 1, name: '辅食', checked: false}], type: 2}],
                loading: true,
                form: {
                    question_name: '', type: ''
                },
                tag: [],
                dialogFormVisible: false,
                formLabelWidth: '120px'

            }
        },
        mounted() {

        },
        methods: {
            add_checkbox() {
              this.dialogFormVisible=true;
            },
            deletes(index) {
                this.list.splice(index, 1)
            },
            add(){
                this.list.push(this.form)
                this.dialogFormVisible=false;
            }
        }
    }
</script>
<style lang="scss">
    .test li {
        list-style-type: none;
    }

    .test_2 {
        margin-left: 0px;
        width: 100px;
    }

    .test_3 {
        width: 100px;
        margin-right: 0px;
    }
</style>