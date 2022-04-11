import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 轮播图
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'

// markdown
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// mock
// import './mock/mockServer'

// 引入权限拦截
import './permission'

// css样式还是需要全部引入
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
import axios from 'axios'
Vue.use(mavonEditor)
Vue.use(element)

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
