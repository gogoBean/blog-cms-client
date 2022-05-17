import axios from 'axios'
import ReactDOM from 'react-dom';
import { message, Spin } from 'antd';
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// 当前正在请求的数量
let requestCount = 0

// 显示loading
function showLoading () {
  if (requestCount === 0) {
    var dom = document.createElement('div')
    dom.setAttribute('id', 'loading')
    document.body.appendChild(dom)
    ReactDOM.render(<Spin tip="加载中..." size="large" />, dom)
  }
  requestCount++
}

// 隐藏loading
function hideLoading () {
  requestCount--
  if (requestCount === 0) {
    document.body.removeChild(document.getElementById('loading'))
  }
}


// 请求拦截
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()
    // }
    config.headers['Authorization'] = getToken()
    // 判断当前请求是否设置了不显示Loading
    if (!config.hideLoading) showLoading()

    return config
  },
  error => {
    // do something with request error
    if (!error.config.hideLoading) hideLoading()
    const reqUrl = error.config.url
    const errCode = error.message
    message.error({
      content: '请求错误' + errCode,
      duration: 5
    })
    console.log('Request error', reqUrl, errCode)
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    // if (!response.config.hideLoading) hideLoading()
    if (response.status === 200 || response.status === 201) {
      // 逻辑正确且请求是200
      return response.data
    } else {
      // 出现错误
      const errorMsg = response.data.message ? response.data.message : `请求错误${response.data.code}`
      const reqUrl = response.config.url
      message.error({
        content: errorMsg,
        duration: 5
      })

      console.log('Response error', reqUrl, errorMsg)
      return Promise.reject(errorMsg)
    }
  },
  error => {
    if (!error.config.hideLoading) hideLoading()
    const reqUrl = error.config.url
    let errCode = ''
    if (error && error.response) {
      errCode = '请求错误' + error.response.status
    } else {
      errCode = error.message
    }
    console.log('Response error', reqUrl, errCode) // for debug
    message.error({
      content: errCode,
      duration: 5
    })
    return Promise.reject(errCode)
  }
)

export default service
