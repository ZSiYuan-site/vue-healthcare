import {
  SET_TOKEN,
  SAVE_USERINFO
} from './mutation-types'

import {
  login
} from '../api/index'

// 引入路由
import router from '../router/index'

export default {
  async [SAVE_USERINFO] ({
    commit
  }, {
    username,
    password
  }) {
    const result = await login(username, password)
    // 调用设置token的mutation
    result.code === 0 && commit(SET_TOKEN, result.data.token)
    delete result.data.token
    // 保存用户信息到vuex
    commit(SAVE_USERINFO, result.data)
    // 跳转路由到首页
    router.push('/home')
  }
}
