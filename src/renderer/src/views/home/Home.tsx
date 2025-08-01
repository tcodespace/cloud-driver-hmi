import { memo } from 'react'

import { Mosaic } from '@renderer/components/mosaic'

const Home = memo(() => {
  return (
    <div className="h-full w-full">
      <Mosaic />
    </div>
  )
})

export default Home
