import axios from 'axios'

// 创建 axios 请求实例
const request = axios.create({})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (res) => {
    // 返回数据
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request
