/* eslint-disable no-console */

import { useState } from 'react'
import { RadioGroup, Radio, Button } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'

const RadioDemo = () => {
  const [value1, setValue1] = useState('2')
  const [value2, setValue2] = useState('5')

  return (
    <DemoWrapper title='Radio'>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <RadioGroup
            name='radio-group-1'
            value={value1}
            onChange={(name, selectedValue) => setValue1(selectedValue)}
          >
            <Radio value='1'>One</Radio>
            <Radio value='2'>Two</Radio>
            <Radio value='3'>Three</Radio>
          </RadioGroup>
          <Button
            style={{ marginTop: '10px', marginBottom: '20px' }}
            label='Clear'
            variant='primary'
            onClick={() => setValue1('')}
          />
        </div>

        <RadioGroup
          name='radio-group-2'
          value={value2}
          onChange={(name, selectedValue) => setValue2(selectedValue)}
          horizontal
        >
          <Radio value='4'>Four</Radio>
          <Radio value='5' disabled>
            Five
          </Radio>
          <Radio value='6'>Six</Radio>
        </RadioGroup>
      </div>
    </DemoWrapper>
  )
}

export default RadioDemo
