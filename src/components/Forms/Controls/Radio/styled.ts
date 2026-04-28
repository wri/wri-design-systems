import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const radioGroupItemStyles = css`
  .ds-radio-item-indicator {
    width: 1.25rem;
    height: 1.25rem;
    border: 0.0625rem solid ${getThemedColor('neutral', 700)};
    cursor: pointer;

    .dot {
      width: 0.625rem !important;
      height: 0.625rem !important;
      scale: 1 !important;
    }

    &:hover {
      outline: 0.25rem solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);
    }

    &:active {
      outline: 0.25rem solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 40%, transparent);
    }

    &:focus-visible,
    &[data-focus-visible] {
      outline: 0.125rem solid
        ${getThemedColor('accessible', 'controls-on-neutral-lights') ||
        getThemedColor('primary', 700)};
      outline-offset: 0.125rem;
      box-shadow:
        0 0 0 0.125rem ${getThemedColor('neutral', 100)},
        rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;

      &[data-checked] {
        border: 0.125rem solid
          ${getThemedColor('accessible', 'controls-on-neutral-lights') ||
          getThemedColor('primary', 700)};

        &[data-disabled] {
          border: 0.125rem solid ${getThemedColor('neutral', 400)};
        }
      }
    }

    &[data-checked] {
      border: 0.0625rem solid
        ${getThemedColor('accessible', 'controls-on-neutral-lights') ||
        getThemedColor('primary', 700)};
      background-color: ${getThemedColor('neutral', 100)} !important;
      color: ${getThemedColor('accessible', 'controls-on-neutral-lights') ||
      getThemedColor('primary', 700)};

      &[data-disabled] {
        border: 0.0625rem solid ${getThemedColor('neutral', 400)};
        color: ${getThemedColor('neutral', 400)};
        cursor: not-allowed;
      }
    }

    &[data-disabled] {
      border: 0.0625rem solid ${getThemedColor('neutral', 400)} !important;
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
  width: 1.25rem !important;
  height: 1.25rem !important;
`
