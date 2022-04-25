import { atom } from 'recoil'

export const isDarkState = atom({
  key: 'isDarkState',
  default: localStorage.getItem('isDarkState') ? JSON.parse(localStorage.getItem('isDarkState')) : false,
})