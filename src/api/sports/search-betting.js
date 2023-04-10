import request from '@/utils/request'

// 登录接口
export const GetItems = data => {
  return request({
    url: '/api/searchbetting/get_items',
    method: 'get',
    params: data,
  })
}

export const GetFunctionItems = data => {
  return request({
    url: '/api/searchbetting/get_function_items',
    method: 'get',
    // data,
  })
}

export const ResumeEvent = data => {
  return request({
    url: '/api/searchbetting/resume_event',
    method: 'get',
    params: data,
  })
}

export const CancelEvent = data => {
  return request({
    url: '/api/searchbetting/cancel_event',
    method: 'get',
    params: data,
  })
}

export const BalanceEvent = data => {
  return request({
    url: '/api/searchbetting/balance_event',
    method: 'get',
    params: data,
  })
}
