import {
  SET_TOKEN,
  REMOVE_TOKEN,
  SAVE_USERINFO
} from './mutation-types'

import {
  setToken,
  removeToken
} from '../utils/auth'

export default {
  // 设置token到vuex中
  [SET_TOKEN] (state, token) {
    //  将数据设置给vuex
    state.token = token
    // 一旦vuex中的token发生变化，需要同步给缓存
    setToken(token)
  },
  // 移除token
  [REMOVE_TOKEN] (state) {
    state.token = null
    // 同步到缓存
    removeToken()
  },

  // 保存用户信息
  [SAVE_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
    // 同步到缓存中
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }
}
