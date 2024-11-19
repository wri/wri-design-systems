/* eslint-disable no-console */

import { RadioGroup, Radio } from '..'

const RadioDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <RadioGroup
      name='radio-group-1'
      defaultValue='1'
      onChange={(name, selectedValue) => console.log(name, selectedValue)}
    >
      <Radio value='1'>One</Radio>
      <Radio value='2'>Two</Radio>
      <Radio value='3'>Three</Radio>
    </RadioGroup>
    <RadioGroup name='radio-group-2' defaultValue='5' isRow>
      <Radio value='4'>Four</Radio>
      <Radio value='5' disabled>
        Five
      </Radio>
      <Radio value='6'>Six</Radio>
    </RadioGroup>
  </div>
)

export default RadioDemo
