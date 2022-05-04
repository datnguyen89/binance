import { atom } from 'recoil'

export const accessTokenState = atom({
  key: 'accessTokenState',
  default: localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : '',
})
export const refreshTokenState = atom({
  key: 'refreshTokenState',
  default: localStorage.getItem('refreshToken') ? localStorage.getItem('refreshToken') : '',
})
