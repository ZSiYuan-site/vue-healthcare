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
            <el-form
              :model="accountLoginForm"
              :rules="accountLoginFormRules"
              ref="accountLoginFormRef"
            >
              <el-form-item prop="username">
                <el-input
                  placeholder="账号"
                  v-model="accountLoginForm.username"
                ></el-input>
              </el-form-item>

              <el-form-item prop="password">
                <el-input
                  placeholder="密码"
                  v-model="accountLoginForm.password"
                ></el-input>
              </el-form-item>

              <el-form-item>
                <el-radio label="记住登录"></el-radio>
                <a href="javascript:;" class="forger-password"> 忘记密码 </a>
              </el-form-item>

              <el-form-item>
                <el-button
                  type="primary"
                  round
                  size="mini"
                  @click="accountLoginSubmit"
                  >登录</el-button
                >
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
import { mapState } from 'vuex'
import { SAVE_USERINFO } from '@/store/mutation-types'
export default {
  name: 'HealthcareLogin',

  data () {
    return {
      // 控制是否是账号登录
      isAccountLogin: true,
      // 账号登录表单
      accountLoginForm: {
        username: '',
        password: ''
      },
      // 账号登录表单验证规则
      accountLoginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '用户名长度在 3 到 10 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '密码长度在 3 到 10 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },

  created () {},
  mounted () {},

  methods: {
    // 点击提交账号登录的表单进行登录
    accountLoginSubmit () {
      this.$refs.accountLoginFormRef.validate(async (valid) => {
        if (!valid) return
        // 分发action，将数据存储到vuex中
        this.$store.dispatch(SAVE_USERINFO, this.accountLoginForm)
        this.$message({
          message: '登录成功',
          type: 'success'
        })
      })
      // console.log(this.accountLoginForm);
    },
    // 点击上边的导航
    handleLoginNav (flag) {
      if (flag) {
        this.isAccountLogin = true
      } else {
        this.isAccountLogin = false
      }
    }
  },
  computed: {
    ...mapState({
      // userInfo: (state) => {
      //   state.userInfo;
      // },
    })
  }
}
</script>

<style lang="scss" scoped>
@import "./login.scss";
@import "../../assets/scss/base.scss";
</style>
