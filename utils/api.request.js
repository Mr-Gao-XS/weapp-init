
// 小程序 Promise 封装 wx.request

import ENV_CONFIG from './env.config'

class Http {

  //定义baseURL
  constructor(parms) {
    this.baseURL = parms.baseURL
  }

  // get 请求
  get(url, data) {
    return this.ajax('GET', url, data)
  }

  // post 请求
  post(url, data) {
    return this.ajax('POST', url, data)
  }

  // 公共请求方法
  ajax(method, url, data) {
    wx.showLoading({
      title: '加载中',
      mask: false
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseURL + url,
        data,
        header: {},
        method,
        dataType: 'json',
        responseType: 'text',
        success: res => {
          console.log(1)
          resolve(res)
        },
        fail: res => {
          console.log(2)
          reject(res)
        },
        complete: res => {
          console.log(3)
          wx.hideLoading()
        }
      })
    })
  }
}

const ajax = new Http({
  baseURL: ENV_CONFIG.API_BASE_URl
})

export default ajax

export const getCatList = () => {
  return ajax.get('/catList')
}

