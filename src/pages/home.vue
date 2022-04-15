<template>
  <div>
    home
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader.vue";
import NavFooter from "../components/NavFooter.vue";

export default {
  name:'nav-home',
  data() {
    return {

    };
  },
  components:{
    NavFooter,
    NavHeader
  },
  methods: {

  },
  mounted() {

  },
  created() {

  },
}
</script>

<style lang='scss' scoped>

</style>