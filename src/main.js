import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
import { Message } from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

//# 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;//超时时间为8秒

// # 拦截器:接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;//拿到真正的数据
  let path = location.hash;
  if(res.status == 0) {
    return res.data;
  }else if(res.data == 10){
    if(path!=='#/index'){
      window.location.href = '/#/login';
    }
    return Promise.reject(res);
  }else{
    Message.error(res.msg);
    return Promise.reject(res);
  }
},(error)=>{
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(error);
})

Vue.use(VueAxios,axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})

Vue.config.productionTip = false

 //Vue.use(Message)

Vue.prototype.$message = Message;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
