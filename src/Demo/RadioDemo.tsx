import { Radio, RadioGroup } from '../components'

const RadioDemo = () => (
  <>
    <Radio label='Radio Alone' value='1' />

    <RadioGroup name='radio-group' defaultValue='2'>
      <Radio label='One' value='1' />
      <Radio label='Two' value='2' />
      <Radio label='Three' value='3' />
    </RadioGroup>
  </>
)

export default RadioDemo
