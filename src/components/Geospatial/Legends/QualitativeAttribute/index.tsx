// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { QualitativeAttributeProps } from './types'
import {
  LineIndicator,
  PointIndicator,
  QualitativeAttributeActionContainer,
  QualitativeAttributeCaption,
  QualitativeAttributeContainer,
  QualitativeAttributeLabel,
  QualitativeAttributeLabelContainer,
  RasterIndicator,
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
  const [isShown, setIsShown] = React.useState(true)

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
    <QualitativeAttributeContainer>
      <QualitativeAttributeLabelContainer>
        <div>
          {isRaster && <RasterIndicator color={color} />}
          {isLine && <LineIndicator color={color} />}
          {isPoint && (
            <PointIndicator color={color}>{pointIcon}</PointIndicator>
          )}
        </div>
        <div>
          <QualitativeAttributeLabel aria-label={label}>
            {label}
          </QualitativeAttributeLabel>
          <QualitativeAttributeCaption aria-label={caption}>
            {caption}
          </QualitativeAttributeCaption>
        </div>
      </QualitativeAttributeLabelContainer>
      {onActionClick && showActionButton ? (
        <QualitativeAttributeActionContainer>
          <Button
            variant='borderless'
            label={isShown ? 'Hide' : 'Show'}
            rightIcon={isShown ? <HideIcon /> : <ShowIcon />}
            aria-label='Show or Hide action'
            onClick={handleOnClick}
          />
        </QualitativeAttributeActionContainer>
      ) : null}
    </QualitativeAttributeContainer>
  )
}

export default QualitativeAttribute
