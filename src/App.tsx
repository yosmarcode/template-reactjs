import React, { lazy } from 'react'
import './styles/customs.css'
import 'animate.css'

import { typePrivateRouter, typePublicRouter } from './router/TypeRouter'
import Loadable from './core/components/Loaders/Loadable'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './router/PrivateRouter'
import userStore from './core/guards/UserLocalStorage'
import NotFound from './core/components/NotFound/NotFound'
import LayoutPage from './core/layout/LayoutPage'

function App () {
  const LoginPage = Loadable(lazy(() => import('./auth/PagesLogin'))) // Login
  const PageDashboard = Loadable(lazy(() => import('./pages/PageDasboard/PagesDashboard'))) // Page Dashboard with
  const PageUser = Loadable(lazy(() => import('./pages/PagesUser/PageUser'))) // User
  const PageUUserLogin = Loadable(lazy(() => import('./pages/PageUserLogin/PageUserLogin'))) // User

  return (
    <div>
      <Routes>

        <Route index element={<Navigate to={typePrivateRouter.APP} />} />
        <Route path='/' element={<Navigate to={typePrivateRouter.APP} />} />
        <Route path={typePublicRouter.LOGIN} element={<LoginPage />} />
        <Route element={<LayoutPage />}>
          <Route element={<ProtectedRoute isAllowed={userStore} />}>
            <Route path={typePrivateRouter.APP} element={<PageDashboard />} />
            <Route path={typePrivateRouter.USER} element={<PageUser />} />
            <Route path={typePrivateRouter.USER_LOGIN} element={<PageUUserLogin />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
