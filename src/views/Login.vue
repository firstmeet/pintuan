<template>
    <div class="container">
    <div class="main">
        <div class="item login">
            <mt-cell title="登录"></mt-cell>
        </div>
         <div class="item">
             <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
         </div>
        <div class="item">
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        </div>
        <div class="item buttons">
            <mt-button type="primary" size="large" @click="login">登录</mt-button>
        </div>
    </div>
    </div>

</template>
<script>
    export default {
        data(){
            return {
               email:'',
               password:''
            }
        },
        methods:{
          login(){
              this.$http.post('login',{email:this.email,password:this.password}).then(res=>{
                  localStorage.setItem('auth_token',res.data.accessToken)
                  this.$router.push({path:'/'})
              }).catch(res=>{
                  switch (res.response.status) {
                      case 403:
                          console.log(res.response.data)
                          break;
                  }
              })
          }
        },
    }
</script>
<style lang="scss" scoped>
    .container{
        display: flex;
        flex-flow: column;
        justify-content: center;
        justify-items: center;
    }
     .login{
       color: deepskyblue;
     }
    .main{
        display: flex;
        height: auto;
        flex-flow:column ;
        margin-top: 50%;
        width: 100%;
        justify-content: center;

    }
    .item{
        width: 100%;
    }
    .buttons{
        padding-top: 20px;
        padding-bottom: 10px;
    }
</style>