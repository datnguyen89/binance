import request from '../requests/request'
import { setRecoil } from 'recoil-nexus'
import { accessTokenState, refreshTokenState } from '../recoil/authState'

const authStore = {
  loginCustomerWebApplication: data => {
    return new Promise((resolve, reject) => {
      const url = '/LoginCustomerWebApplication'
      request.post(url, data, false, false)
        .then(res => {
          localStorage.setItem('refreshToken', res?.param?.refreshToken)
          localStorage.setItem('accessToken', res?.param?.token)
          setRecoil(refreshTokenState,res?.param?.refreshToken)
          setRecoil(accessTokenState,res?.param?.token)
          resolve(res)
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
        .then(res => {
          localStorage.setItem('accessToken', res?.param)
          setRecoil(accessTokenState, res?.param)
          resolve(res)
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
        .then(res => {
          localStorage.setItem('refreshToken', res?.param?.refreshToken)
          localStorage.setItem('accessToken', res?.param?.token)
          setRecoil(refreshTokenState,res?.param?.refreshToken)
          setRecoil(accessTokenState,res?.param?.token)
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
}
export default authStore