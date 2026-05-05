import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedSpacing,
} from '../../../../lib/theme'

export const radioGroupItemStyles = css`
  .ds-radio-item-indicator {
    width: ${getThemedSpacing(500)};
    height: ${getThemedSpacing(500)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 700)};
    cursor: pointer;

    .dot {
      width: 0.625rem !important;
      height: 0.625rem !important;
      scale: 1 !important;
    }

    &:hover {
      outline: ${getThemedSpacing(100)} solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);
    }

    &:active {
      outline: ${getThemedSpacing(100)} solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 40%, transparent);
    }

    &:focus-visible,
    &[data-focus-visible] {
      outline: ${getThemedBorderWidth(200)} solid
        ${getThemedColor('accessible', 'controls-on-neutral-lights') ||
        getThemedColor('primary', 700)};
      outline-offset: ${getThemedSpacing(50)};
      box-shadow:
        0 0 0 0.125rem ${getThemedColor('neutral', 100)},
        rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;

      &[data-checked] {
        border: ${getThemedBorderWidth(200)} solid
          ${getThemedColor('accessible', 'controls-on-neutral-lights') ||
          getThemedColor('primary', 700)};

        &[data-disabled] {
          border: ${getThemedBorderWidth(200)} solid
            ${getThemedColor('neutral', 400)};
        }
      }
    }

    &[data-checked] {
      border: ${getThemedBorderWidth(100)} solid
        ${getThemedColor('accessible', 'controls-on-neutral-lights') ||
        getThemedColor('primary', 700)};
      background-color: ${getThemedColor('neutral', 100)} !important;
      color: ${getThemedColor('accessible', 'controls-on-neutral-lights') ||
      getThemedColor('primary', 700)};

      &[data-disabled] {
        border: ${getThemedBorderWidth(100)} solid
          ${getThemedColor('neutral', 400)};
        color: ${getThemedColor('neutral', 400)};
        cursor: not-allowed;
      }
    }

    &[data-disabled] {
      border: ${getThemedBorderWidth(100)} solid
        ${getThemedColor('neutral', 400)} !important;
      background-color: ${getThemedColor('neutral', 100)} !important;
      cursor: not-allowed;

      &:hover,
      &:active {
        outline: none;
      }
    }
  }
`

export const radioGroupItemTextStyles = css`
  cursor: pointer;

  &[data-disabled] {
    color: ${getThemedColor('neutral', 500)};
    cursor: not-allowed;
  }
`
export const radioGroupHiddenInputStyles = css`
  margin: 0 !important;
  width: ${getThemedSpacing(500)} !important;
  height: ${getThemedSpacing(500)} !important;
`
