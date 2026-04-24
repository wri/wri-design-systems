import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const checkboxStyles = css`
  .chakra-checkbox__control {
    width: 1.25rem;
    height: 1.25rem;
    border: 0.0625rem solid ${getThemedColor('neutral', 700)};
    cursor: pointer;

    svg {
      width: 0.75rem;

      path {
        fill: transparent;
      }
    }

    &:hover,
    &[data-hover] {
      outline: 0.25rem solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);
    }

    &:active,
    &[data-active] {
      outline: 0.25rem solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 40%, transparent);
    }

    &:focus-visible,
    &[data-focus-visible] {
      box-shadow: none;
      outline: 0.125rem solid ${getThemedColor('primary', 700)};
      outline-offset: 0.125rem;
      box-shadow:
        0 0 0 0.125rem ${getThemedColor('neutral', 100)},
        rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
    }

    &[data-state='checked'],
    &[data-state='indeterminate'] {
      border: 0.0625rem solid ${getThemedColor('primary', 700)};
      background-color: ${getThemedColor('primary', 500)} !important;

      svg path {
        fill: ${getThemedColor('accessible', 'text-on-primary-mids') ||
        getThemedColor('primary', 900)};
      }
    }

    &[data-disabled] {
      border: 0.0625rem solid ${getThemedColor('neutral', 400)};
      background-color: transparent !important;
      cursor: not-allowed;

      &:hover,
      &[data-hover],
      &:active,
      &[data-active] {
        outline: none;
      }

      &[data-state='checked'],
      &[data-state='indeterminate'] {
        border: none !important;
        background-color: ${getThemedColor('neutral', 300)} !important;

        svg path {
          fill: ${getThemedColor('neutral', 500)} !important;
        }
      }
    }
  }

  .chakra-checkbox__label {
    cursor: pointer;

    &[data-disabled] {
      cursor: not-allowed;
    }
  }
`
