import { memo, Suspense } from 'react'
import { RouterProvider } from 'react-router'

import router from '@renderer/router'
import { Loading } from '@renderer/components'

const App = memo(() => {
  return (
    <div className="h-full w-full">
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  )
})

export default App
