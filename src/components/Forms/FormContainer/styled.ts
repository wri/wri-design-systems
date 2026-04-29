import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const formContainerStyles = css`
  position: relative;
  width: 100%;
  padding-left: 1.1875rem;
`

export const formContainerLabelStyles = css`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 0.25rem;
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
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  color: ${getThemedColor('error', 900)};
  margin-bottom: 0.5rem;
`
