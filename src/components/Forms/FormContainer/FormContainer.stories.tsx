import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@chakra-ui/react'
import FormContainer from '.'
import Checkbox from '../Controls/Checkbox'
import { InfoIcon } from '../../icons'

const meta = {
  title: 'Forms/FormContainer',
  component: FormContainer,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '18.75rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof FormContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Form Label',
    children: (
      <Checkbox name='option' value='1'>
        Option 1
      </Checkbox>
    ),
  },
}

export const WithError: Story = {
  args: {
    label: 'Form Label',
    error: 'Error Message',
    children: (
      <Checkbox name='option' value='1'>
        Option 1
      </Checkbox>
    ),
  },
}

export const WithComponentLabel: Story = {
  args: {
    label: (
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
        Select options
        <InfoIcon color='gray' width='0.875rem' height='0.875rem' />
      </span>
    ),
    children: (
      <Checkbox name='option' value='1'>
        Option 1
      </Checkbox>
    ),
  },
}

export const WithMultipleCheckboxGroups: Story = {
  args: {
    children: null,
  },
  render: function Render() {
    const group1Items = [
      { label: 'Monday', value: 'monday', checked: false },
      { label: 'Tuesday', value: 'tuesday', checked: false },
    ]
    const group2Items = [
      { label: 'January', value: 'january', checked: false },
      { label: 'February', value: 'february', checked: false },
    ]

    const [g1, setG1] = useState(group1Items)
    const [g2, setG2] = useState(group2Items)

    const allG1 = g1.every((v) => v.checked)
    const indG1 = g1.some((v) => v.checked) && !allG1
    const allG2 = g2.every((v) => v.checked)
    const indG2 = g2.some((v) => v.checked) && !allG2

    const noneSelected =
      !g1.some((v) => v.checked) && !g2.some((v) => v.checked)

    return (
      <FormContainer
        label='Select options'
        error={noneSelected ? 'Please select at least one option.' : undefined}
      >
        <Stack align='flex-start' gap='1.25rem'>
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
    )
  },
}
