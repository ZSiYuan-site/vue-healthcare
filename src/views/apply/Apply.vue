<template>
  <div class="apply">

    <div class="apply-banner">
      <div class="container">
        <div class="demo">
          <a href="/#/apply/doc/2">技术文档</a>
        </div>
      </div>
    </div>

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
</style>
