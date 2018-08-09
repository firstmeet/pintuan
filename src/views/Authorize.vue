<template>
    <div>

    </div>
</template>
<script>
    export default {
        mounted(){
          this.$http.post('http://passport_test.test/api/callback',{code:this.$route.query.code}).then(res=>{

              localStorage.setItem('token',res.data.access_token);
          })
        }
    }
</script>