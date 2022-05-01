import React from 'react'
import { MainHeaderWrapper } from './MainHeaderStyled'
import { Layout, Switch } from 'antd'
import ICONS from '../../icons'
import { useRecoilState } from 'recoil'
import { isDarkState } from '../../recoil/commonState'
import { useThemeSwitcher } from 'react-css-theme-switcher'

const { Header } = Layout
const MainHeader = props => {
  // region props, hook, state =================
  const [isDark, setIsDark] = useRecoilState(isDarkState)
  const { switcher, currentTheme, themes } = useThemeSwitcher()

  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============
  const toggleTheme = (isChecked) => {
    setIsDark(isChecked)
    localStorage.setItem('isDarkState', JSON.stringify(isChecked))
    switcher({ theme: isChecked ? themes.dark : themes.light })
  }
  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================

  // endregion
  return (
    <MainHeaderWrapper>
      <Header
        className={'site-layout-background'}
      >
        <Switch
          checked={isDark}
          checkedChildren={<img src={ICONS.SUN} alt={''} width={12} height={12} />}
          unCheckedChildren={<img src={ICONS.MOON} alt={''} width={12} height={12} />}
          onChange={toggleTheme} />
      </Header>
    </MainHeaderWrapper>
  )
}

MainHeader.propTypes = {}

export default MainHeader