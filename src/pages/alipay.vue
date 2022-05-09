<template>
  <div class="ali-pay">
    <loading></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from './../components/Loading.vue'
export default {
  name:'ali-pay',
  data() {
    return {
      orderId:this.$route.query.orderId,//获取我们的订单ID
      content:''
    };
  },
  components:{
    Loading
  },
  methods: {
    paySubmit(){
      this.axios.post('/pay',{
        orderId:this.orderId,
        orderName:'Vue高仿小米商城',
        amount:0.01,
        payType:1 //1.支付宝  2.微信
      }).then((res)=>{
        this.content = res.content;
        setTimeout(() => {
          document.forms[0].submit();
        }, 100);
      })
    }
  },
  mounted() {
    this.paySubmit();
  },
  created() {

  },
}
</script>

<style lang='scss' scoped>

</style>