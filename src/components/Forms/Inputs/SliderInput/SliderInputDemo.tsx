/* eslint-disable no-console */

import { SliderInput } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'

const SliderInputDemo = () => (
  <DemoWrapper title='Slider Input'>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '420px',
        width: '100%',
      }}
    >
      <SliderInput
        label='Continuous'
        caption='Caption'
        sliderItem={{
          min: 0,
          max: 100,
          value: [30],
        }}
        onChange={(value: number[]) => console.log('Continuous', value)}
        required
      />
      <SliderInput
        label='Continuous Small'
        caption='Caption'
        size='small'
        sliderItem={{
          min: 0,
          max: 100,
          value: [60],
        }}
        onChange={(value: number[]) => console.log('Continuous Small', value)}
        required
      />
      <SliderInput
        label='Discrete'
        caption='Caption'
        sliderItem={{
          min: 0,
          max: 100,
          value: [75],
          marks: [
            { value: 0, label: 0 },
            { value: 25, label: 25 },
            { value: 50, label: 50 },
            { value: 75, label: 75 },
            { value: 100, label: 100 },
          ],
          step: 25,
        }}
        onChange={(value: number[]) => console.log('Discrete', value)}
        required
      />
      <SliderInput
        label='Range'
        caption='Caption'
        sliderItem={{
          min: 0,
          max: 100,
          value: [20, 80],
        }}
        onChange={(value: number[]) => console.log('Range', value)}
        required
      />
      <SliderInput
        label='Centered'
        caption='Caption'
        sliderItem={{
          min: -100,
          max: 100,
          value: [0],
          isCentred: true,
        }}
        onChange={(value: number[]) => console.log('Centered', value)}
        required
      />
    </div>
  </DemoWrapper>
)

export default SliderInputDemo
