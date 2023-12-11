import request from '../utils/request.js'

import  api  from '../utils/config.api.js'
const baseUrl = api.baseUrl + 'tob/openapi/'
// 省市区查询
export function queryAreaApi(data) {
  return request({
    url: baseUrl + 'common/queyrAreaBy',
    method: 'post',
    data,
  })
}


// 密码登录
export function accountLoginApi(data) {
    return request({
      url: baseUrl+'business/passwordLogin',
      method: 'post',
      data,
    })
}


// 发送手机验证码
export function sendCodeApi(data) {
    return request({
      url: baseUrl+'business/sendMobileCode',
      method: 'post',
      data,
    })
}
// 手机验证码登录-B端用户
export function phoneLoginApi(data) {
    return request({
      url: baseUrl+'business/manageMobileLogin',
      method: 'post',
      data,
    })
}


// 登出
export function logoutApi(data) {
    return request({
      url: api.baseUrl + 'tob/business/logout',
      method: 'post',
      data,
    })
}


// 重置密码

// 校验手机号是否注册
export function judgePhoneApi(data) {
  return request({
    url: baseUrl+'business/isRegister',
    method: 'post',
    data,
  })
}


// 忘记密码接口
export function forgetPasswordApi(data) {
  return request({
    url: baseUrl+'business/mobileResetPassword',
    method: 'post',
    data,
  })
}


// ===========》忘记密码
// 校验账号是否存在
export function judgeAccountApi(data) {
  return request({
    url: baseUrl+'business/exitUser',
    method: 'post',
    data,
  })
}
// 手机验证码重置用户密码
export function mobileResetPasswordApi(data) {
  return request({
    url: baseUrl+'business/mobileResetPassword',
    method: 'post',
    data,
  })
}


// ===========》申请加入
// 申请加入，保存用户信息
export function applyUserApi(data) {
  return request({
    url: baseUrl+'business/applyUser',
    method: 'post',
    data,
  })
}
// 申请加入，发送验证码
export function sendSmsApi(data) {
  return request({
    url: baseUrl+'business/sendSms',
    method: 'post',
    data,
  })
}

// 校验账号是否存在
export function applyApi(data) {
  return request({
    url: baseUrl+'business/applyService',
    method: 'post',
    data,
  })
}


// ===========》服务商
// 服务商列表

export function businessListApi(data) {
  return request({
    url: baseUrl+'business/pageList',
    method: 'post',
    data,
  })
}

