// 小程序 接口列表

import ajax from './api.request'

// getList  data => {}
export const getList = (data) => {
  return ajax.get('/getList', data)
}

// getDetail  id => Number
export const getDetail = ({id}) => {
  return ajax.get('/getDetail', {id})
}

// getLogin  data => {}
export const getLogin = (data) => {
  return ajax.post('/login', data)
}