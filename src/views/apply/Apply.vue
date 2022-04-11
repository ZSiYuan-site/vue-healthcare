<template>
  <div class="apply">
    <!-- banner区域 -->
    <div class="apply-banner">
      <div class="base-container container">
        <h1 class="title">人脸识别</h1>
        <div class="desc">
          <p>精准实时的人脸检测、分析、识别等服务，在线、离线满足多样需求</p>
        </div>
        <div class="btn-group">
          <el-button type="primary">立即选购</el-button>
          <el-button>管理控制台</el-button>
        </div>
      </div>
    </div>

    <!-- 吸顶的组件 -->
    <ApplyNav />
  </div>
</template>

<script>
import ApplyNav from '../../components/applyNav/ApplyNav.vue'
export default {
  name: 'HealthcareApply',
  components: {
    ApplyNav
  },
  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="scss" scoped>
@import "./apply.scss";
@import "../../assets/scss/base.scss";
</style>
