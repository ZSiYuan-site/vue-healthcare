<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
#app {
  height: 100%;
}
</style>
