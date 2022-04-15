<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a v-bind:href="'/#/product'+item.id"><img :src="item.img" alt=""></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div> 
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import './../assets/scss/base.scss'
import ServiceBar from './../components/ServiceBar.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name:'index',
  components:{
    ServiceBar,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption:{
        autoplay:true,
        loop:true,
        effect:'cube',
        cubeEffect: {
          slideShadows:true,
          shadow:true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      slideList:[
        {
          id:'42',
          img:'/imgs/slider/slide-1.jpg'
        },
        {
          id:'45',
          img:'/imgs/slider/slide-2.jpg'
        },
        {
          id:'46',
          img:'/imgs/slider/slide-3.jpg'
        },
        {
          id:'42',
          img:'/imgs/slider/slide-4.jpg'
        },
        {
          id:'42',
          img:'/imgs/slider/slide-5.jpg'
        }
      ]
    };
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
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin';
  .index{
    .swiper-box{
      .nav-menu{
        box-sizing: border-box;
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: 26px 0;
        background-color: #55585a7a;
        .menu-wrap{
          .menu-item{
            height: 50px;
            line-height: 50px;
            a{
              display: block;
              position: relative;
              font-size: 16px;
              color: #ffffff;
              padding-left: 30px;
              &:after{
                position: absolute;
                right: 30px;
                top:17.5px;
                content: '';
                @include bgImg(10px,15px,'/imgs/icon-arrow.png')
              }
            }
            &:hover{
              background-color: $colorA;
            }
          }
        }
      }
      .swiper-container{
        height: 451px;
        .swiper-button-prev{
          left:274px;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>