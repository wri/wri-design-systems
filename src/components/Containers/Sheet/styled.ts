import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const grabberLabelStyles = css`
  width: 2.5rem;
  border-radius: 0.25rem;
  background: transparent;
  padding: 0.25rem 0.375rem;
  cursor: grab;
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
  div {
    height: 0.125rem;
    margin: 0;
    background: ${getThemedColor('neutral', 300)};
  }
`

export const sheetContainerStyles = (
  hasHeader?: boolean,
  zIndex?: number,
) => css`
  [data-rsbs-overlay] {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    overflow: hidden;
    z-index: ${zIndex};
  }

  [data-rsbs-overlay],
  [data-rsbs-root]:after {
    max-width: 100%;
  }

  [data-rsbs-header] {
    padding: 0;
    min-height: ${hasHeader ? '3.125rem' : '1.25rem'};
  }

  [data-rsbs-header]:before {
    content: none;
  }

  [data-rsbs-footer] {
    padding: 0;
    min-height: 4rem;
  }
`
