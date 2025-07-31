import { memo } from 'react'
import { Outlet } from 'react-router'

const Layout = memo(() => {
  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  )
})

export default Layout
