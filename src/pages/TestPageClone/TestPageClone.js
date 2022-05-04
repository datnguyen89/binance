import React from 'react'
import { TestPageCloneWrapper } from './TestPageCloneStyled'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { PAGES } from '../../constant'

const TestPageClone = props => {
  // region props, hook, state =================
  const navigate = useNavigate()
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
    <TestPageCloneWrapper>
      <Button onClick={() => navigate(PAGES.TEST, { state: '/some-state' })}>Redirect Test With State</Button>
    </TestPageCloneWrapper>
  )
}

TestPageClone.propTypes = {}

export default TestPageClone