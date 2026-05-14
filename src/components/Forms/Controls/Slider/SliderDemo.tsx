import { Slider } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'

const SliderDemo = () => (
  <DemoWrapper title='Slider'>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      <Slider
        width='17.5rem'
        min={0}
        max={100}
        value={[50]}
        aria-label={['Default slider'] as string[]}
      />
      <Slider
        width='17.5rem'
        min={0}
        max={100}
        value={[50]}
        aria-label={['Slider with marks'] as string[]}
        marks={[
          { value: 0, label: 0 },
          { value: 25, label: 25 },
          { value: 50, label: 50 },
          { value: 75, label: 75 },
          { value: 100, label: 100 },
        ]}
      />
      <Slider
        width='17.5rem'
        min={0}
        max={100}
        value={[50]}
        aria-label={['Stepped slider'] as string[]}
        marks={[
          { value: 0, label: 0 },
          { value: 25, label: 25 },
          { value: 50, label: 50 },
          { value: 75, label: 75 },
          { value: 100, label: 100 },
        ]}
        step={25}
      />
      <Slider
        width='17.5rem'
        value={[20, 80]}
        aria-label={['Range start', 'Range end'] as string[]}
      />
      <Slider
        width='17.5rem'
        min={-100}
        max={100}
        value={[0]}
        isCentred
        aria-label={['Centered slider'] as string[]}
      />
      <Slider
        width='17.5rem'
        value={[70]}
        aria-label={['Disabled slider'] as string[]}
        marks={[0, 25, 50, 75, 100]}
        disabled
      />
    </div>
  </DemoWrapper>
)

export default SliderDemo
