// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import IconMarker from '../..'
import { PaperIcon } from '../../../../icons'
import { IconMarkerProps } from '../../types'

type GenericIconMarkersProps = {
  onClick?: () => void
  triggerRef?: React.Ref<HTMLButtonElement>
  showFocusState?: boolean
  count?: IconMarkerProps['count']
  mode?: IconMarkerProps['mode']
  variant?: IconMarkerProps['variant']
}

export const ClusterPoint = ({
  onClick,
  triggerRef,
  showFocusState,
  count,
  mode,
  variant = 'cluster',
}: GenericIconMarkersProps) => (
  <IconMarker
    count={count}
    mode={mode}
    onClick={onClick}
    ref={triggerRef}
    showFocusState={showFocusState}
    variant={variant}
  />
)

export const SimpleMapPin = ({
  onClick,
  triggerRef,
  showFocusState,
  count,
  mode,
  variant = 'simple-pin',
}: GenericIconMarkersProps) => (
  <IconMarker
    count={count}
    mode={mode}
    onClick={onClick}
    ref={triggerRef}
    showFocusState={showFocusState}
    variant={variant}
  />
)
