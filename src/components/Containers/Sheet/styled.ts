import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

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
    height: 2px;
    width: 32px;
    background-color: ${getThemedColor('neutral', 300)};
    cursor: pointer;
  }

  [data-rsbs-footer] {
    padding: 0px;
    min-height: 64px;
  }
`
