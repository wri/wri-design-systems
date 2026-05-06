/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Radio from '.'
import RadioGroup from './RadioGroup'

const meta = {
  title: 'Forms/Controls/Radio Button',
  component: RadioGroup,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Radio button control. Use inside a radio group for mutually exclusive selection.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: { description: 'Value of the radio option', control: 'text' },
    disabled: { description: 'Disables the radio button', control: 'boolean' },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const SingleRadio: Story = {
  args: {
    name: 'single-radio',
    value: '1',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value)

    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={(name, selectedValue) => setValue(selectedValue)}
      >
        <Radio value='1'>One</Radio>
      </RadioGroup>
    )
  },
}

export const DefaultChecked: Story = {
  args: {
    name: 'default-checked',
    value: '2',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value)

    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={(name, selectedValue) => setValue(selectedValue)}
      >
        <Radio value='1'>One</Radio>
        <Radio value='2'>Two</Radio>
        <Radio value='3'>Three</Radio>
      </RadioGroup>
    )
  },
}

export const Disabled: Story = {
  args: {
    name: 'default-checked',
    value: '2',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value)

    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={(name, selectedValue) => setValue(selectedValue)}
      >
        <Radio value='1'>One</Radio>
        <Radio value='2' disabled>
          Two
        </Radio>
        <Radio value='3'>Three</Radio>
      </RadioGroup>
    )
  },
}
