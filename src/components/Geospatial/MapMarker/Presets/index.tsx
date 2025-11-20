// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import MapMarker from '..'
import { DropIcon, PaperIcon, PlantIcon } from '../../../icons'
import { getThemedColor } from '../../../../lib/theme'

type GenericMapMarkersProps = {
  ariaLabel?: string
  onClick?: () => void
  triggerRef?: React.Ref<HTMLButtonElement>
  showFocusState?: boolean
}

const Paper = ({
  ariaLabel,
  onClick,
  triggerRef,
  showFocusState,
}: GenericMapMarkersProps) => (
  <MapMarker
    ariaLabel={ariaLabel || 'paper icon'}
    icon={<PaperIcon color='#79022C' />}
    backgroundColor='#FFBCD4'
    onClick={onClick}
    ref={triggerRef}
    showFocusState={showFocusState}
  />
)

const Drop = ({
  ariaLabel,
  onClick,
  triggerRef,
  showFocusState,
}: GenericMapMarkersProps) => (
  <MapMarker
    ariaLabel={ariaLabel || 'drop icon'}
    icon={<DropIcon color='#7D2A03' />}
    backgroundColor='#F3A078'
    onClick={onClick}
    ref={triggerRef}
    showFocusState={showFocusState}
  />
)

const Plant = ({
  ariaLabel,
  onClick,
  triggerRef,
  showFocusState,
}: GenericMapMarkersProps) => (
  <MapMarker
    ariaLabel={ariaLabel || 'plant icon'}
    icon={<PlantIcon color='#3B6402' />}
    backgroundColor='#B7E578'
    onClick={onClick}
    ref={triggerRef}
    showFocusState={showFocusState}
  />
)

const Point = ({
  ariaLabel,
  onClick,
  triggerRef,
  showFocusState,
}: GenericMapMarkersProps) => (
  <MapMarker
    ariaLabel={ariaLabel || 'point icon'}
    backgroundColor={getThemedColor('primary', 500)}
    onClick={onClick}
    ref={triggerRef}
    showFocusState={showFocusState}
  />
)

export const MapMarkers = {
  Paper,
  Drop,
  Plant,
  Point,
}
