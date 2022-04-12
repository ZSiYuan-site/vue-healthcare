<template>
  <div class="home">
    <!-- 轮播图 -->
    <MySwiper />

    <!-- 开放能力 -->
    <Ability />

    <!-- 平台优势 -->
    <Advantage />

    <!-- 合作伙伴 -->
    <Cooperate />

    <!-- 新闻资讯 -->
    <News />

    <!-- 数据展示部分 -->
    <Data />
  </div>
</template>

<script>
import Ability from './ability/Ability.vue'
import Advantage from './advantage/Advantage.vue'
import MySwiper from './mySwiper/MySwiper.vue'
import Cooperate from './cooperate/Cooperate.vue'
import News from './news/News.vue'
import Data from './data/Data.vue'
export default {
  components: { Ability, Advantage, MySwiper, Cooperate, News, Data },
  name: 'HealthcareHome',

  data () {
    return {}
  },

  mounted () {
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
@import "./home.scss";
@import "../../assets/scss/base.scss";
</style>
