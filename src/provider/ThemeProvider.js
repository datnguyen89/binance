import React from 'react'
import viVN from 'antd/lib/locale/vi_VN'
import moment from 'moment'
import 'moment/locale/vi'
import { ConfigProvider } from 'antd'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import { useRecoilValue } from 'recoil'
import { isDarkState } from '../recoil/commonState'


const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
}
moment.locale('vi')

const ThemeProvider = props => {
  const { children } = props
  const isDark = useRecoilValue(isDarkState)

  return (
    <ConfigProvider
      locale={viVN}
      getPopupContainer={node => {
        if (node) {
          return node.parentNode
        }
        return document.body
      }}
    >
      <ThemeSwitcherProvider
        themeMap={themes}
        defaultTheme={isDark ? 'dark' : 'light'}>
        {children}
      </ThemeSwitcherProvider>
    </ConfigProvider>

  )
}

ThemeProvider.propTypes = {}

export default ThemeProvider