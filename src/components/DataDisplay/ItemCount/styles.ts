import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../lib/theme'

export const itemCountContainerStyles = css`
  display: flex;
  flex-direction: column;
`

export const itemCountPerPageContainerStyles = css`
  display: flex;
  gap: ${getThemedSpacing(400)};
  align-items: center;
  margin-bottom: ${getThemedSpacing(600)};

  .ds-select-input-container {
    margin-bottom: 0rem;
  }
`

export const itemCountPerPageLabelStyles = css`
  font-size: ${getThemedFontSize(500)};
  line-height: ${getThemedLineHeight(700)};
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
`
