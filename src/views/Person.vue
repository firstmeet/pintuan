<template>
    <div class="main">
        <mt-header title="个人中心">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="info">
            <div class="avatar">
                <img :src="user_info.avatar" alt="">
            </div>
            <div class="user_name">
                <span>{{user_info.name}}</span>
            </div>

        </div>
        <div class="menu">
           <div class="menu_list">
               <img src="../assets/images/fukuan.png" alt="">
               <span>待付款</span>
           </div>
            <div class="menu_list">
                <img src="../assets/images/shouhuo.png" alt="">
                <span>待收货</span>
            </div>
            <div class="menu_list">
                <img src="../assets/images/fahuo.png" alt="">
                <span>待发货</span>
            </div>
        </div>
        <div class="menu_2">
          <template v-for="i in menu_2_number">
              <div class="menu_2_item">菜单</div>
          </template>
        </div>
        <div>
            <foot :selected="selected"></foot>
        </div>
    </div>
</template>
<script>
    import Foot from '@/components/Foot.vue'
    export default {
        components: {
            Foot
        },
        data(){
            return{
                user_info:'',
                selected:"2",
                menu_2_number:9
            }
        },
        mounted(){
            this.$http.post('get-details').then(res=>{
                this.user_info=res.data;
            })
        }
    }
</script>
<style lang="scss" scoped>
    .main{
        display: flex;
        flex-flow: column;
        justify-content: center;
        justify-items: center;
        .info{
            flex: 1;
            display: flex;
            flex-flow: column;
            justify-content: center;
            justify-items: center;
            margin-top: 10px;
        }
        .menu{
            flex: 2;
            display: flex;
            flex-flow: row;
            justify-content: center;
            justify-items: center;
            margin-top: 70px;
            height: 40px;
            .menu_list{
                flex:1;
                width: 40px;
                padding: 10px;
                border:  solid;
            }
        }
        .menu_2{
            flex: 3;
            display: flex;
            margin-top: 20px;
            width: 100%;
            flex-direction: row;
            flex-wrap: wrap;
            margin-bottom: 30px;
            justify-items: center;
            justify-content: center;
            .menu_2_item{
                display: flex;
                border: 1px solid;
                width: 32.33%;
                height: 100px;
                justify-content: center;
                justify-items: center;
                vertical-align:middle;
                text-align:center;
                line-height: 100px;

            }
        }
    }

    .user_name{
        padding-top: 10px;
    }
    .user_name span{
        color: deepskyblue;
    }
    .avatar img{
        width: 100px;
        height: 100px;
        border-radius:100px;
    }

    .menu_list span{
        font-size: 5px;
    }
    .menu_list img{
        width: 20px;
    }


</style>