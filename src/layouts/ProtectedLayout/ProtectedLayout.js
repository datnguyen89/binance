import React from 'react'
import { Outlet } from 'react-router-dom'
import Sider from 'antd/es/layout/Sider'
import { Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'


const ProtectedLayout = props => {
  // region props, hook, state =================

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
        collapsible
      >
        Sider
      </Sider>
      <Layout>
        <Header>
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