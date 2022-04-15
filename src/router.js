import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import Index from './pages/index.vue'
import Product from './pages/product.vue'
import Detail from './pages/detail.vue'
import Cart from './pages/cart.vue'
import Order from './pages/order.vue'
import OrderList from './pages/orderList.vue'
import OrderConfirm from './pages/orderConfirm.vue'
import OrderPay from './pages/orderPay.vue'
import Alipay from './pages/alipay'

Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:Home,
      redirect:'/index',
      children:[
        {
          path:'/index', 
          name:'index',
          component:Index
        },
        {
          path:'/product/:id',
          name:'product',
          component:Product
        },
        {
          path:'/detail/:id',
          name:'detail',
          component:Detail
        }
      ]
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/order',
      name:'order',
      component:Order,
      children:[
        {
          path:'list',
          name:'order-list',
          component:OrderList
        },
        {
          path:'confirm',
          name:'order-confirm',
          component:OrderConfirm
        },
        {
          path:'pay',
          name:'order-pay',
          component:OrderPay
        },
        {
          path:'alipay',
          name:'alipay',
          component:Alipay
        }
      ]
    }
  ]
})