import request from '../requests/request'
import { setRecoil } from 'recoil-nexus'
import { accessTokenState } from '../recoil/authState'

const authStore = {
  loginCustomerWebApplication: data => {
    return new Promise((resolve, reject) => {
      const url = '/LoginCustomerWebApplication'
      request.post(url, data, false, false)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  refreshToken: data => {
    return new Promise((resolve, reject) => {
      const url = '/RefreshToken'
      request.post(url, data, false, false)
        .then(response => {
          localStorage.setItem('accessToken', response?.param)
          setRecoil(accessTokenState, response?.param)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  activeDevice: data => {
    return new Promise((resolve, reject) => {
      const url = '/ActiveDevice'
      request.post(url, data, false, false)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getCommonProperty: () => {
    return new Promise((resolve, reject) => {
      const url = '/GetCommonProperty'
      request.get(url, null, false, false)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getUserProfile: () => {
    return new Promise((resolve, reject) => {
      const url = '/GetUserProfile'
      request.get(url, null, false, false)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

}
export default authStore