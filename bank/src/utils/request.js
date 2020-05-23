import axios from 'axio'

let request = axios.creat({
  baseURL: 'http://localhost:7001',
  timeout: 50000,
  withCredentials: true
})
// request 请求 拦截器
request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)
// response 响应 拦截器
request.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 0) {
      return Promise.reject(res)
    } else {
      return res
    }
  },
  error => {
    Promise.reject(error)
  }
)

function service(url, method, data) {
  method = method.toLocaleLowerCase()
  let dataType = method === 'get' ? 'params' : 'data'
  return request({ url, method, [dataType]: data })
}

export { request, service }
