import React, { useEffect, useState } from 'react'
import { Button, Card, Col, DatePicker, Form, Input, Modal, Pagination, Row, Switch, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { appThemeSelector } from '../../recoil/commonState'
import { HomePageWrapper, TestBoxShadow } from './HomePageStyled'
import productStore from '../../stores/productStore'
import BorderBox from '../../components/BorderBox'
import authStore from '../../stores/authStore'

const { RangePicker } = DatePicker

const HomePage = props => {
  // region props, hook, state =================
  const appTheme = useRecoilValue(appThemeSelector)
  const [isModalVisible, setIsModalVisible] = useState(false)
  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============
  const getProductList = () => {
    try {
      const params = { _page: 1, _limit: 10 }

      productStore.getAll(params)
        .then(res => {
          console.log(res)
        })
      // Promise.all([
      //   productStore.getAll(params),
      //   productStore.getAll1(params),
      //   productStore.getAll2(params),
      // ])
      //   .then(([res, res1, res2]) => {
      //     console.log('res', res)
      //     console.log('res1', res1)
      //     console.log('res2', res2)
      //   })
    } catch (error) {

    }
  }

  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleOk = () => {
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================
  useEffect(() => {
    authStore.getCommonProperty()
    authStore.getUserProfile()
  }, [])
  // endregion

  return (
    <HomePageWrapper>
      <Button type={'primary'}>Hello</Button>
      <DatePicker format={'DD-MM-YYYY'} />
      <Pagination showSizeChanger />
      <Tag color='success'>success</Tag>
      <Tag color='processing'>processing</Tag>
      <Tag color='error'>error</Tag>
      <Tag color='warning'>warning</Tag>
      <Tag color='default'>default</Tag>
      <DatePicker />
      <br />
      <br />
      {/*<RangePicker />*/}


        <Form>
          <Form.Item label={'test'}>
            <div id={'test1'}>
            <RangePicker getPopupContainer={() => document.getElementById('test1')} />
            </div>
          </Form.Item>
        </Form>


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
          <Card hoverable title='Card title'>Card content</Card>

        </Col>
      </Row>
      <br />
      <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>
      <Modal title='Basic Modal' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </HomePageWrapper>
  )
}

HomePage.propTypes = {}

export default HomePage