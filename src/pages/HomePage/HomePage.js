import React from 'react'
import { Button, Card, Col, DatePicker, Input, Pagination, Row, Switch, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { useThemeSwitcher } from 'react-css-theme-switcher'
import { useRecoilState, useRecoilValue } from 'recoil'
import { appThemeSelector, isDarkState } from '../../recoil/commonState'
import { HomePageWrapper, TestBoxShadow } from './HomePageStyled'
import productStore from '../../stores/productStore'
import ICONS from '../../icons'
import BorderBox from '../../components/BorderBox'

const HomePage = props => {
  // region props, hook, state =================
  const appTheme = useRecoilValue(appThemeSelector)

  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============

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
    <HomePageWrapper>
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
      <Switch
        checkedChildren={1}
        unCheckedChildren={2}
      />
      <Switch />

      <Input
        style={{ width: 300, marginTop: 30 }}
        placeholder='I will change with the theme!'
      />
      <div>
      </div>
      <Button onClick={getProductList}>GetList</Button>

      <TestBoxShadow appTheme={appTheme}>
        123
      </TestBoxShadow>
      <BorderBox active={false}>
        123312
      </BorderBox>
      <Row>
        <Col span={12}>
          <Card hoverable title="Card title">Card content</Card>

        </Col>
      </Row>
    </HomePageWrapper>
  )
}

HomePage.propTypes = {}

export default HomePage