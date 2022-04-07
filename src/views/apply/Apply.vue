<template>
  <div class="apply">
    <!-- banner区域 -->
    <div class="apply-banner">
      <div class="base-container">
        <div class="demo">
          <a href="/#/apply/doc/2">技术文档</a>
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
