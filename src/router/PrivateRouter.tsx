import { Navigate, Outlet } from 'react-router-dom'
import { typePublicRouter } from './TypeRouter'

export const IS_VALIDATE = [false, undefined, null]

export const ProtectedRoute = ({
  isAllowed,
  redirectPath = typePublicRouter.LOGIN,
  children
}: any) => {
  if (IS_VALIDATE.includes(isAllowed)) {
    return <Navigate to={redirectPath} replace />
  }

  return children || <Outlet />
}
