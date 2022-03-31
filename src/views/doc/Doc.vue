<template>
  <div class="doc">
    <div class="container">
      <!-- 左侧侧边栏 -->
      <div class="doc-menu">
        <!-- 搜索区域 -->
        <div class="menu-search">
          <h2>舌诊</h2>
        </div>

        <!-- 列表区域 -->
        <div class="menu-list">
          <ul>
            <li>
              <a href="javascript:;">新手指南1</a>
            </li>
            <li>
              <a href="javascript:;">新手指南1</a>
            </li>
            <li>
              <a href="javascript:;">新手指南1</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 中间主体内容 -->
      <div class="doc-main">
        <h1>新手指南1</h1>
        <div class="doc-main-content">成为开发者1</div>
        <div class="doc-main-content">成为开发者2</div>
        <div class="doc-main-content">成为开发者3</div>
        <div class="doc-main-content">成为开发者4</div>
        <div class="doc-main-content">成为开发者5</div>
      </div>

      <!-- 右侧滑动区域 -->
      <div class="doc-slider">
        <ul>
          <li>
            <a href="javascript:;"> AAAA </a>
          </li>
          <li>
            <a href="javascript:;">BBBdwB</a>
          </li>
          <li>
            <a href="javascript:;"> BBBdwdB </a>
          </li>
          <li>
            <a href="javascript:;"> BdwdwBBB </a>
          </li>
          <li>
            <a href="javascript:;"> BdwdwBBB </a>
          </li>

          <li>
            <a href="javascript:;"> BdwdwBBB </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueHealthcareDoc',

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
