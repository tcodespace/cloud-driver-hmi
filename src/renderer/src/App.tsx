import { memo } from 'react'
import { Button, Space } from '@arco-design/web-react'

const App = memo(() => {
  return (
    <div className="h-100vh w-100vw">
      <Space size="large">
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="outline">Outline</Button>
        <Button type="text">Text</Button>
      </Space>
    </div>
  )
})

export default App
