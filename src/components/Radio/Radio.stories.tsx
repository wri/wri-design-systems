/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Radio from '.'
import RadioGroup from './RadioGroup'

const meta = {
  title: 'Forms/Controls/Radio Button',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const SingleRadio: Story = {
  args: {
    name: 'single-radio',
    onChange: (name, selectedValue) => console.log(name, selectedValue),
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value='1'>One</Radio>
    </RadioGroup>
  ),
}

export const DefaultChecked: Story = {
  args: {
    name: 'default-checked',
    defaultValue: '2',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value='1'>One</Radio>
      <Radio value='2'>Two</Radio>
      <Radio value='3'>Three</Radio>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  args: {
    name: 'default-checked',
    defaultValue: '2',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value='1'>One</Radio>
      <Radio value='2' disabled>
        Two
      </Radio>
      <Radio value='3'>Three</Radio>
    </RadioGroup>
  ),
}
