import myAxios from './request'

export const getUsers = () => {
  return myAxios({
    url: '/apiTest/api/user/users',
    method: 'GET',
  })
}
