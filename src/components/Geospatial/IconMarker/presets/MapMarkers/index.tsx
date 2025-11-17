import React from 'react'
import IconMarker from '../..'
import { IconMarkerProps } from '../../types'

type GenericIconMarkersProps = {
  onClick?: () => void
  triggerRef?: React.Ref<HTMLButtonElement>
  count?: IconMarkerProps['count']
  mode?: IconMarkerProps['mode']
  variant?: IconMarkerProps['variant']
}

export const ClusterPoint = ({
  onClick,
  triggerRef,
  count,
  mode,
  variant = 'cluster',
}: GenericIconMarkersProps) => (
  <IconMarker
    count={count}
    mode={mode}
    onClick={onClick}
    ref={triggerRef}
    variant={variant}
  />
)

export const SimpleMapPin = ({
  onClick,
  triggerRef,
  count,
  mode,
  variant = 'simple-pin',
}: GenericIconMarkersProps) => (
  <IconMarker
    count={count}
    mode={mode}
    onClick={onClick}
    ref={triggerRef}
    variant={variant}
  />
)
