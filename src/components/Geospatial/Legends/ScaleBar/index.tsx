// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import {
  ScaleBarGradientBar,
  ScaleBarContainer,
  ScaleBarLabelContainer,
  ScaleBarSubLabels,
  ScaleBarValue,
  ScaleBarBar,
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
  <ScaleBarContainer>
    {isGradient ? (
      <ScaleBarGradientBar gradient={generateGradient(colors)} />
    ) : (
      <ScaleBarBar>
        {colors?.map((color, idx) => (
          <div
            key={`${color}-${values?.[idx]}`}
            style={{ backgroundColor: color, width: '100%', height: '100%' }}
          />
        ))}
      </ScaleBarBar>
    )}
    <ScaleBarLabelContainer>
      {values?.map((value) => (
        <div
          style={{
            width: isGradient ? 'auto' : `calc(100% / ${values.length})`,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ScaleBarValue key={value}>{value}</ScaleBarValue>
        </div>
      ))}
    </ScaleBarLabelContainer>
    {subLabels && subLabels.length ? (
      <ScaleBarLabelContainer>
        {subLabels.map((subLabel) => (
          <div
            style={{
              width: isGradient ? 'auto' : `calc(100% / ${values.length})`,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ScaleBarSubLabels key={subLabel} style={{ width: '100%' }}>
              {subLabel}
            </ScaleBarSubLabels>
          </div>
        ))}
      </ScaleBarLabelContainer>
    ) : null}
  </ScaleBarContainer>
)

export default ScaleBar
