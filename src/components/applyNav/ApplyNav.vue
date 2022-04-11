<template>
  <div class="apply-nav">
    <!-- nav -->
    <div class="nav" :class="{ is_fixed: isFixed }">
      <div class="container base-container">
        <div class="apply-nav-item">人脸识别简介</div>
        <div class="apply-nav-item">产品视频演示</div>
        <div class="apply-nav-item">功能演示</div>
        <div class="apply-nav-item">相关推荐</div>
      </div>
    </div>

    <!-- panel -->
    <div class="panel">
      <!-- 人脸识别简介 -->
      <div class="panel-item-intro" ref="panel0">
        <div class="base-container">
          <h3 class="intro-title">人脸识别简介</h3>
          <p class="intro-info">
            腾讯云神图·人脸识别（Face
            Recognition）基于腾讯优图强大的面部分析技术，提供包括人脸检测与分析、五官定位、人脸搜索、人脸比对、人脸验证、人员查重、活体检测等多种功能，为开发者和企业提供高性能高可用的人脸识别服务。
            可应用于智慧零售、在线娱乐、智慧楼宇、在线身份认证等多种应用场景，充分满足各行业客户的人脸属性识别及用户身份确认等需求。
          </p>
        </div>
      </div>

      <!-- 产品视频演示 -->
      <div class="panel-item-video">
        <div class="base-container">
          <h3 class="intro-title">产品视频演示</h3>
          <!-- 视频部分 -->
          <div class="vide-box">
            <!-- 遮罩层 -->
            <div class="overlay" v-if="showSlide"></div>
            <!-- 视频 -->
            <div class="video" :class="{ slide: showSlide }">
              <!-- 视频右上角的叉号 -->
              <span class="icon-close" @click="showSlide = false">关闭</span>
              <!-- muted 默认是静音播放 -->
              <video
                src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redmik40sb4bd68/video1-1.mp4"
                controls="controls"
                autoplay
                muted
              ></video>
            </div>
            <button @click="showSlide = true">视频弹出来吧</button>
          </div>
        </div>
      </div>

    <!-- 功能演示 -->
    <div class="panel-item"></div>
      <div
        class="panel-item"
        style="height: 400px; border: 1px solid; background: red"
        ref="panel3"
      >
        111
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueHealthcareApplynav',

  data () {
    return {
      isFixed: false,
      // 控制的遮罩层是否展示
      showSlide: false
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
