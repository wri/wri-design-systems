import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const checkboxStyles = css`
  .chakra-checkbox__control {
    width: 20px;
    height: 20px;
    border: 1px solid ${getThemedColor('neutral', 600)};

    svg {
      width: 12px;

      path {
        fill: transparent;
      }
    }

    &:hover,
    &[data-hover] {
      outline: 4px solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);
    }

    &:active,
    &[data-active] {
      outline: 4px solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 40%, transparent);
    }

    &:focus-visible,
    &[data-focus-visible] {
      box-shadow: none;
      outline: 2px solid ${getThemedColor('primary', 700)};
      outline-offset: 2px;
      box-shadow: 0 0 0 2px ${getThemedColor('neutral', 100)}, rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
    }

    &[data-state='checked'],
    &[data-state='indeterminate'] {
      border: 1px solid ${getThemedColor('primary', 700)};
      background-color: ${getThemedColor('primary', 500)} !important;

      svg path {
        fill: ${getThemedColor('primary', 900)};
      }
    }

    &[data-disabled] {
      border: 1px solid ${getThemedColor('neutral', 400)};
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
`
