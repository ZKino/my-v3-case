export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: {
          token: 'Token',
          username: 'Tracy',
        },
      }
    },
  },
]
