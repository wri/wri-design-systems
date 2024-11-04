import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Radio from '.'

const meta = {
  title: 'Controls/Radio Button/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const SingleRadio: Story = {
  args: {
    label: 'Single Radio',
    value: '1',
  },
}

export const DefaultChecked: Story = {
  args: {
    label: 'Single Radio',
    value: '1',
    isChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Single Radio',
    value: '1',
    isDisabled: true,
    isChecked: true,
  },
}
