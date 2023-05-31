import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios'

const myAxios = (config: AxiosRequestConfig) => {
  const service = axios.create({
    baseURL: 'http://localhost:5173',
    timeout: 10000,
    headers: {
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksInVzZXJuYW1lIjoiVHJhY3kiLCJwYXNzd29yZCI6IiIsIm5pY2tuYW1lIjpudWxsLCJlbWFpbCI6bnVsbCwiYXZhdGFyIjoiIiwiaWF0IjoxNjg1NTMyODc0LCJleHAiOjE2ODU1Njg4NzR9.whio0gvSsu48YOU4mAsQVfSUD35XVlPq9hBC2emD-no'
    }
  })

  return service(config)
}

export default myAxios
