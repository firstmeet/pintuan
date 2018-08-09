<template>
    <div class="container">
        <div class="header">
            <mt-swipe :auto="4000">
                <template v-for="(item,index) in element_list">
                    <mt-swipe-item v-if="item.type==1">
                        <img :src="'http://laravel.test/uploads/'+item.picture" alt="" class="swipe_picture">
                    </mt-swipe-item>
                </template>

            </mt-swipe>
        </div>
        <div class="group_title">
            <span>拼团列表</span>
        </div>
        <div class="main">
         <div v-for="(item,index) in list" class="item">
             <div class="item1">
                 <img :src="'http://laravel.test/uploads/'+item.picture"></img>
             </div>
             <div class="item1">
                 {{item.goods_name}}
             </div>
         </div>
        </div>
        <div class="footer">
         <foot></foot>
        </div>
    </div>
</template>
<script>
    import Index from  '@/components/Head.vue'
    import Foot from '@/components/Foot.vue'
    export default {
        components:{
            Index,
            Foot
        },
        data(){
            return {
                element_list:[],
                list:[],
                current_page:1,
                last_page:0,
                allLoaded:false,
            }
        },
        mounted(){
            this.$http.get('element').then(res=>{
                this.element_list=res.data;
            })
            this.getGoods(this.current_page);
        },
        methods:{
            getGoods(current_page=1)
            {
                this.$http.get('goods?current_page='+current_page).then(res=>{
                    this.last_page=res.data.last_page
                    if (this.list.length==0){
                        this.list=res.data.data
                    }else{
                        res.data.data.forEach((item,index)=>{
                            this.list.push(item)
                        })
                    }

                });
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container{
        display: flex;
        flex-flow: column;
        width: 100%;
        height: auto;
        margin: 0px;
        padding: 0px;
    }
    .header{
        height: 200px;

    }
    .group_title{
        margin-top: 10px;
    }
    .swipe_picture{
        width: 100%;
        height:200px ;
    }
    .main{
        display: flex;
        flex-direction: row;
        margin-top: 10%;
        .item{
            flex: 1;
            display: flex;
            flex-flow: column;
            padding-left: 5px;
            padding-right: 5px;
            box-shadow: 5px 5px 5px deepskyblue;
            .item1{
                flex: 2;
            }
        }
    }
    .item1 img{
        width: 100%;
    }

</style>