import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'

export const closeButtonStyles = css`
  width: ${getThemedSpacing(500)} !important;
  padding: 0 !important;
  min-width: ${getThemedSpacing(500)} !important;
  height: ${getThemedSpacing(500)};
  border-radius: ${getThemedRadius(200)};
  background-color: ${getThemedColor('neutral', 300)};

  svg {
    width: 0.625rem;
    height: 0.625rem;

    path {
      fill: ${getThemedColor('neutral', 800)};
    }
  }

  &:hover {
    background-color: ${getThemedColor('neutral', 300)};
    box-shadow: 0 ${getThemedBorderWidth(100)} ${getThemedSpacing(50)} -${getThemedBorderWidth(
        100,
      )} #0000001a;
    box-shadow: 0 ${getThemedBorderWidth(100)} 0.1875rem 0 #0000001a;
  }

  &:active {
    background-color: ${getThemedColor('neutral', 400)};
    box-shadow: 0 ${getThemedBorderWidth(100)} ${getThemedSpacing(50)} -${getThemedBorderWidth(
        100,
      )} #0000001a;
    box-shadow: 0 ${getThemedBorderWidth(100)} 0.1875rem 0 #0000001a;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    box-shadow:
      0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 ${getThemedSpacing(50)} ${getThemedSpacing(50)}
        ${getThemedSpacing(100)};
  }

  &:disabled {
    background-color: ${getThemedColor('neutral', 200)} !important;
    box-shadow: none;

    svg {
      path {
        fill: ${getThemedColor('neutral', 400)};
      }
    }
  }
`
