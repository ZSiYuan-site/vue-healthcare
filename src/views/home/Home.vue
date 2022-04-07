<template>
  <div class="home">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"></div>
        <div class="swiper-slide"></div>
        <div class="swiper-slide"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <!--<div class="swiper-scrollbar"></div>-->
    </div>

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

    <!-- 平台优势 -->
    <div class="advantage">
      <div class="base-container">
        <p class="advantage-title">平台优势</p>
        <div class="underline">
          <span class="line"></span>
          <span class="circle"></span>
          <span class="line"></span>
        </div>

        <div class="advantage-content">
          <div class="advantage-content-item">
            <a href="javascript:;">
              <i>
                <img src="./image/advantage1.png" alt="" />
              </i>
              <h3 class="health-conTit">领先的技术能力</h3>
              <p class="health-content">
                开放腾讯的连接、人工智能、大数据、云计算、安全五大优势能力，推动技术进步，引领行业发展。
              </p>
            </a>
          </div>

          <div class="advantage-content-item">
            <a href="javascript:;">
              <i>
                <img src="./image/advantage1.png" alt="" />
              </i>
              <h3 class="health-conTit">领先的技术能力</h3>
              <p class="health-content">
                开放腾讯的连接、人工智能、大数据、云计算、安全五大优势能力，推动技术进步，引领行业发展。
              </p>
            </a>
          </div>

          <div class="advantage-content-item">
            <a href="javascript:;">
              <i>
                <img src="./image/advantage1.png" alt="" />
              </i>
              <h3 class="health-conTit">领先的技术能力</h3>
              <p class="health-content">
                开放腾讯的连接、人工智能、大数据、云计算、安全五大优势能力，推动技术进步，引领行业发展。
              </p>
            </a>
          </div>

          <div class="advantage-content-item">
            <a href="javascript:;">
              <i>
                <img src="./image/advantage1.png" alt="" />
              </i>
              <h3 class="health-conTit">领先的技术能力</h3>
              <p class="health-content">
                开放腾讯的连接、人工智能、大数据、云计算、安全五大优势能力，推动技术进步，引领行业发展。
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 合作伙伴 -->
    <div class="cooperate">
      <div class="base-container">
        <p class="cooperate-title">合作伙伴</p>
        <div class="underline">
          <span class="line"></span>
          <span class="circle"></span>
          <span class="line"></span>
        </div>

        <div class="cooperate-content">
          <div class="cooperate-item">
            <div class="cooperate-item-img">
              <img src="./image/news1.png" alt="" />
            </div>

            <div class="cooperate-item-right-box">
              <p class="cooperate-item-right-box-title">AI+工业</p>
              <p class="cooperate-item-right-box-context">
                以人工智能技术为手段，精准把握高精度质量检测，大范围安全管理的行业需求，应用机器视觉、体态识别、异常行为分析预警等人工智能技术，在质量检测、生产流程管理、安全防范和监管实施方面，实现实时监控、自动发现问题、主动预警，改善远水救不了近火的窘境，降本增效、安全生产。
              </p>
              <p class="cooperate-item-right-box-partner">合作伙伴</p>
              <div class="partner-box">
                <div class="every-partner">
                  <img src="./image/partner1.png" alt="" />
                </div>

                <div class="every-partner">
                  <img src="./image/partner1.png" alt="" />
                </div>

                <div class="every-partner">
                  <img src="./image/partner1.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div class="cooperate-item">
            <div class="cooperate-item-right-box">
              <p class="cooperate-item-right-box-title">AI+工业</p>
              <p class="cooperate-item-right-box-context">
                以人工智能技术为手段，精准把握高精度质量检测，大范围安全管理的行业需求，应用机器视觉、体态识别、异常行为分析预警等人工智能技术，在质量检测、生产流程管理、安全防范和监管实施方面，实现实时监控、自动发现问题、主动预警，改善远水救不了近火的窘境，降本增效、安全生产。
              </p>
              <p class="cooperate-item-right-box-partner">合作伙伴</p>
              <div class="partner-box">
                <div class="every-partner">
                  <img src="./image/partner1.png" alt="" />
                </div>

                <div class="every-partner">
                  <img src="./image/partner1.png" alt="" />
                </div>

                <div class="every-partner">
                  <img src="./image/partner1.png" alt="" />
                </div>
              </div>
            </div>

            <div class="cooperate-item-img">
              <img src="./image/news1.png" alt="" />
            </div>
          </div>

          <div class="cooperate-item">
            <div class="cooperate-item-img">
              <img src="./image/news1.png" alt="" />
            </div>

            <div class="cooperate-item-right-box">
              <p class="cooperate-item-right-box-title">AI+工业</p>
              <p class="cooperate-item-right-box-context">
                以人工智能技术为手段，精准把握高精度质量检测，大范围安全管理的行业需求，应用机器视觉、体态识别、异常行为分析预警等人工智能技术，在质量检测、生产流程管理、安全防范和监管实施方面，实现实时监控、自动发现问题、主动预警，改善远水救不了近火的窘境，降本增效、安全生产。
              </p>
              <p class="cooperate-item-right-box-partner">合作伙伴</p>
              <div class="partner-box">
                <div class="every-partner">
                  <img src="./image/partner1.png" alt="" />
                </div>

                <div class="every-partner">
                  <img src="./image/partner1.png" alt="" />
                </div>

                <div class="every-partner">
                  <img src="./image/partner1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 新闻资讯 -->
    <div class="news">
      <div class="base-container">
        <p class="news-title">新闻资讯</p>
        <div class="underline">
          <span class="line"></span>
          <span class="circle"></span>
          <span class="line"></span>
        </div>

        <div class="news-title-pane">
          <div class="news-title-pane-item">
            <a href="javascirpt:;">
              <p class="news-title-pane-item-img">
                <img src="./image/news1.png" alt="" />
              </p>
              <div class="news-title-pane-item-box">
                <h3 class="health-conTit">
                  汤道生：腾讯以C2B全面推进智慧医疗 做医务工作者的同行人
                </h3>
                <p class="health-conTime">2020/09/10</p>
                <p class="health-content">
                  9月10日，腾讯全球数字生态大会智慧医疗专场云端亮相，腾讯高级执行副总裁、云与智慧产业事业群总裁汤道生，解读了以C2B为抓手全面推动医疗健康业务的构想。
                </p>
              </div>
            </a>
          </div>

          <div class="news-title-pane-item">
            <a href="javascirpt:;">
              <p class="news-title-pane-item-img">
                <img src="./image/news1.png" alt="" />
              </p>
              <div class="news-title-pane-item-box">
                <h3 class="health-conTit">
                  汤道生：腾讯以C2B全面推进智慧医疗 做医务工作者的同行人
                </h3>
                <p class="health-conTime">2020/09/10</p>
                <p class="health-content">
                  9月10日，腾讯全球数字生态大会智慧医疗专场云端亮相，腾讯高级执行副总裁、云与智慧产业事业群总裁汤道生，解读了以C2B为抓手全面推动医疗健康业务的构想。
                </p>
              </div>
            </a>
          </div>

          <div class="news-title-pane-item">
            <a href="javascirpt:;">
              <p class="news-title-pane-item-img">
                <img src="./image/news1.png" alt="" />
              </p>
              <div class="news-title-pane-item-box">
                <h3 class="health-conTit">
                  汤道生：腾讯以C2B全面推进智慧医疗 做医务工作者的同行人
                </h3>
                <p class="health-conTime">2020/09/10</p>
                <p class="health-content">
                  9月10日，腾讯全球数字生态大会智慧医疗专场云端亮相，腾讯高级执行副总裁、云与智慧产业事业群总裁汤道生，解读了以C2B为抓手全面推动医疗健康业务的构想。
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 数据展示部分 -->
    <div class="data">
      <div class="base-container">
        <div class="data-text">
          <p>全线能力持续上新，期待您的加入</p>
        </div>

        <div class="data-content">
          <div class="data-item">
            <p>
              <span class="big">30</span>
              项+
            </p>
            <p>开放能力</p>
          </div>
          <div class="data-item">
            <p>
              <span class="big">30</span>
              项+
            </p>
            <p>开放能力</p>
          </div>
          <div class="data-item">
            <p>
              <span class="big">30</span>
              项+
            </p>
            <p>开放能力</p>
          </div>
        </div>

        <div class="btn">
          <button>立即体验</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'HealthcareHome',

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

  mounted () {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
      // 如果需要自动切换海报
      // autoplay: {
      //   delay: 1000,//时间 毫秒
      //   disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
      // },
    })
    swiper()
  },

  methods: {
    // 点击【开放能力的导航项】
    handleAbilityNav (index) {
      this.currentAbilityItem = index
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./home.scss";
@import "../../assets/scss/base.scss";
</style>
