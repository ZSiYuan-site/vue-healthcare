import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 轮播图
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'

// 引入图片懒加载的插件
import VueLazyLoad from 'vue-lazyload'

// markdown
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// mock
// import './mock/mockServer'

// 引入并且注册处理图片异常的自定义指令
import * as directives from '@/directives'

// 引入权限拦截
import './permission'

// css样式还是需要全部引入
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
import axios from 'axios'
Vue.use(VueLazyLoad, {
  // 放置一张loading图，是svg格式的,也就是在图片完全显示之前会展示这个svg图片
  loading: '/image/loading-spokes.svg'
})
Object.keys(directives).forEach(key => {
  // directive 第一个参数 是指令名称，第二个参数是配置对象
  // 注册自定义指令
  Vue.directive(key, directives[key])
})
Vue.use(mavonEditor)
Vue.use(element)

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
