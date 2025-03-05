/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import {
  scaleBarBarStyles,
  scaleBarContainerStyles,
  scaleBarGradientBarStyles,
  scaleBarLabelContainerStyles,
  scaleBarSubLabelsStyles,
  scaleBarValueStyles,
} from './styled'
import { ScaleBarProps } from './types'

const generateGradient = (colors: string[]) => {
  const percentages = colors.map((_, index) => {
    const percentage = (index / (colors.length - 1)) * 100
    return `${percentage}%`
  })

  return `linear-gradient(to right, ${colors.map((color, index) => `${color} ${percentages[index]}`).join(', ')})`
}

const ScaleBar = ({ colors, values, subLabels, isGradient }: ScaleBarProps) => (
  <div css={scaleBarContainerStyles}>
    {isGradient ? (
      <div css={scaleBarGradientBarStyles(generateGradient(colors))} />
    ) : (
      <div css={scaleBarBarStyles}>
        {colors?.map((color, idx) => (
          <div
            key={`${color}-${values?.[idx]}`}
            data-test={`${color}-${values?.[idx]}`}
            style={{ backgroundColor: color, width: '100%', height: '100%' }}
          />
        ))}
      </div>
    )}
    <div css={scaleBarLabelContainerStyles}>
      {values?.map((value) => (
        <div
          key={value}
          style={{
            width: isGradient ? 'auto' : `calc(100% / ${values.length})`,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p css={scaleBarValueStyles}>{value}</p>
        </div>
      ))}
    </div>
    {subLabels && subLabels.length ? (
      <div css={scaleBarLabelContainerStyles}>
        {subLabels.map((subLabel) => (
          <div
            key={subLabel}
            style={{
              width: isGradient ? 'auto' : `calc(100% / ${values.length})`,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <p css={scaleBarSubLabelsStyles} style={{ width: '100%' }}>
              {subLabel}
            </p>
          </div>
        ))}
      </div>
    ) : null}
  </div>
)

export default ScaleBar
