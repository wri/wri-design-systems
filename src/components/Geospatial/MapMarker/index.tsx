/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { forwardRef } from 'react'
import { MapMarkerProps } from './types'
import { mapMarkerContainerStyles, mapMarkerStyles } from './styles'
import { useLabels } from '../../../lib/i18n/useLabels'

const MapMarker = forwardRef<HTMLButtonElement, MapMarkerProps>(
  (
    {
      ariaLabel,
      icon,
      backgroundColor,
      onClick,
      showFocusState,
      count,
      mode,
      variant = 'icon',
      labels,
    },
    ref,
  ) => {
    const l = useLabels('MapMarker', labels)

    const formatCount = (num: number): string => {
      if (num >= 100000000) {
        return '99M+'
      }
      if (num >= 1000000) {
        return `${(num / 1000000).toFixed(0)}M`
      }
      if (num >= 100000) {
        return `${(num / 1000).toFixed(0)}K`
      }
      return num.toString()
    }

    const displayCount = count ? formatCount(count) : undefined

    const generateAriaLabel = (): string => {
      if (ariaLabel) {
        return ariaLabel
      }

      if (count) {
        return l.clusterAriaLabel(count)
      }

      if (variant === 'simple-pin') {
        return l.pinAriaLabel
      }

      return l.pointAriaLabel
    }

    return (
      <div css={showFocusState ? mapMarkerContainerStyles(!!icon) : ''}>
        <button
          type='button'
          css={mapMarkerStyles(
            backgroundColor,
            !!onClick,
            !!icon,
            mode,
            count,
            variant,
          )}
          aria-label={generateAriaLabel()}
          ref={ref}
          onClick={onClick}
        >
          {variant === 'cluster' && displayCount}
          {variant === 'icon' && icon}
        </button>
      </div>
    )
  },
)

export default MapMarker
