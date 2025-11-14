import { useState } from 'react'
import { Stack } from '@chakra-ui/react'
import { Checkbox } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'

const initialValues = [
  { label: 'Monday', checked: false, value: 'monday' },
  { label: 'Tuesday', checked: false, value: 'tuesday' },
  { label: 'Wednesday', checked: false, value: 'wednesday' },
  { label: 'Thursday', checked: false, value: 'thursday' },
]

const CheckboxDemo = () => {
  const [values, setValues] = useState(initialValues)

  const allChecked = values.every((value) => value.checked)
  const indeterminate = values.some((value) => value.checked) && !allChecked

  const items = values.map((item, index) => (
    <Checkbox
      ms='6'
      key={item.value}
      checked={item.checked}
      onCheckedChange={(e) => {
        setValues((current) => {
          const newValues = [...current]
          newValues[index] = { ...newValues[index], checked: !!e.checked }
          return newValues
        })
      }}
    >
      {item.label}
    </Checkbox>
  ))

  return (
    <DemoWrapper title='Checkbox'>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '20px',
          }}
        >
          <Checkbox name='Checkbox' value='1' defaultChecked>
            Checkbox
          </Checkbox>
          <Checkbox name='Checkbox' value='1' checked disabled>
            Checkbox
          </Checkbox>
          <Checkbox name='Checkbox' value='1' disabled>
            Checkbox
          </Checkbox>
        </div>

        <Stack align='flex-start'>
          <Checkbox
            checked={allChecked}
            indeterminate={indeterminate}
            onCheckedChange={(e) => {
              setValues((current) =>
                current.map((value) => ({ ...value, checked: !!e.checked })),
              )
            }}
          >
            Weekdays
          </Checkbox>
          {items}
        </Stack>
      </div>
    </DemoWrapper>
  )
}

export default CheckboxDemo
