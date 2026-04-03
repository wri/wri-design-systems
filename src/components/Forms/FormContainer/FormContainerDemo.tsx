import { useState } from 'react'
import { Stack } from '@chakra-ui/react'
import { Checkbox, FormContainer } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'

const group1Items = [
  { label: 'Monday', value: 'monday', checked: false },
  { label: 'Tuesday', value: 'tuesday', checked: false },
  { label: 'Wednesday', value: 'wednesday', checked: false },
]

const group2Items = [
  { label: 'January', value: 'january', checked: false },
  { label: 'February', value: 'february', checked: false },
  { label: 'March', value: 'march', checked: false },
]

const FormContainerDemo = () => {
  const [g1, setG1] = useState(group1Items)
  const [g2, setG2] = useState(group2Items)

  const allG1 = g1.every((v) => v.checked)
  const indG1 = g1.some((v) => v.checked) && !allG1
  const allG2 = g2.every((v) => v.checked)
  const indG2 = g2.some((v) => v.checked) && !allG2

  const noneSelected = !g1.some((v) => v.checked) && !g2.some((v) => v.checked)

  return (
    <DemoWrapper title='Form Container'>
      <FormContainer
        label='Select options'
        error={noneSelected ? 'Please select at least one option.' : undefined}
      >
        <Stack align='flex-start' gap='20px'>
          <Stack align='flex-start'>
            <Checkbox
              checked={allG1}
              indeterminate={indG1}
              onCheckedChange={(e) =>
                setG1((curr) =>
                  curr.map((v) => ({ ...v, checked: !!e.checked })),
                )
              }
            >
              Weekdays
            </Checkbox>
            {g1.map((item, i) => (
              <Checkbox
                ms='6'
                key={item.value}
                checked={item.checked}
                onCheckedChange={(e) =>
                  setG1((curr) => {
                    const next = [...curr]
                    next[i] = { ...next[i], checked: !!e.checked }
                    return next
                  })
                }
              >
                {item.label}
              </Checkbox>
            ))}
          </Stack>

          <Stack align='flex-start'>
            <Checkbox
              checked={allG2}
              indeterminate={indG2}
              onCheckedChange={(e) =>
                setG2((curr) =>
                  curr.map((v) => ({ ...v, checked: !!e.checked })),
                )
              }
            >
              Months
            </Checkbox>
            {g2.map((item, i) => (
              <Checkbox
                ms='6'
                key={item.value}
                checked={item.checked}
                onCheckedChange={(e) =>
                  setG2((curr) => {
                    const next = [...curr]
                    next[i] = { ...next[i], checked: !!e.checked }
                    return next
                  })
                }
              >
                {item.label}
              </Checkbox>
            ))}
          </Stack>
        </Stack>
      </FormContainer>
    </DemoWrapper>
  )
}

export default FormContainerDemo
