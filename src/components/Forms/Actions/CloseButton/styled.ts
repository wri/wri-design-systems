import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const closeButtonStyles = css`
  width: 1.25rem !important;
  padding: 0 !important;
  min-width: 1.25rem !important;
  height: 1.25rem;
  border-radius: 0.125rem;
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
    box-shadow: 0 0.0625rem 0.125rem -0.0625rem #0000001a;
    box-shadow: 0 0.0625rem 0.1875rem 0 #0000001a;
  }

  &:active {
    background-color: ${getThemedColor('neutral', 400)};
    box-shadow: 0 0.0625rem 0.125rem -0.0625rem #0000001a;
    box-shadow: 0 0.0625rem 0.1875rem 0 #0000001a;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
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
