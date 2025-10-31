import React from 'react'
import Toolbar from '.'
import {
  PlusIcon,
  MinusIcon,
  ExpandIcon,
  ShareIcon,
  PrintIcon,
  SettingsIcon,
  QuestionIcon,
} from '../../../icons'

const mapControlItems = [
  {
    icon: <PlusIcon />,
    label: 'Zoom in',
    ariaLabel: 'zoom in',
    onClick: () => {},
  },
  {
    icon: <MinusIcon />,
    label: 'Zoom out',
    ariaLabel: 'zoom out',
    onClick: () => {},
    gap: true,
  },
  {
    icon: <ExpandIcon />,
    label: 'Expand',
    ariaLabel: 'expand',
    onClick: () => {},
    gap: true,
  },
  {
    icon: <ShareIcon />,
    label: 'Share',
    ariaLabel: 'share',
    onClick: () => {},
    gap: true,
  },
  {
    icon: <PrintIcon />,
    label: 'Print',
    ariaLabel: 'print',
    onClick: () => {},
    gap: true,
  },
  {
    icon: <SettingsIcon />,
    label: 'Settings',
    ariaLabel: 'settings',
    onClick: () => {},
    gap: true,
  },
  {
    icon: <QuestionIcon />,
    label: 'Help',
    ariaLabel: 'question',
    onClick: () => {},
    gap: true,
  },
]

const MapControlDemo = () => (
  <Toolbar items={mapControlItems} vertical toggleControl />
)
export default MapControlDemo
