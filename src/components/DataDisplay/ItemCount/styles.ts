import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const itemCountContainerStyles = css`
  display: flex;
  flex-direction: column;
`

export const itemCountPerPageContainerStyles = css`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 24px;

  .select-input-container {
    margin-bottom: 0px;
  }
`

export const itemCountPerPageLabelStyles = css`
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
`
