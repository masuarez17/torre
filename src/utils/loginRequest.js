import request from '@/utils/requestHandler'
import enviroment from '@/utils/enviroment'

export function register (payload) {
  return request({
    url: `${enviroment.apiUrl}/users/register`,
    method: 'post',
    data: {
      username: payload.username,
      password: payload.password,
      email: payload.email
    }
  })
}

export function login (payload) {
  return request({
    url: `${enviroment.apiUrl}/users/login`,
    method: 'post',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
    data: {
      username: payload.username,
      password: payload.password
    }
  })
}
