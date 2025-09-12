// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import IconMarker from '../..'
import { DropIcon, PaperIcon, PlantIcon } from '../../../../icons'

type GenericIconMarkersProps = {
  ariaLabel?: string
  onClick?: () => void
}

const Paper = ({ ariaLabel, onClick }: GenericIconMarkersProps) => (
  <IconMarker
    ariaLabel={ariaLabel || 'paper icon'}
    icon={<PaperIcon color='#79022C' />}
    backgroundColor='#FFBCD4'
    onClick={onClick}
  />
)

const Drop = ({ ariaLabel, onClick }: GenericIconMarkersProps) => (
  <IconMarker
    ariaLabel={ariaLabel || 'drop icon'}
    icon={<DropIcon color='#7D2A03' />}
    backgroundColor='#F3A078'
    onClick={onClick}
  />
)

const Plant = ({ ariaLabel, onClick }: GenericIconMarkersProps) => (
  <IconMarker
    ariaLabel={ariaLabel || 'plant icon'}
    icon={<PlantIcon color='#3B6402' />}
    backgroundColor='#B7E578'
    onClick={onClick}
  />
)

export const IconMarkers = {
  Paper,
  Drop,
  Plant,
}
