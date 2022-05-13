import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { useThemeSwitcher } from 'react-css-theme-switcher'
import MainHeader from '../../components/MainHeader'
import MainSideBar from '../../components/MainSideBar'
import { ProtectedLayoutWrapper } from './ProtectedLayoutStyled'
import { accessTokenState } from '../../recoil/authState'
import { useRecoilValue } from 'recoil'
import { PAGES } from '../../constant'

const { Header, Content, Footer } = Layout

const ProtectedLayout = props => {
  // region props, hook, state =================
  const { currentTheme } = useThemeSwitcher()
  let navigate = useNavigate()
  const accessToken = useRecoilValue(accessTokenState)
  const [collapse, setCollapse] = useState(false)
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
  useEffect(() => {
    if (!accessToken) {
      navigate(PAGES.LOGIN)
    }
  }, [accessToken])
  // endregion

  return (
    <ProtectedLayoutWrapper>
      <Layout hasSider style={{ minHeight: '100vh' }}>
        <Sider
          theme={currentTheme}
          collapsed={collapse}
          onCollapse={(e) => setCollapse(e)}
          collapsible>
          <MainSideBar />
        </Sider>
        <Layout>
          <Header className={'site-layout-background'}>
            <MainHeader />
          </Header>

          <Content>
            <Outlet />
          </Content>

          <Footer>
            Footer
          </Footer>
        </Layout>
      </Layout>
    </ProtectedLayoutWrapper>
  )
}

ProtectedLayout.propTypes = {}

export default ProtectedLayout