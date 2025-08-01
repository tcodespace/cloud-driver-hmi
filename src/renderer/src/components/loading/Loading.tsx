import { memo, type ReactNode } from 'react'
import { Spin } from '@arco-design/web-react'

export const Loading = memo(({ children }: { children?: ReactNode }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Spin tip="加载中..." size={30} loading>
        {children}
      </Spin>
    </div>
  )
})
