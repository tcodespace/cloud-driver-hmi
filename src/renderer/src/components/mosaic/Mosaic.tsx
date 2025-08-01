import { memo, useState } from 'react'
import { Mosaic as MosaicComponent, type MosaicNode, MosaicWindow } from 'react-mosaic-component'

import 'react-mosaic-component/react-mosaic-component.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import type { ViewId } from './type'
import { ExpandButton } from './button'

const TITLE_MAP: Record<ViewId, string> = {
  a: 'Window1',
  b: 'Window2',
  c: 'Window3'
}

export const Mosaic = memo(() => {
  const [originLayout] = useState<MosaicNode<ViewId>>({
    direction: 'row',
    first: 'a',
    second: {
      direction: 'column',
      first: 'b',
      second: 'c'
    },
    splitPercentage: 40
  })

  return (
    <MosaicComponent<ViewId>
      renderTile={(id, path) => {
        return (
          <MosaicWindow<ViewId>
            path={path}
            title={TITLE_MAP[id]}
            toolbarControls={
              <div className="cursor-pointer flex items-center w-30px justify-center">
                <ExpandButton path={path} />
              </div>
            }
          >
            <h1>{TITLE_MAP[id]}</h1>
          </MosaicWindow>
        )
      }}
      initialValue={originLayout}
    />
  )
})
