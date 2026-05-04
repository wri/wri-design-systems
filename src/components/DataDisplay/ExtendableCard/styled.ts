import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedSpacing,
} from '../../../lib/theme'

export const extendableCardContainerStyles = css`
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
`
export const extendableCardItemTriggerStyles = css`
  padding: ${getThemedSpacing(400)};
  cursor: pointer;
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
  &:hover {
    box-shadow: 0rem ${getThemedSpacing(50)} ${getThemedSpacing(100)} -${getThemedSpacing(50)} #0000001a;
    box-shadow: 0rem ${getThemedSpacing(100)} 0.375rem -${getThemedBorderWidth(100)} #0000001a;
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 20%,
      transparent
    );
  }
`
