<template>
  <div class="apply-nav">
    <!-- nav -->
    <div class="nav" :class="{ is_fixed: isFixed }">
      <div class="container base-container">
        <div class="apply-nav-item">功能介绍</div>
        <div class="apply-nav-item">应用场景</div>
        <div class="apply-nav-item">特色服务</div>
        <div class="apply-nav-item">相关推荐</div>
      </div>
    </div>

    <!-- panel -->
    <div class="panel">
      <div class="base-container">
        <div
          class="panel-item"
          style="height: 100px; border: 1px solid; background: red"
          ref="panel0"
        >
          111
        </div>
        <div
          class="panel-item"
          style="height: 200px; border: 1px solid; background: red"
          ref="panel1"
        >
          111
        </div>
        <div
          class="panel-item"
          style="height: 300px; border: 1px solid; background: red"
          ref="panel2"
        >
          111
        </div>
        <div
          class="panel-item"
          style="height: 400px; border: 1px solid; background: red"
          ref="panel3"
        >
          111
        </div>
      </div>
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
    // 滚动吸顶
    initHeight () {
      // 在谷歌中： document.pageYOffset  ===   document.documentElement.scrollTop
      // 在谷歌中获取滚动条滚动了多少,使用：  document.documentElement.scrollTop
      // 在IE中获取滚动条滚动了多少,使用：   document.body.scrollTop
      const scrollTop =
        document.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      console.log(scrollTop)
      this.isFixed = scrollTop >= 510
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./applyNav.scss";
@import "../../assets/scss/base.scss";
</style>
