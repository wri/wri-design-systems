import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const extendableCardContainerStyles = css`
  border: 0.0625rem solid ${getThemedColor('neutral', 300)};
`
export const extendableCardItemTriggerStyles = css`
  padding: 1rem;
  cursor: pointer;
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
  &:hover {
    box-shadow: 0rem 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0rem 0.25rem 0.375rem -0.0625rem #0000001a;
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 20%,
      transparent
    );
  }
`
