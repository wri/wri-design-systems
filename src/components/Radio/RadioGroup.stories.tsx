import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import RadioGroup from './RadioGroup'

const meta = {
  title: 'Radio Group',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const MultipleRadios: Story = {
  args: {
    name: 'radio-group',
    radios: [
      { label: 'One', value: 'one' },
      { label: 'Two', value: 'two' },
      { label: 'Three', value: 'three' },
    ],
  },
}

export const DefaultValue: Story = {
  args: {
    name: 'radio-group',
    radios: [
      { label: 'One', value: 'one' },
      { label: 'Two', value: 'two' },
      { label: 'Three', value: 'three' },
    ],
    defaultValue: 'two',
  },
}

export const Disabled: Story = {
  args: {
    name: 'radio-group',
    radios: [
      { label: 'One', value: 'one' },
      { label: 'Two', value: 'two', isDisabled: true },
      { label: 'Three', value: 'three', isDisabled: true },
    ],
    defaultValue: 'two',
  },
}

export const AsColumn: Story = {
  args: {
    name: 'radio-group',
    radios: [
      { label: 'One', value: 'one' },
      { label: 'Two', value: 'two' },
      { label: 'Three', value: 'three' },
    ],
    isColumn: true,
  },
}
