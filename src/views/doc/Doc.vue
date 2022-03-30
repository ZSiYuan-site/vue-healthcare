<template>
  <div class="doc">
    <div class="container">
      <div class="doc-list">
        <div class="demo">舌诊</div>
        <div class="demo2">
          <ul>
            <li>新手指南</li>
            <li>新手指南</li>
            <li>新手指南</li>
          </ul>
        </div>
        <el-button>默认按钮</el-button>
      </div>
      <div class="doc-content">我是中间的主要内容</div>
      <div class="doc-slider">我是右侧可以滑动的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HealthcareDco',

  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="scss" scoped>
@import "./doc.scss";
</style>
