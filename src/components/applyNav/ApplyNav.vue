<template>
  <div class="apply-nav" :class="{ is_fixed: isFixed }">
    <div class="container">
      <div class="apply-nav-item">功能介绍</div>
      <div class="apply-nav-item">应用场景</div>
      <div class="apply-nav-item">特色服务</div>
      <div class="apply-nav-item">相关推荐</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueHealthcareApplynav',

  data () {
    return {
      isFixed: false
    }
  },

  mounted () {
    window.addEventListener('scroll', this.initHeight)
  },

  methods: {
    initHeight () {
      // 在谷歌中： document.pageYOffset  ===   document.documentElement.scrollTop
      // 在谷歌中获取滚动条滚动了多少,使用：  document.documentElement.scrollTop
      // 在IE中获取滚动条滚动了多少,使用：   document.body.scrollTop
      const scrollTop =
        document.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      this.isFixed = scrollTop >= 510
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./applyNav.scss";
</style>
