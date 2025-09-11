import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { ProgressBarProps } from './types'

export const progressBarContainerStyles = css`
  height: 8px;
  width: 100%;
  background-color: ${getThemedColor('neutral', 300)};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const progressBarStyles = (
  progress: ProgressBarProps['progress'],
) => css`
  height: 100%;
  width: ${progress}%;
  background-color: ${getThemedColor('primary', 500)};
  transition: width 0.5s ease-in-out;
`
