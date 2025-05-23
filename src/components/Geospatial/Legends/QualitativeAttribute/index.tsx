/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useState } from 'react'

import { QualitativeAttributeProps } from './types'
import {
  lineIndicatorStyles,
  pointIndicatorStyles,
  qualitativeAttributeActionContainerStyles,
  qualitativeAttributeCaptionStyles,
  qualitativeAttributeContainerStyles,
  qualitativeAttributeLabelContainerStyles,
  qualitativeAttributeLabelStyles,
  rasterIndicatorStyles,
} from './styled'
import { HideIcon, ShowIcon } from '../../../icons'
import Button from '../../../Forms/Buttons/Button'

const QualitativeAttribute = ({
  type,
  label,
  caption,
  color,
  onActionClick,
  showActionButton,
  pointIcon,
}: QualitativeAttributeProps) => {
  const [isShown, setIsShown] = useState(true)

  const isRaster = type === 'raster'
  const isLine = type === 'line'
  const isPoint = type === 'point'

  const handleOnClick = () => {
    setIsShown(!isShown)

    if (onActionClick) {
      onActionClick()
    }
  }

  return (
    <div css={qualitativeAttributeContainerStyles}>
      <div css={qualitativeAttributeLabelContainerStyles}>
        <div>
          {isRaster && <div css={rasterIndicatorStyles(color)} />}
          {isLine && <div css={lineIndicatorStyles(color)} />}
          {isPoint && <div css={pointIndicatorStyles(color)}>{pointIcon}</div>}
        </div>
        <div>
          <p css={qualitativeAttributeLabelStyles} aria-label={label}>
            {label}
          </p>
          {caption ? (
            <p css={qualitativeAttributeCaptionStyles} aria-label={caption}>
              {caption}
            </p>
          ) : null}
        </div>
      </div>
      {onActionClick && showActionButton ? (
        <div css={qualitativeAttributeActionContainerStyles}>
          <Button
            variant='borderless'
            label={isShown ? 'Hide' : 'Show'}
            rightIcon={isShown ? <HideIcon /> : <ShowIcon />}
            aria-label='Show or Hide action'
            onClick={handleOnClick}
          />
        </div>
      ) : null}
    </div>
  )
}

export default QualitativeAttribute
