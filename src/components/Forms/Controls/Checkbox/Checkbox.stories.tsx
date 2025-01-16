// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Stack } from '@chakra-ui/react'
import Checkbox from '.'

const meta = {
  title: 'Forms/Controls/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const SingleCheckbox: Story = {
  args: {
    children: 'Checkbox',
    name: 'Checkbox',
    value: '1',
  },
}

export const DefaultChecked: Story = {
  args: {
    children: 'Checkbox',
    name: 'Checkbox',
    value: '1',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Checkbox',
    name: 'Checkbox',
    value: '1',
    defaultChecked: true,
    disabled: true,
  },
}

export const Indeterminate: Story = {
  render: function Render() {
    const initialValues = [
      { label: 'Monday', checked: false, value: 'monday' },
      { label: 'Tuesday', checked: false, value: 'tuesday' },
      { label: 'Wednesday', checked: false, value: 'wednesday' },
      { label: 'Thursday', checked: false, value: 'thursday' },
    ]

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
    )
  },
}
