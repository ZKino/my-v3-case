import axios from 'axios'

const env = import.meta.env
console.log(env, 'env')

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'https://www.baidu.com'
} else if (process.env.NODE_ENV == 'debug') {
  axios.defaults.baseURL = 'https://www.ceshi.com'
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'https://www.production.com'
}

const myAxios = (axiosConfig: any) => {
  const service = axios.create({
    baseURL: '/apiTest',
    timeout: 10000,
    headers: {
      auth_token: 'fs_15982053044_cc03cca1-dd66-5150-b302-d458e2ab789f',
    },
  })

  return service(axiosConfig)
}

export default myAxios
