/**
 * @description api接口的统一管理
 * @author zsy
 */
import myAxios from './myAxios'

// 用户登录
export const login = (username, password) => myAxios({
  url: '/api/api/user/login',
  method: 'post',
  data: {
    username,
    password
  }
})
