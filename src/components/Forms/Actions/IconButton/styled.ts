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

  p {
    color: ${getThemedColor('neutral', 800)};
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
    box-shadow:
      0 0 0 2px ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
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
