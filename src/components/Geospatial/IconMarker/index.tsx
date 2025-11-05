/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { forwardRef } from 'react'
import { IconMarkerProps } from './types'
import { iconMarkerContainerStyles, iconMarkerStyles } from './styles'

const IconMarker = forwardRef<HTMLButtonElement, IconMarkerProps>(
  ({ ariaLabel, icon, backgroundColor, onClick, showFocusState }, ref) => (
    <div css={showFocusState ? iconMarkerContainerStyles(!!icon) : ''}>
      <button
        type='button'
        css={iconMarkerStyles(backgroundColor, !!onClick, !!icon)}
        aria-label={ariaLabel}
        ref={ref}
        onClick={onClick}
      >
        {icon}
      </button>
    </div>
  ),
)

export default IconMarker
