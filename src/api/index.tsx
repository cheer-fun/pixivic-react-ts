import request from './request';

export const getRank = (params: any) => {
  return request({
    url: `/ranks`,
    method: 'get',
    params: { ...params, pageSize: 30 }
  })
}