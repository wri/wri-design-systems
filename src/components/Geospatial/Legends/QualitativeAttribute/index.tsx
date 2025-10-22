/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useId, useState } from 'react'

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
import { HideIcon, PlaceholderIcon, ShowIcon } from '../../../icons'
import Button from '../../../Forms/Actions/Button'

const QualitativeAttribute = ({
  type,
  label,
  caption,
  color,
  onActionClick,
  showActionButton,
  pointIcon = <PlaceholderIcon color='#006D2C' />,
}: QualitativeAttributeProps) => {
  const [isShown, setIsShown] = useState(true)

  const labelId = useId()
  const captionId = useId()

  const isRaster = type === 'raster'
  const isLine = type === 'line'
  const isPoint = type === 'point'

  const handleOnClick = () => {
    setIsShown((prev) => !prev)
    onActionClick?.()
  }

  const buttonText = isShown ? 'Hide' : 'Show'
  const describedBy = caption ? `${labelId} ${captionId}` : labelId

  return (
    <div css={qualitativeAttributeContainerStyles}>
      <div css={qualitativeAttributeLabelContainerStyles}>
        <div>
          {isRaster && <div css={rasterIndicatorStyles(color)} />}
          {isLine && <div css={lineIndicatorStyles(color)} />}
          {isPoint && <div css={pointIndicatorStyles(color)}>{pointIcon}</div>}
        </div>
        <div>
          <p id={labelId} css={qualitativeAttributeLabelStyles}>
            {label}
          </p>
          {caption ? (
            <p id={captionId} css={qualitativeAttributeCaptionStyles}>
              {caption}
            </p>
          ) : null}
        </div>
      </div>

      {onActionClick && showActionButton ? (
        <div css={qualitativeAttributeActionContainerStyles}>
          <Button
            type='button'
            variant='borderless'
            label={buttonText}
            rightIcon={isShown ? <HideIcon /> : <ShowIcon />}
            aria-pressed={isShown}
            aria-describedby={describedBy}
            aria-label={`${buttonText} ${label}`}
            onClick={handleOnClick}
          />
        </div>
      ) : null}
    </div>
  )
}

export default QualitativeAttribute
