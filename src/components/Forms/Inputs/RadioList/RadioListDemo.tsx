import { RadioList } from '../../..'

const RadioListDemo = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '366px',
    }}
  >
    <RadioList
      label='Label'
      caption='Caption'
      name='radio-list-1'
      defaultValue='radio-2'
      radios={[
        {
          children: 'Radio 1',
          value: 'radio-1',
        },
        {
          children: 'Radio 2',
          value: 'radio-2',
        },
        {
          children: 'Radio 3',
          value: 'radio-3',
        },
      ]}
      required
    />
    <RadioList
      label='Label'
      caption='Caption'
      name='radio-list-2'
      defaultValue='radio-2'
      errorMessage='Error Message'
      radios={[
        {
          children: 'Radio 1',
          value: 'radio-1',
        },
        {
          children: 'Radio 2',
          value: 'radio-2',
        },
        {
          children: 'Radio 3',
          value: 'radio-3',
        },
      ]}
      required
    />
    <RadioList
      label='Label'
      caption='Caption'
      name='radio-list-3'
      radios={[
        {
          children: 'Radio 1',
          value: 'radio-1',
        },
        {
          children: 'Radio 2',
          value: 'radio-2',
        },
        {
          children: 'Radio 3',
          value: 'radio-3',
        },
      ]}
      horizontal
      required
    />
  </div>
)

export default RadioListDemo
