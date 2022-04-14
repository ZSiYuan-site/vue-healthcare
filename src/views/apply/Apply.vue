<template>
  <div class="apply">
    <!-- banner区域 -->
    <div class="apply-banner">
      <div class="base-container container">
        <!-- 左侧 -->
        <div class="apply-banner-left">
          <h1 class="title">人脸识别</h1>
          <div class="desc">
            <p>精准实时的人脸检测、分析、识别等服务，在线、离线满足多样需求</p>
          </div>
          <div class="btn-group">
            <button class="first-btn">立即选购</button>
            <!-- <el-button type="primary">立即选购</el-button> -->
            <button @click="gotoDoc" class="second-btn">API文档</button>
            <!-- <el-button @click="gotoDoc">API文档</el-button> -->
          </div>
        </div>
        <!-- 右侧 -->
        <div class="apply-banner-right"></div>
      </div>
    </div>

    <!-- 吸顶的组件 -->
    <ApplyNav />
  </div>
</template>

<script>
import ApplyNav from './applyNav/ApplyNav.vue'
export default {
  name: 'HealthcareApply',
  components: {
    ApplyNav
  },
  data () {
    return {}
  },

  mounted () {},

  methods: {
    gotoDoc () {
      this.$router.push('/apply/doc/1')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./apply.scss";
@import "../../assets/scss/base.scss";
</style>
