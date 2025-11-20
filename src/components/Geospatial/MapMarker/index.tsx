/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { forwardRef } from 'react'
import { MapMarkerProps } from './types'
import { MapMarkerContainerStyles, MapMarkerStyles } from './styles'

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
    },
    ref,
  ) => {
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
        return `Cluster of ${count} locations`
      }

      if (variant === 'simple-pin') {
        return 'Map pin location'
      }

      return 'Map point'
    }

    return (
      <div css={showFocusState ? MapMarkerContainerStyles(!!icon) : ''}>
        <button
          type='button'
          css={MapMarkerStyles(
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
