import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../lib/theme'

export const formContainerStyles = css`
  position: relative;
  width: 100%;
  padding-left: 1.1875rem;
`

export const formContainerLabelStyles = css`
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  margin-bottom: ${getThemedSpacing(100)};
  color: ${getThemedColor('neutral', 900)};
`

export const formContainerErrorBarStyles = css`
  width: 0.1875rem;
  height: 100%;
  background-color: ${getThemedColor('error', 900)};
  position: absolute;
  top: 0;
  left: 0;
`

export const formContainerErrorMessageStyles = css`
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  font-weight: 700;
  color: ${getThemedColor('error', 900)};
  margin-bottom: ${getThemedSpacing(200)};
`
