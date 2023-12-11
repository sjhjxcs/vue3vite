import request from '@/utils/request.js'

import api from '@/utils/config.api.js'

const baseUrl = api.baseUrl + 'tob/'
// 字典表
export function getDictListApi(data) {
  return request({
    url: baseUrl + 'common/tst1',
    method: 'get',
    data,
  })
}
// 省市区查询
export function queryAreaApi(data) {
  return request({
    url: baseUrl + 'common/tst2',
    method: 'post',
    data,
  })
}
