import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const itemCountContainerStyles = css`
  display: flex;
  flex-direction: column;
`

export const itemCountPerPageContainerStyles = css`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;

  .ds-select-input-container {
    margin-bottom: 0rem;
  }
`

export const itemCountPerPageLabelStyles = css`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
`
