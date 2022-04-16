<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import storage from "./storage"

export default {
  name: 'app',
  components: {
    
  },
  mounted(){
    storage.setItem('a',1);
  }
}
</script>

<style lang="scss">
/* 引入样式必须加后缀scss */
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss'
</style>
