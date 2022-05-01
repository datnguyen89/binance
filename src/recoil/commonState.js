import { atom, selector } from 'recoil'
import { DARK_THEME, LIGHT_THEME } from '../constant'

export const isDarkState = atom({
  key: 'isDarkState',
  default: localStorage.getItem('isDarkState') ? JSON.parse(localStorage.getItem('isDarkState')) : false,
})

export const appThemeSelector = selector({
  key: 'appThemeSelector',
  get: ({ get }) => {
    const isDark = get(isDarkState)
    return isDark ? DARK_THEME : LIGHT_THEME
  },
})

export const appLoadingState = atom({
  key: 'appLoadingState',
  default: 0,
})