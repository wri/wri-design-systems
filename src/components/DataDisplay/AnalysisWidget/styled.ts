import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedSpacing,
} from '../../../lib/theme'

export const analysisWidgetContainerStyles = css`
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
`

export const analysisWidgetHeaderStyles = css`
  padding: ${getThemedSpacing(400)};
  cursor: pointer;
  border-bottom: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};
  > div {
    overflow: visible;
  }
  &:focus-visible {
    outline-offset: -${getThemedSpacing(50)};
    outline: ${getThemedBorderWidth(200)} solid
      ${getThemedColor('primary', 700)};
  }
  &:hover {
    box-shadow: 0rem 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0rem 0.25rem 0.375rem -0.0625rem #0000001a;
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 20%,
      transparent
    );
  }
`
export const analysisWidgetContentStyles = css`
  .item-content-open > * {
    max-height: auto;

    transition:
      max-height 0.2s ease,
      padding-bottom 0.2s ease,
      padding-top 0.2s ease;
  }

  .item-content-closed > * {
    max-height: 0;
    overflow: hidden;
    padding-bottom: 0 !important;
    padding-top: 0 !important;
    border: 0rem !important;
    transition:
      max-height 0.2s ease,
      padding-bottom 0.2s ease,
      padding-top 0.2s ease;
  }
`

export const analysisWidgetFooterStyles = css`
  border-top: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};
`
