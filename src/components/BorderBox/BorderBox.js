import React from 'react'
import PropTypes from 'prop-types'
import { BorderBoxWrapper } from './BorderBoxStyled'
import { useRecoilValue } from 'recoil'
import { appThemeSelector } from '../../recoil/commonState'

const BorderBox = props => {
  // region props, hook, state =================
  const { children, active } = props
  const appTheme = useRecoilValue(appThemeSelector)
  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============

  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================

  // endregion
  return (
    <BorderBoxWrapper active={active} appTheme={appTheme}>
      {children}
    </BorderBoxWrapper>
  )
}

BorderBox.propTypes = {
  active: PropTypes.bool,
}

export default BorderBox