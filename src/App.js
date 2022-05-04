import React from 'react'
// region Styling
import './App.less'
import LoadingOverLay from './components/LoadingOverLay'
// endregion
// region Router
import { Route, Routes } from 'react-router-dom'
import history from './customRouter/history'
import CustomRouter from './customRouter/CustomRouter'
// endregion
// region Pages
import { PAGES } from './constant'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import ProtectedLayout from './layouts/ProtectedLayout'
import AuthenticationLayout from './layouts/AuthenticationLayout'
import TestPage from './pages/TestPage'
import TestPageClone from './pages/TestPageClone'


// endregion
const App = () => {
  return (
    <>
      <CustomRouter history={history}>
        <Routes>
          <Route element={<AuthenticationLayout />}>
            <Route path={PAGES.LOGIN} element={<LoginPage />} />
          </Route>
          <Route element={<ProtectedLayout />}>
            <Route path={PAGES.HOME} element={<HomePage />} />
            <Route path={PAGES.TEST} element={<TestPage />}>
              <Route path=":name" element={<TestPage />} />
            </Route>
            <Route path={PAGES.TEST_CLONE} element={<TestPageClone />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </CustomRouter>
      <LoadingOverLay />
    </>
  )
}

export default App
