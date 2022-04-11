import {
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
    // 将token存储的本地
    localStorage.setItem('token', result.data.token)
    // 跳转路由到首页
    router.push('/home')
    commit(SAVE_USERINFO, result.data)
  }
}
