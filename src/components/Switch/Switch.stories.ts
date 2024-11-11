import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Switch from '.'

const meta = {
  title: 'Controls/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const On: Story = {
  args: {
    name: 'switch-on',
    isChecked: true,
  },
}

export const DisabledOn: Story = {
  args: {
    name: 'switch-disabled-on',
    isChecked: true,
    isDisabled: true,
  },
}

export const DisabledOff: Story = {
  args: {
    name: 'switch-disabled-off',
    isDisabled: true,
  },
}
