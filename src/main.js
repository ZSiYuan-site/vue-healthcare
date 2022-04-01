import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// mock
import './mock/mockServer'

// css样式还是需要全部引入
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
Vue.use(element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
