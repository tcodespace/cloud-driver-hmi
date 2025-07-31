import { memo } from 'react'
import router from '@renderer/router'

import { RouterProvider } from 'react-router'

const App = memo(() => {
  return (
    <div className="h-full w-full">
      <RouterProvider router={router} />
    </div>
  )
})

export default App
