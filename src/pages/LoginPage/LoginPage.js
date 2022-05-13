import React, { useEffect, useState } from 'react'
import { Button, Form, Input } from 'antd'
import authStore from '../../stores/authStore'
import { useNavigate } from 'react-router-dom'

const LoginPage = props => {
  // region props, hook, state =================
  const navigate = useNavigate()
  const [formLogin] = Form.useForm()

  const [visibleOtp, setVisibleOtp] = useState(false)
  const [currPayload, setCurrPayload] = useState({})
  const [extendData, setExtendData] = useState('')
  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============
  const handleLogin = (e) => {
    let payload = {
      ExtendData: '',
      ActiveCode: '',
      UserName: e.userName,
      Password: e.password,
      ClientId: 6,
    }
    authStore.loginCustomerWebApplication(payload)
      .then(res => {
        switch (res?.responseCode) {
          case 0:
            navigate('/')
            break
          case -52:
            let newPayload = { ...payload, description: res?.description }
            setCurrPayload(newPayload)
            setVisibleOtp(true)
            setExtendData(res?.extendData)
            break
          default:
            break
        }
      })
  }
  const handleOtp = (e) => {
    console.log(extendData)
    let payload = {
      ExtendData: extendData,
      ActiveCode: e.otp,
      UserName: currPayload.UserName,
      Password: currPayload.Password,
      ClientId: 6,
    }
    authStore.activeDevice(payload)
      .then(res => {
        switch (res?.responseCode) {
          case 0:
            navigate('/')
            break

          default:
            break
        }
      })
  }
  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================
  useEffect(() => {
    if (!formLogin) return
    formLogin.setFieldsValue({
      userName: 'tuongtm07',
      password: '123456aA@',
    })
  }, [formLogin])
  // endregion
  return (
    <div>
      <Form
        form={formLogin}
        labelAlign={'left'}
        onFinish={handleLogin}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        colon={false}
      >
        <Form.Item
          name={'userName'}
          label={'Tên đăng nhập'}>
          <Input />
        </Form.Item>
        <Form.Item
          name={'password'}
          label={'Mật khẩu'}>
          <Input />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 0 }}
          wrapperCol={{ span: 24 }}
        >
          <Button block type={'primary'} htmlType={'submit'}>Login</Button>
        </Form.Item>
      </Form>

      {
        visibleOtp &&
        <Form
          labelAlign={'left'}
          onFinish={handleOtp}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          colon={false}
        >
          <a href={'http://10.10.180.51:7890/makiemtra?mobile=0904578082'} target={'_blank'}>Lấy otp</a>
          <Form.Item
            name={'otp'}
            label={currPayload?.description}>
            <Input />
          </Form.Item>
          <Form.Item
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
          >
            <Button block type={'primary'} htmlType={'submit'}>Submit OTP</Button>
          </Form.Item>
        </Form>
      }

    </div>
  )
}

LoginPage.propTypes = {}

export default LoginPage