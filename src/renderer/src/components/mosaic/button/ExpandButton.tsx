import { memo } from 'react'
import { Icon } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { MosaicContext } from 'react-mosaic-component'

import type { ExpandButtonProps } from '../type'

export const ExpandButton = memo((props: ExpandButtonProps) => {
  function handleExpand(mosaicActions) {
    mosaicActions.expand(props.path)
  }

  return (
    <MosaicContext.Consumer>
      {({ mosaicActions }) => (
        <Icon icon={IconNames.Maximize} onClick={() => handleExpand(mosaicActions)} />
      )}
    </MosaicContext.Consumer>
  )
})
