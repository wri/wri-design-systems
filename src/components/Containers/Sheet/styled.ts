import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const grabberLabelStyles = css`
  width: 40px;
  border-radius: 4px;
  background: transparent;
  padding: 4px 6px;
  cursor: grab;
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
  div {
    height: 2px;
    margin: 0px 0px;
    background: ${getThemedColor('neutral', 300)};
  }
`

export const sheetContainerStyles = (
  hasHeader?: boolean,
  zIndex?: number,
) => css`
  [data-rsbs-overlay] {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    overflow: hidden;
    z-index: ${zIndex};
  }

  [data-rsbs-overlay],
  [data-rsbs-root]:after {
    max-width: 100%;
  }

  [data-rsbs-header] {
    padding: 0px;
    min-height: ${hasHeader ? '50px' : '20px'};
  }

  [data-rsbs-header]:before {
    content: none;
  }

  [data-rsbs-footer] {
    padding: 0px;
    min-height: 64px;
  }
`
