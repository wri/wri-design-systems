import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const analysisWidgetContainerStyles = css`
  border: 0.0625rem solid ${getThemedColor('neutral', 300)};
`

export const analysisWidgetHeaderStyles = css`
  padding: 1rem;
  cursor: pointer;
  border-bottom: 0.0625rem solid ${getThemedColor('neutral', 300)};
  > div {
    overflow: visible;
  }
  &:focus-visible {
    outline-offset: -0.125rem;
    outline: 0.125rem solid ${getThemedColor('primary', 700)};
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
  border-top: 0.0625rem solid ${getThemedColor('neutral', 300)};
`
