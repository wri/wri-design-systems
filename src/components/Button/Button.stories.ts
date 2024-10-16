import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from '.'

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    ariaLabel: 'aria label',
    label: 'Primary',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    ariaLabel: 'aria label',
    label: 'Secondary',
    variant: 'secondary',
  },
}

export const Borderless: Story = {
  args: {
    ariaLabel: 'aria label',
    label: 'Borderless',
    variant: 'borderless',
  },
}

export const Outline: Story = {
  args: {
    ariaLabel: 'aria label',
    label: 'Outline',
    variant: 'outline',
  },
}
