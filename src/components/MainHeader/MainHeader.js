import React from 'react'
import { MainHeaderLeft, MainHeaderRight, MainHeaderWrapper } from './MainHeaderStyled'
import { Switch } from 'antd'
import ICONS from '../../icons'
import { useRecoilState } from 'recoil'
import { isDarkState } from '../../recoil/commonState'
import { useThemeSwitcher } from 'react-css-theme-switcher'

const MainHeader = props => {
  // region props, hook, state =================
  const [isDark, setIsDark] = useRecoilState(isDarkState)
  const { switcher, themes } = useThemeSwitcher()

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
      <MainHeaderLeft>
        <Switch
          checked={isDark}
          checkedChildren={<img src={ICONS.SUN} alt={''} width={12} height={12} />}
          unCheckedChildren={<img src={ICONS.MOON} alt={''} width={12} height={12} />}
          onChange={toggleTheme} />
      </MainHeaderLeft>
      <MainHeaderRight>
        User
      </MainHeaderRight>
    </MainHeaderWrapper>
  )
}

MainHeader.propTypes = {}

export default MainHeader