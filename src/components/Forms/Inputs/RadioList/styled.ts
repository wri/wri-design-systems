import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'

export const radioListItemStyles = css`
  height: 100%;
  min-height: 3rem;
  width: 100%;
  max-width: 22.875rem;
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)};
  border-radius: ${getThemedRadius(300)};
  background-color: ${getThemedColor('neutral', 100)};
  padding: ${getThemedSpacing(300)};
`
