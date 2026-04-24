import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const iconButtonStyles = css`
  width: 1.25rem !important;
  padding: 0 !important;
  min-width: 1.25rem !important;
  height: 1.25rem;
  border-radius: 0.125rem;
  background-color: ${getThemedColor('neutral', 100)};

  svg {
    width: 0.9375rem;
    height: 0.9375rem;

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
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
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
