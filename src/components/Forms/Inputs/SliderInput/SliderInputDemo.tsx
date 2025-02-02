/* eslint-disable no-console */

import { SliderInput } from '../../..'

const SliderInputDemo = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '420px',
    }}
  >
    <SliderInput
      label='Continuous'
      caption='Caption'
      sliderItem={{
        min: 0,
        max: 100,
        defaultValue: [30],
      }}
      onChange={(value) => console.log('Continuous', value)}
      required
    />
    <SliderInput
      label='Continuous Small'
      caption='Caption'
      size='small'
      sliderItem={{
        min: 0,
        max: 100,
        defaultValue: [60],
      }}
      onChange={(value) => console.log('Continuous Small', value)}
      required
    />
    <SliderInput
      label='Discrete'
      caption='Caption'
      sliderItem={{
        min: 0,
        max: 100,
        defaultValue: [75],
        marks: [
          { value: 0, label: 0 },
          { value: 25, label: 25 },
          { value: 50, label: 50 },
          { value: 75, label: 75 },
          { value: 100, label: 100 },
        ],
        step: 25,
      }}
      onChange={(value) => console.log('Discrete', value)}
      required
    />
    <SliderInput
      label='Range'
      caption='Caption'
      sliderItem={{
        min: 0,
        max: 100,
        defaultValue: [20, 80],
      }}
      onChange={(value) => console.log('Range', value)}
      required
    />
    <SliderInput
      label='Centered'
      caption='Caption'
      sliderItem={{
        min: -100,
        max: 100,
        defaultValue: [0],
        isCentred: true,
      }}
      onChange={(value) => console.log('Centered', value)}
      required
    />
  </div>
)

export default SliderInputDemo
