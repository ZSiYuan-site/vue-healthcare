import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  return config
})

// 响应拦截器
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error.message)
    // 错误了，就得返回一个失败的promise，防止往下执行.then
    return Promise.reject(error)
  }
)

export default instance
