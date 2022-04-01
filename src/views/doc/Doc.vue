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
        <json-viewer :value="content" copyable></json-viewer>
      </div>
    </div>
  </div>
</template>

<script>
import JsonViewer from 'vue-json-viewer'
export default {
  name: 'VueHealthcareDoc',
  // 注册组件
  components: {
    JsonViewer
  },
  data () {
    return {
      // 舌诊数据
      content: {},
      // 中间的主体内容
      centerContent: ['1区域', '2区域', '3区域', '4区域', '5区域'],
      listBoxState: true // 点击导航栏时，暂时停止监听页面滚动
    }
  },
  mounted () {
    // 获取舌诊数据
    this.getTogueDate()
  },

  methods: {
    // 获取舌诊数据
    getTogueDate () {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./doc.scss";
</style>
