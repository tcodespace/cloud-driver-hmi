import { memo } from 'react'
import { Space, Button } from '@arco-design/web-react'

import { Mosaic } from '@renderer/components/mosaic'

const Home = memo(() => {
  return (
    <div className="h-full w-full">
      {/* <Space size="large">
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="outline">Outline</Button>
        <Button type="text">Text</Button>
      </Space> */}

      <Mosaic />
    </div>
  )
})

export default Home
