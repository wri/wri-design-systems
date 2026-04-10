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
import { useLabels } from '../../../../../../lib/i18n/useLabels'
import type { MapControlsToolbarLabels } from '../../../../../../lib/i18n/types'

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
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<MapControlsToolbarLabels>
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
  labels,
}: MapControlsToolbarProps) => {
  const l = useLabels('MapControlsToolbar', labels)
  const mapControlItems = [
    {
      icon: <PlusIcon />,
      label: l.zoomInLabel,
      ariaLabel: l.zoomInAriaLabel,
      onClick: onZoomInClick,
    },
    {
      icon: <MinusIcon />,
      label: l.zoomOutLabel,
      ariaLabel: l.zoomOutAriaLabel,
      onClick: onZoomOutClick,
      gap: true,
    },
    {
      icon: <ExpandIcon />,
      label: l.expandLabel,
      ariaLabel: l.expandAriaLabel,
      onClick: onExpandClick,
      gap: true,
    },
    {
      icon: <ShareIcon />,
      label: l.shareLabel,
      ariaLabel: l.shareAriaLabel,
      onClick: onShareClick,
      gap: true,
    },
    {
      icon: <PrintIcon />,
      label: l.printLabel,
      ariaLabel: l.printAriaLabel,
      onClick: onPrintClick,
      gap: true,
    },
    {
      icon: <SettingsIcon />,
      label: l.settingsLabel,
      ariaLabel: l.settingsAriaLabel,
      onClick: onSettingsClick,
      gap: true,
    },
    {
      icon: <QuestionIcon />,
      label: l.helpLabel,
      ariaLabel: l.helpAriaLabel,
      onClick: onQuestionClick,
    },
  ]

  return (
    <Toolbar
      items={mapControlItems}
      vertical={vertical}
      expanded={expanded}
      showExpandedToggle={showExpandedToggle}
      ariaLabel={ariaLabel || l.toolbarAriaLabel}
    />
  )
}

export default MapControlsToolbar
