/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useId, useState, useMemo } from 'react'

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
  ariaLabelType = '',
}: QualitativeAttributeProps) => {
  const [isShown, setIsShown] = useState(true)

  const labelId = useId()
  const captionId = useId()

  const isRaster = type === 'raster'
  const isLine = type === 'line'
  const isPoint = type === 'point'

  const combinedAriaId = useId()

  const combinedAriaLabel = useMemo(() => {
    const visibilityText = isShown ? 'visible' : 'hidden'
    let typeText = ariaLabelType ?? `${ariaLabelType},`

    if (isLine) {
      typeText = 'line,'
    }
    const captionText = caption ? `, ${caption}` : ''
    return `${typeText} ${label}${captionText}. Currently ${visibilityText}.`
  }, [isShown, type, label, caption])

  const handleOnClick = () => {
    setIsShown((prev) => !prev)
    onActionClick?.()
  }

  const buttonText = isShown ? 'Hide' : 'Show'

  return (
    <div css={qualitativeAttributeContainerStyles}>
      <p
        id={combinedAriaId}
        css={{
          position: 'absolute',
          width: 1,
          height: 1,
          margin: -1,
          padding: 0,
          border: 0,
          clip: 'rect(0 0 0 0)',
          overflow: 'hidden',
        }}
      >
        {combinedAriaLabel}
      </p>

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
            aria-labelledby={`${combinedAriaId} ${labelId}`}
            onClick={handleOnClick}
          />
        </div>
      ) : null}
    </div>
  )
}

export default QualitativeAttribute
