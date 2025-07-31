import { createBrowserRouter, Navigate } from 'react-router'

import Layout from '@renderer/layout/Layout'
import { lazy } from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />
      },
      {
        path: '/home',
        Component: lazy(() => import('@renderer/views/home/Home'))
      }
    ]
  }
])

export default router
