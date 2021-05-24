import request from '@/utils/requestHandler'
import enviroment from '@/utils/enviroment'

export function fetchQuery (payload) {
  return request({
    url: `https://search.torre.co/people/_search/?size=5&aggregate=false&offset=${payload.offset}`,
    method: 'post',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
    data: JSON.stringify({
      name: {
        term: payload.query
      }
    })
  })
}

export function fetchGenome (username) {
  return request({
    url: `${enviroment.apiUrl}/users/genome/${username}`,
    method: 'get',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  })
}

export function profilePicture (username) {
  return request({
    url: `${enviroment.apiUrl}/users/profilepicture/${username}`,
    method: 'get',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  })
}

export function hasVideo (username) {
  return request({
    url: `${enviroment.apiUrl}/users/checkVideo/${username}`,
    method: 'get',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  })
}

export function uploadVideo (payload) {
  console.log('UPLOAD2')
  const formData = new FormData()
  formData.append('video', payload.video)
  return request({
    url: `${enviroment.apiUrl}/users/uploadVideo/${payload.username}`,
    method: 'post',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
    data: formData
  })
}
