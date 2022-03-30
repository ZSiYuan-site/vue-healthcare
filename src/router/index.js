import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/login/Login.vue'
import Home from '../views/home/Home.vue'
import Apply from '../views/apply/Apply.vue'
import Doc from '../views/doc/Doc.vue'
import News from '../views/news/News.vue'

import Layout from '../components/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  component: Login
},
{
  path: '/',
  component: Layout,
  children: [{
    // 默认展示home页面
    path: '',
    component: Home
  }, {
    path: '/home',
    component: Home
  },
  {
    path: '/apply/:id',
    component: Apply
  },
  {
    path: 'apply/doc/:id',
    component: Doc
  },
  {
    path: '/news',
    component: News
  }
  ]
}
]

const router = new VueRouter({
  routes
})

export default router
