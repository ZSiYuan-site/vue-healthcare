/**
 * 权限拦截  todo
 */

// 引入nprogress
import nprogress from 'nprogress'
import './nprogress/progress.css'

// 引入路由
import router from './router/index'

import {
  getToken
} from './utils/auth'

// 白名单
const whiteLists = ['/login', '404']

/**
 * 路由前置守卫
 */
router.beforeEach((to, from, next) => {
  nprogress.start()
  // 有token
  if (getToken()) {
    // 有token并且去登录页面,那么就之直接跳转到首页
    if (to.path === '/login') {
      next('/')
    } else {
      // 直接放行
      next()
    }
  } else {
    //   没有token ,并且去的页面是404或者登录页面
    if (whiteLists.indexOf(to.path) > -1) {
      // 直接放行
      next()
    } else {
      // 没有token,并且想去非404页面和登录页面,那么直接跳转到登录页面
      next('/login')
    }
  }

  // 为了解决手动切换地址时，进度条不关闭的问题
  nprogress.done()
})

/**
 * 路由的后置守卫
 */
router.afterEach(() => {
  // 关闭进度条
  nprogress.done()
})
