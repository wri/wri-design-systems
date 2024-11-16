// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from '.'
import { CheckIcon } from '../icons'

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
    label: 'Primary',
    variant: 'primary',
    size: 'default',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
  },
}

export const Borderless: Story = {
  args: {
    label: 'Borderless',
    variant: 'borderless',
  },
}

export const Outline: Story = {
  args: {
    label: 'Outline',
    variant: 'outline',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
    isDisabled: true,
  },
}

export const WithLeftIcon: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
    leftIcon: <CheckIcon />,
  },
}

export const WithRightIcon: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
    rightIcon: <CheckIcon />,
  },
}
