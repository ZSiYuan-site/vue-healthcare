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
      <div class="panel-item-intro">
        <div class="base-container">
          <!-- 左侧 -->
          <div class="panel-item-intro-left">
            <div class="intro-title">
              <img src="./image/title-icon.svg" alt="" />
              人脸识别简介
            </div>
            <p class="intro-info">
              腾讯云神图·人脸识别（Face
              Recognition）基于腾讯优图强大的面部分析技术，提供包括人脸检测与分析、五官定位、人脸搜索、人脸比对、人脸验证、人员查重、活体检测等多种功能，为开发者和企业提供高性能高可用的人脸识别服务。
              可应用于智慧零售、在线娱乐、智慧楼宇、在线身份认证等多种应用场景，充分满足各行业客户的人脸属性识别及用户身份确认等需求。
            </p>
          </div>
          <!-- 右侧 -->
          <div class="panel-item-intro-aside">
            <div class="aside-title">活动&公告</div>
            <ul class="aside-ul">
              <li class="aside-li">
                <i>优惠活动</i>
                AI人脸识别新用户特惠，10万次资源包仅售9.9元 >>
              </li>
              <li class="aside-li">
                <i>优惠活动</i>
                AI人脸识别新用户特惠，10万次资源包仅售9.9元 >>
              </li>
              <li class="aside-li">
                <i>优惠活动</i>
                AI人脸识别新用户特惠，10万次资源包仅售9.9元 >>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 产品视频演示 -->
      <div class="panel-item-video clearfix">
        <div class="base-container">
          <h3 class="intro-title">产品视频演示</h3>
          <!-- 图片占位 -->
          <div class="click-img">
            <span class="click-icon" @click="showSlide = true">
              <i class="iconfont icon-arrow-right-filling"></i>
            </span>
            <img src="./image/test.png" alt="" />
          </div>
          <!-- 视频部分 -->
          <div class="vide-box">
            <!-- 遮罩层 -->
            <div class="overlay" v-if="showSlide"></div>
            <!-- 弹出的视频 -->
            <div class="video" :class="{ slide: showSlide }">
              <!-- 视频右上角的叉号 -->
              <span class="icon-close" @click="showSlide = false">
                <i class="iconfont icon-close"></i>
              </span>
              <!-- muted 默认是静音播放 -->
              <video
                src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redmik40sb4bd68/video1-1.mp4"
                controls="controls"
                autoplay
                muted
              ></video>
            </div>
          </div>
        </div>
      </div>

      <!-- 功能演示 -->
      <div class="panel-item-function">
        <div class="base-container">
          <h3 class="intro-title">功能演示</h3>
          <div class="function-content">
            <!-- 头部 -->
            <div class="function-content-head">
              <div class="function-content-head-title">核心能力</div>
              <div class="function-content-head--desc">
                对给定的人脸图片，检测人脸位置、人脸面部属性（包括性别、年龄、表情、魅力、眼镜、发型、口罩、姿态）、人脸质量信息（包括整体质量分、模糊分、光照分、五官遮挡分）。
              </div>
            </div>

            <!-- 身体 -->
            <div class="function-content-body">
              <div class="function-content-body-left">
                <div class="left-panel">
                  <div class="show-room">
                    <img :src="currentShowImg" alt="" class="showImg" />
                    <!-- 扫描 -->
                    <div class="wrapper"></div>
                    <!-- 透明区域 -->
                    <span class="transparent-area">
                      <span class="transparent-area-left">
                        <p>图片文件类型</p>
                        <p>为了避免</p>
                        <p>注：Demo体验</p>
                      </span>
                      <span class="transparent-area-btn">
                        本地上传
                        <!-- <a href="javascript:;" class="upload">本地上传</a> -->
                      </span>
                    </span>
                  </div>

                  <!-- 旋转木马 -->
                  <div class="carousel">
                    <ul class="carousel-ul">
                      <li
                        :class="{ 'active-border': currentImgIndex === index }"
                        class="carousel-li"
                        v-for="(item, index) in demoImgArr"
                        :key="index"
                        @click="changeImg(index)"
                      >
                        <img :src="item" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="function-content-body-right">
                <div class="right-panel"></div>
                右边
              </div>
            </div>
          </div>
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
      // demo图片数组
      demoImgArr: [
        require('./image/person.jpg'),
        require('./image/person2.jpg'),
        require('./image/person.jpg'),
        require('./image/person2.jpg'),
        require('./image/person.jpg')
      ],
      // 记录当前所选中的图片
      currentImgIndex: 0,
      // 当前所展示的图片
      currentShowImg: require('./image/person.jpg'),
      // 控制吸顶的
      isFixed: false,
      // 控制的遮罩层是否展示
      showSlide: false
    }
  },

  mounted () {
    window.addEventListener('scroll', this.initHeight)
    this.moveAnimation()
  },

  methods: {
    // 扫描的动画封装
    moveAnimation () {
      const style = document.createElement('style')
      style.setAttribute('type', 'text/css')
      document.head.appendChild(style)
      const sheet = style.sheet
      sheet.insertRule(`
      @keyframes move {
          to {
              background-position: 0 100%, 0 0, 0 0, 0 0;
              /* 终止位置 */
              clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }`)
      setTimeout(() => {
        sheet.removeRule(0)
        // 展示关键点 todo
      }, 3000)
    },

    // 点击切换图片
    changeImg (index) {
      this.currentImgIndex = index
      this.currentShowImg = this.demoImgArr[index]
      // 切换图片后就执行动画
      setTimeout(() => {
        this.moveAnimation()
      }, 500)
    },
    // 滚动吸顶
    initHeight () {
      // 在谷歌中： document.pageYOffset  ===   document.documentElement.scrollTop
      // 在谷歌中获取滚动条滚动了多少,使用：  document.documentElement.scrollTop
      // 在IE中获取滚动条滚动了多少,使用：   document.body.scrollTop
      const scrollTop =
        document.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop >= 360
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./applyNav.scss";
@import "@/assets/scss/base.scss";
</style>
