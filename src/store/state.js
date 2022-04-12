import {
  getToken
} from '../utils/auth'

export default {
  // 先直接从本地读取token
  token: getToken(),
  // 用户信息
  userInfo: JSON.parse(localStorage.getItem('userInfo'))
}
