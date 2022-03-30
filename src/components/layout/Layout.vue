<template>
  <div>
    <TopNav />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import TopNav from '../topNav/TopNav.vue'
import Footer from '../footer/Footer.vue'
export default {
  name: 'HealthcareLayout',
  components: {
    TopNav,
    Footer
  },
  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
