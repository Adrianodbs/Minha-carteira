import AppRoutes from './app.routes'
import { BrowserRouter } from 'react-router-dom'
import AuthRoutes from './auth.routes'

import { useContext } from 'react'
import { AuthContext } from '../hooks/auth'

export default function Routes() {
  const { logged } = useContext(AuthContext)
  return <>{logged ? <AppRoutes /> : <AuthRoutes />}</>
}
