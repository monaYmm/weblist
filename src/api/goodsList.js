import request from '@/utils/request'

// HomeView breedsList request
export const getList = () => {
  return request({
    url: '/api/breeds/list/all',
    method: 'get'
  })
}
