import React from 'react'
import { Outlet } from 'react-router-dom'
import Sider from 'antd/es/layout/Sider'
import { Layout } from 'antd'
import { useThemeSwitcher } from 'react-css-theme-switcher'

const { Content, Footer, Header } = Layout

const ProtectedLayout = props => {
  // region props, hook, state =================
  const { currentTheme } = useThemeSwitcher()
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
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme={currentTheme}
        collapsible
      >
        Sider
      </Sider>
      <Layout>
        <Header
          className={'site-layout-background'}
        >
          Header
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>
          Footer
        </Footer>
      </Layout>
    </Layout>
  )
}

ProtectedLayout.propTypes = {}

export default ProtectedLayout