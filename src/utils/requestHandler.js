import axios from 'axios'

const service = axios.create({
  timeout: 30000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  }
)

export default service
