<template>
  <div class="login">
    <!-- 头部 -->
    <header>
      <div class="container base-container">
        <div class="logo-box">
          <router-link to="/home">
            <a> AI医疗开放平台 </a>
          </router-link>
        </div>
      </div>
    </header>

    <!-- 登录区域 -->
    <div class="container base-container">
      <!-- 登录面板 -->
      <div class="login-panel">
        <div class="login-nav">
          <span
            :class="{ current: isAccountLogin }"
            @click="handleLoginNav(true)"
            >账号登录</span
          >
          <span
            :class="{ current: !isAccountLogin }"
            @click="handleLoginNav(false)"
            >短信登录</span
          >
        </div>

        <div class="login-form">
          <!-- 账号登录 -->
          <div class="login-tab" v-show="isAccountLogin">
            <el-form>
              <el-form-item>
                <el-input placeholder="账号"></el-input>
              </el-form-item>

              <el-form-item>
                <el-input placeholder="密码"></el-input>
              </el-form-item>

              <el-form-item>
                <el-radio label="记住登录"></el-radio>
                <a href="javascript:;" class="forger-password"> 忘记密码 </a>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" round size="mini">登录</el-button>
                <span class="register-now">
                  没有账号?
                  <a href="javascript:;">
                    立即注册<i class="el-icon-arrow-right"></i>
                  </a>
                </span>
              </el-form-item>
            </el-form>
          </div>

          <!-- 短信登录 -->
          <div class="login-tab" v-show="!isAccountLogin">
            <el-form>
              <el-form-item>
                <el-input placeholder="手机号"></el-input>
              </el-form-item>

              <el-form-item>
                <el-input
                  placeholder="验证码"
                  class="identifying-code"
                ></el-input>
                <el-button class="get-code-btn" round>获取短信验证码</el-button>
              </el-form-item>

              <el-form-item>
                <el-radio label="记住登录"></el-radio>
                <a href="javascript:;" class="forger-password"> 忘记密码 </a>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" round>登录</el-button>
                <span class="register-now">
                  没有账号?
                  <a href="javascript:;">
                    立即注册<i class="el-icon-arrow-right"></i>
                  </a>
                </span>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <div class="other-login">
          <span>您可以使用第三方账号登录</span>
          <a href="javascript:;" class="wobo-login"> </a>
          <a href="javascript:;" class="wechat-login"> </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HealthcareLogin',

  data () {
    return {
      isAccountLogin: true
    }
  },

  mounted () {},

  methods: {
    // 点击上边的导航
    handleLoginNav (flag) {
      if (flag) {
        this.isAccountLogin = true
      } else {
        this.isAccountLogin = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./login.scss";
@import "../../assets/scss/base.scss";
</style>
