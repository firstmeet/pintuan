<template>
    <div>
        <mt-tabbar v-model="menu_select" :fixed="fixed">
            <mt-tab-item id="1" >
                拼团
            </mt-tab-item>
            <mt-tab-item id="2" >
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                fixed:true,
                menu_select:this.selected
            }
        },
        methods:{

        },
        props:{
          selected:{
              type:String,
              default:"1"
          }
        },
        watch:{
            menu_select(newValue,oldValue){
                if (newValue=="1"){
                    this.$router.push({path:'/'})
                }else{
                    this.$router.push({path:'/personal'})
                }
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>