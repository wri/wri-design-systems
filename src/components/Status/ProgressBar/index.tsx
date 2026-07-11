/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { progressBarContainerStyles, progressBarStyles } from './styled'
import { ProgressBarProps } from './types'
import { useLabels } from '../../../lib/i18n/useLabels'

const ProgressBar = ({ progress, labels, color }: ProgressBarProps) => {
  const l = useLabels('ProgressBar', labels)
  let newProgress = progress
  if (newProgress > 100) newProgress = 100
  if (newProgress < 0) newProgress = 0

  return (
    <div
      css={progressBarContainerStyles}
      role='progressbar'
      aria-label={l.progressAriaLabel(newProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={newProgress}
    >
      <div css={progressBarStyles(newProgress, color)} />
    </div>
  )
}

export default ProgressBar
