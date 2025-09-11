/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { progressBarContainerStyles, progressBarStyles } from './styled'
import { ProgressBarProps } from './types'

const ProgressBar = ({ progress }: ProgressBarProps) => {
  let newProgress = progress
  if (newProgress > 100) newProgress = 100
  if (newProgress < 0) newProgress = 0

  return (
    <div
      css={progressBarContainerStyles}
      role='progressbar'
      aria-label={`Progress: ${newProgress}%`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={newProgress}
    >
      <div css={progressBarStyles(newProgress)} />
    </div>
  )
}

export default ProgressBar
