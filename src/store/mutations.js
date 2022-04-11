import {
  SAVE_USERINFO
} from './mutation-types'

export default {
  // 保存用户信息
  [SAVE_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}
