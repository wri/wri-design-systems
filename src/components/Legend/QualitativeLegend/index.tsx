// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { QualitativeLegendProps } from './types'
import {
  LineIndicator,
  PointIndicator,
  QualitativeLegendActionContainer,
  QualitativeLegendCaption,
  QualitativeLegendContainer,
  QualitativeLegendLabel,
  QualitativeLegendLabelContainer,
  RasterIndicator,
} from './styled'
import { HideIcon, ShowIcon } from '../../icons'
import Button from '../../Buttons/Button'

const QualitativeLegend = ({
  type,
  label,
  caption,
  color,
  onActionClick,
  showActionButton,
  pointIcon,
}: QualitativeLegendProps) => {
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
    <QualitativeLegendContainer>
      <QualitativeLegendLabelContainer>
        <div>
          {isRaster && <RasterIndicator color={color} />}
          {isLine && <LineIndicator color={color} />}
          {isPoint && (
            <PointIndicator color={color}>{pointIcon}</PointIndicator>
          )}
        </div>
        <div>
          <QualitativeLegendLabel aria-label={label}>
            {label}
          </QualitativeLegendLabel>
          <QualitativeLegendCaption aria-label={caption}>
            {caption}
          </QualitativeLegendCaption>
        </div>
      </QualitativeLegendLabelContainer>
      {onActionClick && showActionButton ? (
        <QualitativeLegendActionContainer>
          <Button
            variant='borderless'
            label={isShown ? 'Hide' : 'Show'}
            rightIcon={isShown ? <HideIcon /> : <ShowIcon />}
            aria-label='Show or Hide action'
            onClick={handleOnClick}
          />
        </QualitativeLegendActionContainer>
      ) : null}
    </QualitativeLegendContainer>
  )
}

export default QualitativeLegend
