import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Checkbox from '.'

const meta = {
  title: 'Controls/Checkbox',
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
    label: 'Checkbox',
    name: 'Checkbox',
    value: '1',
  },
}

export const DefaultChecked: Story = {
  args: {
    label: 'Checkbox',
    name: 'Checkbox',
    value: '1',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Checkbox',
    name: 'Checkbox',
    value: '1',
    defaultChecked: true,
    isDisabled: true,
  },
}

export const Indeterminate: Story = {
  args: {
    label: 'Checkbox',
    name: 'Checkbox',
    value: '1',
    defaultChecked: true,
    isChecked: true,
    isIndeterminate: true,
  },
}
