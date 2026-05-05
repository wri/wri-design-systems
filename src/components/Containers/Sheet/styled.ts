import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'

export const grabberLabelStyles = css`
  width: ${getThemedSpacing(1000)};
  border-radius: ${getThemedRadius(300)};
  background: transparent;
  padding: ${getThemedSpacing(100)} 0.375rem;
  cursor: grab;
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
  div {
    height: ${getThemedSpacing(50)};
    margin: 0;
    background: ${getThemedColor('neutral', 300)};
  }
`

export const sheetContainerStyles = (
  hasHeader?: boolean,
  zIndex?: number,
) => css`
  [data-rsbs-overlay] {
    border-top-left-radius: ${getThemedRadius(500)};
    border-top-right-radius: ${getThemedRadius(500)};
    overflow: hidden;
    z-index: ${zIndex};
  }

  [data-rsbs-overlay],
  [data-rsbs-root]:after {
    max-width: 100%;
  }

  [data-rsbs-header] {
    padding: 0;
    min-height: ${hasHeader ? '3.125rem' : getThemedSpacing(500)};
  }

  [data-rsbs-header]:before {
    content: none;
  }

  [data-rsbs-footer] {
    padding: 0;
    min-height: ${getThemedSpacing(1600)};
  }
`
