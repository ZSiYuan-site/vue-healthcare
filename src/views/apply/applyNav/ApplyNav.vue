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
              <!-- 左边 -->
              <div class="function-content-body-left">
                <div class="left-panel">
                  <div class="show-room">
                    <span class="showImg-wrap">
                      <!-- <span class="point"></span> -->
                      <img :src="currentShowImg" alt="" class="showImg" />
                    </span>

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
                        <el-upload
                          action="http://120.24.89.238:8003/eduoss/fileoss/2"
                          :on-success="imgUploadSuccess"
                          :show-file-list="false"
                        >
                          本地上传
                        </el-upload>
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

              <!-- 右边 -->
              <div class="function-content-body-right">
                <div class="right-panel" v-loading="loading">
                  <template>
                    <div class="detail-result" v-if="isShowResult">
                      <el-row :gutter="20">
                        <el-col :span="6"
                          ><div
                            class="grid-content bg-purple detail-result-text"
                          >
                            诊断分析
                          </div></el-col
                        >
                        <el-col :span="18"
                          ><div
                            class="grid-content bg-purple detail-result-text"
                          >
                            {{ diagnosisResult.diagnosticAnalysis }}
                          </div></el-col
                        >
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="6"
                          ><div
                            class="grid-content bg-purple detail-result-text"
                          >
                            眼部诊断分析
                          </div></el-col
                        >
                        <el-col :span="18"
                          ><div
                            class="grid-content bg-purple detail-result-text"
                          >
                            {{ diagnosisResult.eyeDiagnosticAnalysis }}
                          </div></el-col
                        >
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="6"
                          ><div
                            class="grid-content bg-purple detail-result-text"
                          >
                            病症介绍
                          </div></el-col
                        >
                        <el-col :span="18"
                          ><div
                            class="grid-content bg-purple detail-result-text"
                          >
                            {{ diagnosisResult.symptomsIntroduction }}
                          </div></el-col
                        >
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="6"
                          ><div
                            class="grid-content bg-purple detail-result-text"
                          >
                            调理建议
                          </div></el-col
                        >
                        <el-col :span="18"
                          ><div
                            class="grid-content bg-purple detail-result-text"
                          >
                            {{ diagnosisResult.suggestFood }}
                          </div></el-col
                        >
                      </el-row>
                    </div>
                    <div v-else class="noData">暂无数据</div>
                  </template>
                </div>
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
      // 具体的诊断结果
      diagnosisResult: {
        // 诊断分析
        diagnosticAnalysis: '',
        // 眼部诊断分析
        eyeDiagnosticAnalysis: '',
        // 病症介绍
        symptomsIntroduction: '',
        // 调理建议
        suggestFood: ''
      },
      // 是否展示结果
      isShowResult: false,
      // 人脸识别后的坐标结果
      facePostion: [],
      // 控制loading
      loading: false,
      // demo图片数组
      demoImgArr: [
        'https://tse1-mm.cn.bing.net/th/id/R-C.5a473ef2ebd1a2f0197c0f9a6c6ac8b8?rik=OS6A7cv6J1sCRQ&riu=http%3a%2f%2fwww.talkimages.cn%2fimages%2fmedium%2f20133138%2ftkm001_917355.jpg&ehk=bxa80dJuiVzQ7OB76FPKVDpIBdH0fOxfmTDJrBkLo5g%3d&risl=&pid=ImgRaw&r=0',
        'https://tse2-mm.cn.bing.net/th/id/OIP-C.IEnuqXdpUnwwGwoLeHiv7gHaGW?pid=ImgDet&rs=1',
        'https://tse1-mm.cn.bing.net/th/id/R-C.b9ff03e662645bb73d8bc7f65bd542ff?rik=Bvh0oKkbliWFBQ&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f201911%2f05%2f1572950540215847.jpg&ehk=3AdwQJ3GZCZsaILxxT%2f5NMFd3D5C%2bIS2gLAr4aCZ0Es%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        'https://tse3-mm.cn.bing.net/th/id/OIP-C.jQVRmmyUGXKfxBFDujNA9AHaE8?pid=ImgDet&rs=1',
        'https://tse1-mm.cn.bing.net/th/id/R-C.d8a99cf14ce519fa1283f97474d480a5?rik=ZeP9iZjcoxgFMQ&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f201911%2f05%2f1572950540215158.jpg&ehk=GomjZHFnUVLwLMQM5xBsp4XOEIqDUuuCrk1H6BIwrNw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
      ],
      // demoImgArr: [
      //   require("./image/person.jpg"),
      //   require("./image/person2.jpg"),
      //   require("./image/person.jpg"),
      //   require("./image/person2.jpg"),
      //   require("./image/person.jpg"),
      // ],
      // 记录当前所选中的图片
      currentImgIndex: 0,
      // 当前所展示的图片
      currentShowImg:
        'https://tse1-mm.cn.bing.net/th/id/R-C.5a473ef2ebd1a2f0197c0f9a6c6ac8b8?rik=OS6A7cv6J1sCRQ&riu=http%3a%2f%2fwww.talkimages.cn%2fimages%2fmedium%2f20133138%2ftkm001_917355.jpg&ehk=bxa80dJuiVzQ7OB76FPKVDpIBdH0fOxfmTDJrBkLo5g%3d&risl=&pid=ImgRaw&r=0',
      // 控制吸顶的
      isFixed: false,
      // 控制的遮罩层是否展示
      showSlide: false,
      // sheet
      sheet: {},
      // 当前动画正在执行的id
      currentMoveId: null,
      // 当前取消动画的id
      currentRemoveId: null
    }
  },

  async mounted () {
    // loading效果
    // setTimeout(() => {
    //   this.loading = false;
    // }, 5000);

    window.addEventListener('scroll', this.initHeight)
    // setTimeout(() => {
    //   this.moveAnimation();
    // }, 1000);

    // setTimeout(() => {
    //   this.removeAnimation();
    // }, 6000);
  },

  methods: {
    // 根据图片地址获取对应的信息
    getInfo (imgUrl) {
      this.$http
        .post(`http://120.24.89.238:8003/eduoss/fileoss/1?url=${imgUrl}`)
        .then((res) => {
          console.log(res.data)
          setTimeout(() => {
            // 清除上一次的结果数据
            this.diagnosisResult = {}
            // 关闭loading加载效果
            this.loading = false
            // 数据赋值
            const { complexion, eye, program, suggest } = res.data.data.faceFinal
            this.diagnosisResult.diagnosticAnalysis =
              complexion.diagnosticAnalysis
            this.diagnosisResult.eyeDiagnosticAnalysis =
              eye.eyeDiagnosticAnalysis
            this.diagnosisResult.symptomsIntroduction =
              program.symptomsIntroduction
            this.diagnosisResult.suggestFood = suggest.food
            // 关闭loading效果
            this.loading = false
            // 展示数据
            this.isShowResult = true
          }, 2000)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 图片上传成功的回调
    imgUploadSuccess (res) {
      console.log(res.src)
      // 清除上一次遗留的红点
      this.removePoints()

      // 将原数据清空
      this.facePostion = []
      // 不展示数据
      this.isShowResult = false

      // 将图片显示出来
      this.currentShowImg = res.src
      const faceInfo = JSON.parse(res.result)
      // 赋值位置
      this.facePostion = faceInfo.result.face_list[0].landmark72
      // console.log(this.facePostion)
      // 开始扫描动画
      this.moveAnimation()
      // 开启loading加载效果
      this.loading = true
      setTimeout(() => {
        // 移除动画
        this.removeAnimation()
        // 产生扫描红点
        this.createPoints()
      }, 3000)
      // 发起请求，根据图片地址获取对应的信息
      this.getInfo(res.src)
    },

    // 扫描的动画封装
    moveAnimation () {
      const style = document.createElement('style')
      style.setAttribute('type', 'text/css')
      document.head.appendChild(style)
      const sheet = style.sheet
      //  保存到state中
      this.sheet = sheet
      sheet.insertRule(`
      @keyframes move {
          to {
              background-position: 0 100%, 0 0, 0 0, 0 0;
              /* 终止位置 */
              clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }`)
    },

    // 清除扫描动画
    removeAnimation () {
      if (this.sheet.cssRules.length === 1) {
        this.sheet.removeRule(0)
      }
    },

    // 展示人脸关键点的函数封装
    createPoints () {
      const wrapDom = document.querySelectorAll('.showImg-wrap')[0]
      this.facePostion.forEach((item) => {
        const newTag = document.createElement('span')
        newTag.setAttribute('class', 'point')
        newTag.setAttribute(
          'style',
          `top:${item.y}px;left:${item.x}px;position:absolute; display: inline-block;border-radius: 50%;  width: 2px;  height: 2px;background-color: #62eab9;`
        )
        wrapDom.appendChild(newTag)
      })
    },

    // 遍历移除扫描点
    removePoints () {
      const wrapDom = document.querySelectorAll('.showImg-wrap')[0]
      while (wrapDom.children.length > 1) {
        wrapDom.removeChild(wrapDom.lastElementChild)
      }
    },

    // 点击切换图片
    changeImg (index) {
      this.loading = false
      // 遍历移除扫描点
      this.removePoints()
      // 如果上一个有动画，先清除上一个动画
      if (this.sheet.cssRules.length === 1) {
        // 说明还存在动画没有清除
        this.removeAnimation()
      }
      if (this.currentMoveId !== null) {
        // 清除定时器
        this.currentRemoveId = null
      }

      this.currentImgIndex = index
      // 展示图片
      this.currentShowImg = this.demoImgArr[index]
      // 开启扫描动画
      this.currentMoveId = setTimeout(() => {
        this.sheet.insertRule(`
          @keyframes move {
              to {
                  background-position: 0 100%, 0 0, 0 0, 0 0;
                  /* 终止位置 */
                  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
              }
            }`)
      }, 1000)
      setTimeout(() => {
        // 清除定时器
        this.currentRemoveId = null
        // 移除扫描动画
        this.removeAnimation()
      }, 6000)
      // 展示扫描点 todo
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
      this.isFixed = scrollTop >= 360
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./applyNav.scss";
@import "@/assets/scss/base.scss";
</style>
