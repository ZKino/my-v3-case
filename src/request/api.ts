import myAxios from './http'

export const getList = (data: {}) => {
  return myAxios({
    url: '/api/v1/show/apps',
    method: 'post',
    data,
  })
}
