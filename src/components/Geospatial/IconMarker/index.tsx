/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { IconMarkerProps } from './types'
import { iconMarkerStyles } from './styles'

const IconMarker = ({
  ariaLabel,
  icon,
  backgroundColor,
  onClick,
}: IconMarkerProps) => (
  <div
    css={iconMarkerStyles(backgroundColor, !!onClick)}
    aria-label={ariaLabel}
    role='button'
    tabIndex={0}
    onClick={onClick}
    onKeyDown={onClick}
  >
    {icon}
  </div>
)

export default IconMarker
