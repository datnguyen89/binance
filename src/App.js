import React from 'react'
// region Styling
import './App.less'
import ThemeProvider from './provider/ThemeProvider'
// endregion
// region recoil
import { RecoilRoot } from 'recoil'
// endregion
// region Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// endregion
// region Pages
import { PAGES } from './constant'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import ProtectedLayout from './Layouts/ProtectedLayout'
import AuthenticationLayout from './Layouts/AuthenticationLayout'
import TestPage from './pages/TestPage'

// endregion
const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthenticationLayout />}>
              <Route path={PAGES.LOGIN} element={<LoginPage />} />
            </Route>
            <Route element={<ProtectedLayout />}>
              <Route path={PAGES.HOME} element={<HomePage />} />
              <Route path={PAGES.TEST} element={<TestPage />} />

            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
