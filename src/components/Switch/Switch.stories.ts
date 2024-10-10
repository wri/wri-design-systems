import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Switch from '.'

const meta = {
  title: 'Switch',
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
    id: 'switch-on',
    ariaLabel: 'aria label',
    isChecked: true,
  },
}

export const DisabledOn: Story = {
  args: {
    id: 'switch-disabled-on',
    ariaLabel: 'aria label',
    isChecked: true,
    isDisabled: true,
  },
}

export const DisabledOff: Story = {
  args: {
    id: 'switch-disabled-off',
    ariaLabel: 'aria label',
    isDisabled: true,
  },
}
