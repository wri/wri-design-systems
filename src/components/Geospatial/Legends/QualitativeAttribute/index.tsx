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
import { useLabels } from '../../../../lib/i18n/useLabels'

const QualitativeAttribute = ({
  type,
  label,
  caption,
  color,
  onActionClick,
  showActionButton,
  pointIcon = <PlaceholderIcon color='#006D2C' />,
  ariaLabelType = '',
  labels,
}: QualitativeAttributeProps) => {
  const l = useLabels('QualitativeAttribute', labels)
  const [isShown, setIsShown] = useState(true)

  const labelId = useId()
  const captionId = useId()

  const isRaster = type === 'raster'
  const isLine = type === 'line'
  const isPoint = type === 'point'

  const combinedAriaId = useId()

  const combinedAriaLabel = useMemo(() => {
    const visibilityText = isShown ? l.visibleText : l.hiddenText
    let typeText = ariaLabelType ?? `${ariaLabelType},`

    if (isLine) {
      typeText = l.linePrefix
    }
    return l.currentlyTemplate(String(label), caption, typeText, visibilityText)
  }, [isShown, type, label, caption, ariaLabelType, l])

  const handleOnClick = () => {
    setIsShown((prev) => !prev)
    onActionClick?.()
  }

  const buttonText = isShown ? l.hideLabel : l.showLabel

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
            label={String(buttonText)}
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
