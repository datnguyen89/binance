import { atom } from 'recoil'

export const accessTokenState = atom({
  key: 'accessTokenState',
  default: localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : 'fakeToken',
})