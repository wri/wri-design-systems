import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const iconButtonStyles = css`
  width: 20px !important;
  padding: 0 !important;
  min-width: 20px !important;
  height: 20px;
  border-radius: 2px;
  background-color: ${getThemedColor('neutral', 100)};

  svg {
    width: 15px;
    height: 15px;

    path {
      fill: ${getThemedColor('neutral', 800)};
    }
  }

  &:hover {
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 20%,
      transparent
    );
  }

  &:active {
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 40%,
      transparent
    );
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }

  &:disabled {
    background-color: transparent;

    svg {
      path {
        fill: ${getThemedColor('neutral', 500)};
      }
    }
  }
`
