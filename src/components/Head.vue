<template>
    <div>
       <el-container>
           <el-header>
               <ul class="head_ui">
                   <li @click="login">登录</li>
                   <li @click="register">注册</li>
               </ul>
           </el-header>
       </el-container>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            login(){
                console.log(1)
            },
            register(){
                console.log(2)
            }
        }
    }
</script>
<style lang="scss">
    .head_ui li{
        float:left;
        list-style-type: none;
        padding: 0 10px;
    }
</style>