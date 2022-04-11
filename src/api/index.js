/**
 * @description api接口的统一管理
 * @author zsy
 */
import myAxios from './myAxios'

// 测试
export const test = () => myAxios({
  url: '/mock/togue',
  method: 'get'
})

// 获取信息
export const getApplyInfo = (applyName) => myAxios({
  url: '/getApply',
  method: 'post',
  data: applyName
})

// 新增信息
// export const addApplyInfo = (ApplyInfo) => myAxios({
//   url: '/addApply',
//   method: 'post',
//   data: ApplyInfo
// })

// 用户登录
export const login = (username, password) => myAxios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username,
    password
  }
})
