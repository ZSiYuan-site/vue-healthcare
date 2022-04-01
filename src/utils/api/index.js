/**
 * @description api接口的统一管理
 * @author zsy
 */
import myAxios from './myAxios'

// 测试
export const test = myAxios({
  url: '/mock/togue',
  method: 'get'
})
