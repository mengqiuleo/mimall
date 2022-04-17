<template>
  <div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  mounted(){
    if(this.$cookie.get('userId')){
      this.getUser();
      this.getCartCount();
    }
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res)=>{
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style lang="scss">
/* 引入样式必须加后缀scss */
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss'
</style>
