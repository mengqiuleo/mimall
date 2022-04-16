import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'

//# 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;//超时时间为8秒

// # 拦截器:接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;//拿到真正的数据
  if(res.status == 0) {
    return res.data;
  }else if(res.data == 10){
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
})

Vue.use(VueAxios,axios)
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
