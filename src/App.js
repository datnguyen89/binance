import React from 'react'
// region Styling
import './App.less'
import ThemeProvider from './provider/ThemeProvider'
import LoadingOverLay from './components/LoadingOverLay'
// endregion
// region Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// endregion
// region Pages
import { PAGES } from './constant'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import ProtectedLayout from './layouts/ProtectedLayout'
import AuthenticationLayout from './layouts/AuthenticationLayout'
import TestPage from './pages/TestPage'


// endregion
const App = () => {
  return (
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
      <LoadingOverLay />
    </ThemeProvider>
  )
}

export default App
