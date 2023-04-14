import axios from 'axios'

const instace = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000
})

instace.interceptors.request.use()
