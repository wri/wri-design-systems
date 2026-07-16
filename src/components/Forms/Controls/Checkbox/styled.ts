import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedSpacing,
} from '../../../../lib/theme'
import { fieldFocusVisibleStyles } from '../../Inputs/FieldWrapper/styled'

export const checkboxStyles = css`
  .chakra-checkbox__control {
    width: ${getThemedSpacing(500)};
    height: ${getThemedSpacing(500)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 700)};
    cursor: pointer;

    svg {
      width: 0.75rem;

      path {
        fill: transparent;
      }
    }

    &:hover,
    &[data-hover] {
      outline: ${getThemedSpacing(100)} solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);
    }

    &:active,
    &[data-active] {
      outline: ${getThemedSpacing(100)} solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 40%, transparent);
    }

    &:focus-visible,
    &[data-focus-visible] {
      ${fieldFocusVisibleStyles}
    }

    &[data-state='checked'],
    &[data-state='indeterminate'] {
      border: ${getThemedBorderWidth(100)} solid
        ${getThemedColor('primary', 700)};
      background-color: ${getThemedColor('primary', 500)} !important;

      svg path {
        fill: ${getThemedColor('accessible', 'text-on-primary-mids') ||
        getThemedColor('primary', 900)};
      }
    }

    &[data-disabled] {
      border: ${getThemedBorderWidth(100)} solid
        ${getThemedColor('neutral', 400)};
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
