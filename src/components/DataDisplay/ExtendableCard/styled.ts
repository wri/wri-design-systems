import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const extendableCardContainerStyles = css`
  border: 1px solid ${getThemedColor('neutral', 300)};
`
export const extendableCardItemTriggerStyles = css`
  padding: 16px;
  cursor: pointer;
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
  &:hover {
    box-shadow: 0px 2px 4px -2px #0000001a;
    box-shadow: 0px 4px 6px -1px #0000001a;
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 20%,
      transparent
    );
  }
`
