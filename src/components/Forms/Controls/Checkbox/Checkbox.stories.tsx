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

    docs: {
      description: {
        component:
          'Checkbox control. Supports `indeterminate` state for parent checkboxes in a tree. Use `onCheckedChange` to handle state changes.',
      },
    },
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
  argTypes: {
    name: { description: 'Input name attribute', control: 'text' },
    value: { description: 'Value of the checkbox', control: 'text' },
    checked: { description: 'Controlled checked state', control: 'boolean' },
    defaultChecked: {
      description: 'Default checked state (uncontrolled)',
      control: 'boolean',
    },
    disabled: { description: 'Disables the checkbox', control: 'boolean' },
    indeterminate: {
      description: 'Renders the checkbox in indeterminate state',
      control: 'boolean',
    },
    onCheckedChange: {
      description: 'Handler called when checked state changes',
      control: false,
    },
  },
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
