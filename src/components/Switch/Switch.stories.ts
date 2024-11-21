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
    defaultChecked: true,
  },
}

export const DisabledOn: Story = {
  args: {
    name: 'switch-disabled-on',
    defaultChecked: true,
    disabled: true,
  },
}

export const DisabledOff: Story = {
  args: {
    name: 'switch-disabled-off',
    disabled: true,
  },
}

export const WithLabel: Story = {
  args: {
    name: 'with-label',
    children: 'With Label',
  },
}

export const WithLabelLeft: Story = {
  args: {
    name: 'with-left-label',
    children: 'With Left Label',
    isLabelOnLeft: true,
  },
}
