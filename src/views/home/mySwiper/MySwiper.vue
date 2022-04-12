<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"></div>
      <div class="swiper-slide"></div>
      <div class="swiper-slide"></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <!--<div class="swiper-scrollbar"></div>-->
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'VueHealthcareSwiper',

  data () {
    return {}
  },

  mounted () {
    const swiper = new Swiper('.swiper-container', {
    // new Swiper(".swiper-container", {
      loop: true,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
      // 如果需要自动切换海报
      // autoplay: {
      //   delay: 1000,//时间 毫秒
      //   disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
      // },
    })
    swiper()
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
@import "./mySwiper.scss";
</style>
