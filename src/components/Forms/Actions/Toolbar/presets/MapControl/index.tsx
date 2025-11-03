import React from 'react'
import Toolbar from '../..'
import {
  PlusIcon,
  MinusIcon,
  ExpandIcon,
  ShareIcon,
  PrintIcon,
  SettingsIcon,
  QuestionIcon,
} from '../../../../../icons'

type MapControlsToolbarProps = {
  onZoomInClick?: () => void
  onZoomOutClick?: () => void
  onExpandClick?: () => void
  onShareClick?: () => void
  onPrintClick?: () => void
  onSettingsClick?: () => void
  onQuestionClick?: () => void
  vertical?: boolean
  expanded?: boolean
  showExpandedToggle?: boolean
  ariaLabel?: string
}

const MapControlsToolbar = ({
  onZoomInClick,
  onZoomOutClick,
  onExpandClick,
  onShareClick,
  onPrintClick,
  onSettingsClick,
  onQuestionClick,
  vertical,
  expanded,
  showExpandedToggle,
  ariaLabel,
}: MapControlsToolbarProps) => {
  const mapControlItems = [
    {
      icon: <PlusIcon />,
      label: 'Zoom in',
      ariaLabel: 'zoom in',
      onClick: onZoomInClick,
    },
    {
      icon: <MinusIcon />,
      label: 'Zoom out',
      ariaLabel: 'zoom out',
      onClick: onZoomOutClick,
      gap: true,
    },
    {
      icon: <ExpandIcon />,
      label: 'Expand',
      ariaLabel: 'expand',
      onClick: onExpandClick,
      gap: true,
    },
    {
      icon: <ShareIcon />,
      label: 'Share',
      ariaLabel: 'share',
      onClick: onShareClick,
      gap: true,
    },
    {
      icon: <PrintIcon />,
      label: 'Print',
      ariaLabel: 'print',
      onClick: onPrintClick,
      gap: true,
    },
    {
      icon: <SettingsIcon />,
      label: 'Settings',
      ariaLabel: 'settings',
      onClick: onSettingsClick,
      gap: true,
    },
    {
      icon: <QuestionIcon />,
      label: 'Help',
      ariaLabel: 'question',
      onClick: onQuestionClick,
    },
  ]

  return (
    <Toolbar
      items={mapControlItems}
      vertical={vertical}
      expanded={expanded}
      showExpandedToggle={showExpandedToggle}
      ariaLabel={ariaLabel || 'Map controls toolbar'}
    />
  )
}

export default MapControlsToolbar
