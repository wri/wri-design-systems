// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Badge from '.'

const meta = {
  title: 'Status/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Notification badge to wrap interactive elements. Shows a dot (`hasNotification`) or a numeric count (`notificationCount`).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    hasNotification: {
      description: '`hasNotification` flag',
      control: 'boolean',
    },
    notificationCount: {
      description: '`notificationCount` value',
      control: 'number',
    },
    label: { description: '`label` text', control: 'text' },
  },
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
