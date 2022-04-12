<template>
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
              <img v-lazy="'./image/home/news1.png'" alt="" />
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
              <img v-lazy="'./image/home/news1.png'" alt="" />
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
              <img v-lazy="'./image/home/news1.png'" alt="" />
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
</template>

<script>
export default {
  name: 'VueHealthcareNews',

  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="scss" scoped>
@import "./news.scss";
</style>
