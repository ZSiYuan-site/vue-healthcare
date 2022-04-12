<template>
  <!-- 开放能力 -->
  <div class="ability">
    <div class="base-container">
      <p class="ability-title">开放能力</p>
      <div class="underline">
        <span class="line"></span>
        <span class="circle"></span>
        <span class="line"></span>
      </div>

      <div class="ability-content">
        <!-- 导航 -->
        <div class="ability-tabs-header">
          <div
            class="ability-tabs-item"
            v-for="(item, index) in abilityNav"
            :key="index"
            @click="handleAbilityNav(index)"
            :class="{ AbilityNavActive: currentAbilityItem === index }"
          >
            {{ item }}
          </div>
        </div>

        <!-- 主体 -->
        <div class="ability-tabs-pane">
          <div
            class="ability-tabs-pane-content-item"
            v-show="currentAbilityItem === 0"
          >
            <!-- 每个item项左侧的内容 -->
            <div class="ability-tabs-pane-content">
              <div class="ability-tabs-pane-content-title">智能教育</div>
              <div class="ability-tabs-pane-content-desc">
                基于百度语音交互、人脸与人体识别、文字识别等多项AI技术，赋能软硬件教学产品，实现更好的人机交互体验；同时打造智慧校园，实现校园安全、校内考勤等关键场景升级，提升校园安全和体验，降低管理成本
              </div>
              <a href="javascript:;" class="ability-tabs-pane-content-btn">
                查看方案
              </a>
              <div class="ability-tabs-pane-content-pratice">行业实践</div>
              <div class="ability-tabs-pane-content-list">
                <a href="javascript:;">
                  <img v-lazy="'./image/ability1.png'" alt="" />
                </a>
                <a href="javascript:;">
                  <img v-lazy="'./image/ability1.png'" alt="" />
                </a>
                <a href="javascript:;">
                  <img v-lazy="'./image/ability1.png'" alt="" />
                </a>
                <a href="javascript:;">
                  <img v-lazy="'./image/ability1.png'" alt="" />
                </a>
              </div>
            </div>

            <!-- 每个item项右侧的图片 -->
            <img
              src="./image/ability2.png"
              alt=""
              class="ability-tabs-pane-content-item-img"
            />
          </div>

          <div
            class="ability-tabs-pane-content-item"
            v-show="currentAbilityItem === 1"
          >
            <!-- 每个item项左侧的内容 -->
            <div class="ability-tabs-pane-content">
              <div class="ability-tabs-pane-content-title">智能教育</div>
              <div class="ability-tabs-pane-content-desc">
                基于百度语音交互、人脸与人体识别、文字识别等多项AI技术，赋能软硬件教学产品，实现更好的人机交互体验；同时打造智慧校园，实现校园安全、校内考勤等关键场景升级，提升校园安全和体验，降低管理成本
              </div>
              <a href="javascript:;" class="ability-tabs-pane-content-btn">
                查看方案
              </a>
              <div class="ability-tabs-pane-content-pratice">行业实践</div>
              <div class="ability-tabs-pane-content-list">
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
              </div>
            </div>

            <!-- 每个item项右侧的图片 -->
            <img
              src="./image/ability3.png"
              alt=""
              class="ability-tabs-pane-content-item-img"
            />
          </div>

          <div
            class="ability-tabs-pane-content-item"
            v-show="currentAbilityItem === 2"
          >
            <!-- 每个item项左侧的内容 -->
            <div class="ability-tabs-pane-content">
              <div class="ability-tabs-pane-content-title">智能教育</div>
              <div class="ability-tabs-pane-content-desc">
                基于百度语音交互、人脸与人体识别、文字识别等多项AI技术，赋能软硬件教学产品，实现更好的人机交互体验；同时打造智慧校园，实现校园安全、校内考勤等关键场景升级，提升校园安全和体验，降低管理成本
              </div>
              <a href="javascript:;" class="ability-tabs-pane-content-btn">
                查看方案
              </a>
              <div class="ability-tabs-pane-content-pratice">行业实践</div>
              <div class="ability-tabs-pane-content-list">
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
              </div>
            </div>

            <!-- 每个item项右侧的图片 -->
            <img
              src="./image/ability2.png"
              alt=""
              class="ability-tabs-pane-content-item-img"
            />
          </div>

          <div
            class="ability-tabs-pane-content-item"
            v-show="currentAbilityItem === 3"
          >
            <!-- 每个item项左侧的内容 -->
            <div class="ability-tabs-pane-content">
              <div class="ability-tabs-pane-content-title">智能教育</div>
              <div class="ability-tabs-pane-content-desc">
                基于百度语音交互、人脸与人体识别、文字识别等多项AI技术，赋能软硬件教学产品，实现更好的人机交互体验；同时打造智慧校园，实现校园安全、校内考勤等关键场景升级，提升校园安全和体验，降低管理成本
              </div>
              <a href="javascript:;" class="ability-tabs-pane-content-btn">
                查看方案
              </a>
              <div class="ability-tabs-pane-content-pratice">行业实践</div>
              <div class="ability-tabs-pane-content-list">
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
              </div>
            </div>

            <!-- 每个item项右侧的图片 -->
            <img
              src="./image/ability2.png"
              alt=""
              class="ability-tabs-pane-content-item-img"
            />
          </div>

          <div
            class="ability-tabs-pane-content-item"
            v-show="currentAbilityItem === 4"
          >
            <!-- 每个item项左侧的内容 -->
            <div class="ability-tabs-pane-content">
              <div class="ability-tabs-pane-content-title">智能教育</div>
              <div class="ability-tabs-pane-content-desc">
                基于百度语音交互、人脸与人体识别、文字识别等多项AI技术，赋能软硬件教学产品，实现更好的人机交互体验；同时打造智慧校园，实现校园安全、校内考勤等关键场景升级，提升校园安全和体验，降低管理成本
              </div>
              <a href="javascript:;" class="ability-tabs-pane-content-btn">
                查看方案
              </a>
              <div class="ability-tabs-pane-content-pratice">行业实践</div>
              <div class="ability-tabs-pane-content-list">
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
              </div>
            </div>

            <!-- 每个item项右侧的图片 -->
            <img
              src="./image/ability2.png"
              alt=""
              class="ability-tabs-pane-content-item-img"
            />
          </div>

          <div
            class="ability-tabs-pane-content-item"
            v-show="currentAbilityItem === 5"
          >
            <!-- 每个item项左侧的内容 -->
            <div class="ability-tabs-pane-content">
              <div class="ability-tabs-pane-content-title">智能教育</div>
              <div class="ability-tabs-pane-content-desc">
                基于百度语音交互、人脸与人体识别、文字识别等多项AI技术，赋能软硬件教学产品，实现更好的人机交互体验；同时打造智慧校园，实现校园安全、校内考勤等关键场景升级，提升校园安全和体验，降低管理成本
              </div>
              <a href="javascript:;" class="ability-tabs-pane-content-btn">
                查看方案
              </a>
              <div class="ability-tabs-pane-content-pratice">行业实践</div>
              <div class="ability-tabs-pane-content-list">
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
                <a href="javascript:;">
                  <img src="./image/ability1.png" alt="" />
                </a>
              </div>
            </div>

            <!-- 每个item项右侧的图片 -->
            <img
              src="./image/ability2.png"
              alt=""
              class="ability-tabs-pane-content-item-img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueHealthcareAbility',

  data () {
    return {
      // 开放能力的导航
      abilityNav: [
        '智能教育',
        '智能政务',
        '智能政务',
        '智能政务',
        '智能政务',
        '智能政务'
      ],
      // 当前所点击开放能力的项
      currentAbilityItem: 0
    }
  },

  mounted () {},

  methods: {
    // 点击【开放能力的导航项】
    handleAbilityNav (index) {
      this.currentAbilityItem = index
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./ability.scss";
// @import "../home.scss";
@import "@/assets/scss/base.scss";
</style>
