import { Slider } from '..'

const SliderDemo = () => (
  <div
    style={{
      width: '280px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}
  >
    <Slider min={0} max={100} defaultValue={[50]} />
    <Slider
      min={0}
      max={100}
      defaultValue={[50]}
      marks={[
        { value: 0, label: 0 },
        { value: 25, label: 25 },
        { value: 50, label: 50 },
        { value: 75, label: 75 },
        { value: 100, label: 100 },
      ]}
    />
    <Slider
      min={0}
      max={100}
      defaultValue={[50]}
      marks={[
        { value: 0, label: 0 },
        { value: 25, label: 25 },
        { value: 50, label: 50 },
        { value: 75, label: 75 },
        { value: 100, label: 100 },
      ]}
      step={25}
    />
    <Slider value={[20, 80]} />
    <Slider min={-100} max={100} defaultValue={[0]} isCentred />
    <Slider value={[70]} marks={[0, 25, 50, 75, 100]} disabled />
  </div>
)

export default SliderDemo
