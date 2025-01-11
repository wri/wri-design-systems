// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import InlineMessage from '.'

const meta = {
  title: 'Status/Inline Message',
  component: InlineMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onActionClick: fn() },
} satisfies Meta<typeof InlineMessage>

export default meta
type Story = StoryObj<typeof meta>

export const InfoWhite: Story = {
  args: {
    label: 'Info White',
    caption: 'caption',
    variant: 'info-white',
    actionLabel: 'Label',
  },
}

export const InfoGrey: Story = {
  args: {
    label: 'Info Grey',
    caption: 'caption',
    variant: 'info-grey',
    actionLabel: 'Label',
  },
}

export const Success: Story = {
  args: {
    label: 'Success',
    caption: 'caption',
    variant: 'success',
    actionLabel: 'Label',
  },
}

export const Warning: Story = {
  args: {
    label: 'Warning',
    caption: 'caption',
    variant: 'warning',
    actionLabel: 'Label',
  },
}

export const Error: Story = {
  args: {
    label: 'Error',
    caption: 'caption',
    variant: 'error',
    actionLabel: 'Label',
  },
}

export const ButtonRight: Story = {
  args: {
    label: 'Info White',
    caption: 'caption',
    variant: 'info-white',
    actionLabel: 'Label',
    isButtonRight: true,
  },
}

export const Small: Story = {
  args: {
    label: 'Info White',
    caption: 'caption',
    variant: 'info-white',
    actionLabel: 'Label',
    size: 'small',
    isButtonRight: true,
  },
}

export const SmallButtonRight: Story = {
  args: {
    label: 'Info White',
    caption: 'caption',
    variant: 'info-white',
    actionLabel: 'Label',
    size: 'small',
    isButtonRight: true,
  },
}
