import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const formContainerStyles = css`
  position: relative;
  width: 100%;
  padding-left: 19px;
`

export const formContainerLabelStyles = css`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 4px;
  color: ${getThemedColor('neutral', 900)};
`

export const formContainerErrorBarStyles = css`
  width: 3px;
  height: 100%;
  background-color: ${getThemedColor('error', 900)};
  position: absolute;
  top: 0;
  left: 0;
`

export const formContainerErrorMessageStyles = css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${getThemedColor('error', 900)};
  margin-bottom: 8px;
`
