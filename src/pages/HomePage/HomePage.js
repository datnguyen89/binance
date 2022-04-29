import React from 'react'
import { Button, DatePicker, Input, Pagination, Switch, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { useThemeSwitcher } from 'react-css-theme-switcher'
import { useRecoilState } from 'recoil'
import { isDarkState } from '../../recoil/commonState'
import { HomePageWrapper } from './HomePageStyled'

const HomePage = props => {
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
    <div>
      <Button type={'primary'}>Hello</Button>
      <DatePicker format={'DD-MM-YYYY'} />
      <DatePicker.RangePicker />
      <Pagination showSizeChanger />
      <Tag color='success'>success</Tag>
      <Tag color='processing'>processing</Tag>
      <Tag color='error'>error</Tag>
      <Tag color='warning'>warning</Tag>
      <Tag color='default'>default</Tag>

      <Link to={'#'}>test this link</Link>
      <h1>The current theme is: {currentTheme}</h1>
      <Switch />
      <Switch />
      <Switch checked={isDark} onChange={toggleTheme} />

      <Input
        style={{ width: 300, marginTop: 30 }}
        placeholder='I will change with the theme!'
      />
      <HomePageWrapper>123312</HomePageWrapper>
    </div>
  )
}

HomePage.propTypes = {}

export default HomePage