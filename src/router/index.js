import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../components/layout/Layout'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  component: () => import('@/views/login/Login.vue'),
  name: 'login'
},
{
  path: '/',
  // component: import('@/components/layout/Layout.vue'),
  component: Layout,
  children: [{
    // 默认展示home页面
    path: '',
    component: () => import('@/views/home/Home.vue'),
    name: 'home'
  }, {
    path: '/home',
    component: () => import('@/views/home/Home.vue'),
    name: 'home'
  },
  {
    path: '/apply/:id',
    component: () => import('@/views/apply/Apply.vue')
  },
  {
    path: 'apply/doc/:id',
    component: () => import('@/views/doc/Doc.vue')
  },
  {
    path: '/news',
    component: () => import('@/views/news/News.vue')
  }, {
    path: '/404',
    component: () => import('@/views/notFound/NotFound.vue')
  }
  ]
}
]

const router = new VueRouter({
  routes
})

export default router
