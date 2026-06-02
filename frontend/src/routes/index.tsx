import { createBrowserRouter } from 'react-router-dom'
import CompleteProfile from '../pages/CompleteProfile'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Login from '../pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/complete-profile',
    element: <CompleteProfile />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
])

export default router