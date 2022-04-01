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
        <div
          class="doc-main-content"
          v-for="(item, index) in centerContent"
          :key="index"
        >
          {{ item }}
        </div>
      </div>

      <!-- 右侧滑动区域 -->
      <div class="doc-slider">
        <ul>
          <li v-for="(item, index) in rightList" :key="index">
            <a href="javascript:;"> {{ item }} </a>
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
    return {
      // 右侧的目录列表
      rightList: ['1', '2', '3', '4', '5'],
      // 中间的主体内容
      centerContent: ['1区域', '2区域', '3区域', '4区域', '5区域'],
      listBoxState: true // 点击导航栏时，暂时停止监听页面滚动
    }
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="scss" scoped>
@import "./doc.scss";
</style>
