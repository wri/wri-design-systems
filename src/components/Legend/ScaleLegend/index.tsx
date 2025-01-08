// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import {
  ScaleLegendGradientBar,
  ScaleLegendContainer,
  ScaleLegendLabelContainer,
  ScaleLegendSubLabels,
  ScaleLegendValue,
  ScaleLegendBar,
} from './styled'
import { ScaleLegendProps } from './types'

const generateGradient = (colors: string[]) => {
  const percentages = colors.map((_, index) => {
    const percentage = (index / (colors.length - 1)) * 100
    return `${percentage}%`
  })

  return `linear-gradient(to right, ${colors.map((color, index) => `${color} ${percentages[index]}`).join(', ')})`
}

const ScaleLegend = ({
  colors,
  values,
  subLabels,
  isGradient,
}: ScaleLegendProps) => (
  <ScaleLegendContainer>
    {isGradient ? (
      <ScaleLegendGradientBar gradient={generateGradient(colors)} />
    ) : (
      <ScaleLegendBar>
        {colors?.map((color, idx) => (
          <div
            key={`${color}-${values?.[idx]}`}
            style={{ backgroundColor: color, width: '100%', height: '100%' }}
          />
        ))}
      </ScaleLegendBar>
    )}
    <ScaleLegendLabelContainer>
      {values?.map((value) => (
        <div
          style={{
            width: isGradient ? 'auto' : `calc(100% / ${values.length})`,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ScaleLegendValue key={value}>{value}</ScaleLegendValue>
        </div>
      ))}
    </ScaleLegendLabelContainer>
    {subLabels && subLabels.length ? (
      <ScaleLegendLabelContainer>
        {subLabels.map((subLabel) => (
          <div
            style={{
              width: isGradient ? 'auto' : `calc(100% / ${values.length})`,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ScaleLegendSubLabels key={subLabel} style={{ width: '100%' }}>
              {subLabel}
            </ScaleLegendSubLabels>
          </div>
        ))}
      </ScaleLegendLabelContainer>
    ) : null}
  </ScaleLegendContainer>
)

export default ScaleLegend
