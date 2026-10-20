import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedBorderWidth,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'

export const opacityControlContainerStyles = css`
  width: 14.625rem;
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 600)};
  border-radius: ${getThemedRadius(300)};
`

/* Trigger button while the popover is open (Shadows/300). The :not() guards
   and :hover variant keep this above the secondary Button hover rule. */
export const opacityControlTriggerStyles = css`
  .ds-opacity-control-trigger[data-state='open']:not(:disabled):not(
      [data-disabled]
    ),
  .ds-opacity-control-trigger[aria-expanded='true']:not(:disabled):not(
      [data-disabled]
    ),
  .ds-opacity-control-trigger[data-popup-open]:not(:disabled):not(
      [data-disabled]
    ),
  .ds-opacity-control-trigger[data-state='open']:hover:not(:disabled):not(
      [data-disabled]
    ),
  .ds-opacity-control-trigger[aria-expanded='true']:hover:not(:disabled):not(
      [data-disabled]
    ),
  .ds-opacity-control-trigger[data-popup-open]:hover:not(:disabled):not(
      [data-disabled]
    ) {
    border-radius: ${getThemedRadius(300)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 600)};
    background-color: ${getThemedColor('neutral', 200)};
    box-shadow:
      0 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1),
      0 0.125rem 0.25rem -0.125rem rgba(0, 0, 0, 0.1);
  }
`

export const opacityControlBodyStyles = css`
  padding: ${getThemedSpacing(300)};
`

export const opacityControlLabelStyles = css`
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  font-weight: 400;
  text-align: left;
  color: ${getThemedColor('neutral', 900)};
`

export const opacityControlTextInputContainerStyles = css`
  display: flex;
  align-items: center;
  gap: ${getThemedSpacing(300)};

  .ds-text-input-container {
    width: ${getThemedSpacing(1200)};
    margin: 0;

    .chakra-input {
      display: flex;
      height: ${getThemedSpacing(700)};
      min-height: ${getThemedSpacing(700)};
      padding: ${getThemedSpacing(100)} ${getThemedSpacing(200)};
      align-items: center;
      gap: ${getThemedSpacing(200)};
      align-self: stretch;
      width: ${getThemedSpacing(1200)};
      box-sizing: border-box;
    }
  }

  .chakra-slider__root {
    padding: 0 ${getThemedSpacing(300)};
    height: 1.875rem;
    margin-top: 1.125rem;
    width: 100%;
  }
`
