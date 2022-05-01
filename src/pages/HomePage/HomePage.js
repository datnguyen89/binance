import React from 'react'
import { Button, DatePicker, Input, Pagination, Switch, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { useThemeSwitcher } from 'react-css-theme-switcher'
import { useRecoilState, useRecoilValue } from 'recoil'
import { appThemeSelector, isDarkState } from '../../recoil/commonState'
import { HomePageWrapper } from './HomePageStyled'
import productStore from '../../stores/productStore'
import ICONS from '../../icons'

const HomePage = props => {
  // region props, hook, state =================
  const [isDark, setIsDark] = useRecoilState(isDarkState)
  const appTheme = useRecoilValue(appThemeSelector)

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
  const getProductList = async () => {
    try {
      const params = { _page: 1, _limit: 10 }
      Promise.all([
        productStore.getAll(params),
        productStore.getAll1(params),
        productStore.getAll2(params),
      ])
        .then(([res, res1, res2]) => {
          console.log('res', res)
          console.log('res1', res1)
          console.log('res2', res2)
        })
    } catch (error) {

    }
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
      <Switch
        checkedChildren={1}
        unCheckedChildren={2}
      />
      <Switch />
      <Switch
        checked={isDark}
        checkedChildren={<img src={ICONS.SUN} alt={''} width={12} height={12} />}
        unCheckedChildren={<img src={ICONS.MOON} alt={''} width={12} height={12} />}
        onChange={toggleTheme} />
      <Input
        style={{ width: 300, marginTop: 30 }}
        placeholder='I will change with the theme!'
      />
      <HomePageWrapper>123312</HomePageWrapper>
      <div>
        {JSON.stringify(appTheme)}
      </div>
      <Button onClick={getProductList}>GetList</Button>
    </div>
  )
}

HomePage.propTypes = {}

export default HomePage