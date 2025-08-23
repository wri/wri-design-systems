// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Badge from '.'

const meta = {
  title: 'Status/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const NotificationBell: Story = {
  args: {},
}

export const NotificationCount: Story = {
  args: {
    notificationCount: 1,
  },
}

export const NotificationCountWitLabel: Story = {
  args: {
    label: 'Notifications',
    notificationCount: 1,
  },
}

export const NotificationDot: Story = {
  args: {
    hasNotification: true,
  },
}
