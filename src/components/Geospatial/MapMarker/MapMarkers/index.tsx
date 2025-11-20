import React from 'react'
import MapMarker from '..'
import { MapMarkerProps } from '../types'

type GenericMapMarkersProps = {
  onClick?: () => void
  triggerRef?: React.Ref<HTMLButtonElement>
  showFocusState?: boolean
  count?: MapMarkerProps['count']
  mode?: MapMarkerProps['mode']
  variant?: MapMarkerProps['variant']
}

export const ClusterPoint = ({
  onClick,
  triggerRef,
  showFocusState,
  count,
  mode,
  variant = 'cluster',
}: GenericMapMarkersProps) => (
  <MapMarker
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
}: GenericMapMarkersProps) => (
  <MapMarker
    count={count}
    mode={mode}
    onClick={onClick}
    ref={triggerRef}
    showFocusState={showFocusState}
    variant={variant}
  />
)
