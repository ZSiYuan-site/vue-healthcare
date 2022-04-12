<template>
  <div class="top-nav-wrap">
    <div class="top-nav">
      <div class="container">
        <!-- logo区域 -->
        <div class="logo">这里放logo啊</div>

        <!-- 导航列表区域 -->
        <div class="nav-lists">
          <!--item项 -->
          <div class="top-nav-item">
            <span class="top-nav-item-text">开放能力</span>

            <div class="children">
              <div class="menu-item">
                <div class="menu-item-title">人脸与人体识别</div>
                <ul class="menu-item-lists">
                  <li>
                    <a href="/#/apply/1">舌诊</a>
                  </li>
                  <li>
                    <a href="">人员</a>
                  </li>
                  <li>
                    <a href="">人脸</a>
                  </li>

                  <li>
                    <a href="">舌诊</a>
                  </li>
                </ul>
              </div>

              <div class="menu-item">
                <div class="menu-item-title">目标检测</div>
                <ul class="menu-item-lists">
                  <li>口罩识别</li>
                  <li>安全</li>
                  <li>人脸对比</li>
                  <li>人脸对比</li>
                  <li>人脸对比</li>
                </ul>
              </div>
              <div class="menu-item">
                <div class="menu-item-title">交通分析</div>
                <ul class="menu-item-lists">
                  <li>人脸对比</li>
                  <li>人脸对比</li>
                  <li>人脸对比</li>
                  <li>人脸对比</li>
                  <li>人脸对比</li>
                </ul>
              </div>
              <div class="menu-item">
                <div class="menu-item-title">文字识别</div>
                <ul class="menu-item-lists">
                  <li>人脸对比</li>
                  <li>人脸对比</li>
                  <li>人脸对比</li>
                  <li>人脸对比</li>
                  <li>人脸对比</li>
                </ul>
              </div>
              <div class="menu-item">
                <div class="menu-item-title">自然语言处理</div>
                <ul class="menu-item-lists">
                  <li>人脸对比</li>
                  <li>人脸对比</li>
                  <li>人脸对比</li>
                  <li>人脸对比</li>
                  <li>人脸对比</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="top-nav-item">
            <span class="top-nav-item-text">开放能力</span>
          </div>

          <div class="top-nav-item">
            <span class="top-nav-item-text">开放能力</span>
          </div>

          <div class="top-nav-item">
            <span class="top-nav-item-text">开放能力</span>
          </div>

          <div class="top-nav-item">
            <span class="top-nav-item-text">开放能力</span>
          </div>

          <div class="top-nav-item register-login">
            <template>
              <span class="top-nav-item-text" @click="gotoLogin" v-if="username"
                >{{ username }}
                <i class="iconfont icon-arrow-down"></i>
                <!-- 下拉展示区域 -->
                <ul class="children">
                  <li>个人中心</li>
                  <li>退出</li>
                </ul>
              </span>
              <span class="top-nav-item-text" v-else> 注册 / 登录 </span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HealthcareTopnav',

  data () {
    return {}
  },

  mounted () {},

  methods: {
    // 点击前往登录页面
    gotoLogin () {
      console.log(this.$store.state.userInfo.username)
      if (this.$store.state.userInfo.username) {
        console.log('test')
      } else {
        this.$router.push({
          name: 'login'
        })
      }
    }
  },

  computed: {
    ...mapState({
      username: (state) => state.userInfo.username
    })
  }
}
</script>

<style lang="scss" scoped>
@import "./topNav.scss";
</style>
