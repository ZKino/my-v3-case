import axios from 'axios'

// 环境的切换
const NODE_ENV = process.env.NODE_ENV
if (NODE_ENV === 'development') {
  axios.defaults.baseURL = 'https://www.baidu.com'
}

if (NODE_ENV === 'debug') {
  axios.defaults.baseURL = 'https://www.baidu.com'
}

if (NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://www.baidu.com'
}
