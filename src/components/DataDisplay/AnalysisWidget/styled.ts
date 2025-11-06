import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const analysisWidgetContainerStyles = css`
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 8px;
`

export const analysisWidgetHeaderStyles = css`
  padding: 16px;
  cursor: pointer;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
  &:hover {
    box-shadow: 0px 2px 4px -2px #0000001a;
    box-shadow: 0px 4px 6px -1px #0000001a;
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
    border: 0px !important;
    transition:
      max-height 0.2s ease,
      padding-bottom 0.2s ease,
      padding-top 0.2s ease;
  }
`

export const analysisWidgetFooterStyles = css`
  border-top: 1px solid ${getThemedColor('neutral', 300)};
`
