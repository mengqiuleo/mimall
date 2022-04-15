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

<style>
@import './assets/scss/reset.scss'
</style>
