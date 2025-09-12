// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import MapControl from '../..'
import {
  PlusIcon,
  MinusIcon,
  ExpandIcon,
  ShareIcon,
  PrintIcon,
  SettingsIcon,
  QuestionIcon,
} from '../../../../../icons'

type ZoomProps = {
  onZoomInClick: () => void
  onZoomOutClick: () => void
  vertical?: boolean
}

const Zoom = ({ onZoomInClick, onZoomOutClick, vertical }: ZoomProps) => (
  <MapControl
    items={[
      {
        icon: <PlusIcon />,
        ariaLabel: 'zoom in',
        onClick: onZoomInClick,
      },
      {
        icon: <MinusIcon />,
        ariaLabel: 'zoom out',
        onClick: onZoomOutClick,
      },
    ]}
    vertical={vertical}
  />
)

type GenericMapControlProps = {
  onClick: () => void
}

const Expand = ({ onClick }: GenericMapControlProps) => (
  <MapControl
    items={[
      {
        icon: <ExpandIcon />,
        ariaLabel: 'expand',
        onClick,
      },
    ]}
  />
)

const Share = ({ onClick }: GenericMapControlProps) => (
  <MapControl
    items={[
      {
        icon: <ShareIcon />,
        ariaLabel: 'share',
        onClick,
      },
    ]}
  />
)

const Print = ({ onClick }: GenericMapControlProps) => (
  <MapControl
    items={[
      {
        icon: <PrintIcon />,
        ariaLabel: 'print',
        onClick,
      },
    ]}
  />
)

const Settings = ({ onClick }: GenericMapControlProps) => (
  <MapControl
    items={[
      {
        icon: <SettingsIcon />,
        ariaLabel: 'settings',
        onClick,
      },
    ]}
  />
)

const Question = ({ onClick }: GenericMapControlProps) => (
  <MapControl
    items={[
      {
        icon: <QuestionIcon />,
        ariaLabel: 'question',
        onClick,
      },
    ]}
  />
)

export const MapControls = {
  Zoom,
  Expand,
  Share,
  Print,
  Settings,
  Question,
}
