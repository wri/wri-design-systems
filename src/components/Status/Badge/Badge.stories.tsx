// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Badge from '.'
import { InfoIcon, UserIcon } from '../../icons'

const meta = {
  title: 'Status/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    hasNotification: { control: 'boolean' },
    notificationCount: { control: 'number' },
    label: { control: 'text' },
    size: {
      control: 'radio',
      options: ['small', 'large'],
    },
    color: { control: 'object' },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const NotificationBellSmall: Story = {
  args: {
    size: 'small',
  },
}

export const NotificationBellLarge: Story = {
  args: {
    size: 'large',
  },
}

export const NotificationDotSmall: Story = {
  args: {
    hasNotification: true,
    size: 'small',
  },
}

export const NotificationDotLarge: Story = {
  args: {
    hasNotification: true,
    size: 'large',
  },
}

export const NotificationCountSmall: Story = {
  args: {
    notificationCount: 3,
    size: 'small',
  },
}

export const NotificationCountLarge: Story = {
  args: {
    notificationCount: 3,
    size: 'large',
  },
}

export const NotificationCountDoubleDigitSmall: Story = {
  args: {
    notificationCount: 12,
    size: 'small',
  },
}

export const NotificationCountDoubleDigitLarge: Story = {
  args: {
    notificationCount: 12,
    size: 'large',
  },
}

export const NotificationCountOverflowSmall: Story = {
  args: {
    notificationCount: 100,
    size: 'small',
  },
}

export const NotificationCountOverflowLarge: Story = {
  args: {
    notificationCount: 100,
    size: 'large',
  },
}

export const NotificationCountWithLabelSmall: Story = {
  args: {
    label: 'Notifications',
    notificationCount: 3,
    size: 'small',
  },
}

export const NotificationCountWithLabelLarge: Story = {
  args: {
    label: 'Notifications',
    notificationCount: 3,
    size: 'large',
  },
}

export const NotificationDotWithLabelSmall: Story = {
  args: {
    label: 'Notifications',
    hasNotification: true,
    size: 'small',
  },
}

export const NotificationDotWithLabelLarge: Story = {
  args: {
    label: 'Notifications',
    hasNotification: true,
    size: 'large',
  },
}

export const CustomIconCountSmall: Story = {
  args: {
    notificationCount: 3,
    size: 'small',
    children: <UserIcon color='currentColor' height='1rem' width='1rem' />,
  },
}

export const CustomIconCountLarge: Story = {
  args: {
    notificationCount: 3,
    size: 'large',
    children: <UserIcon color='currentColor' height='1.5rem' width='1.5rem' />,
  },
}

export const CustomIconDotSmall: Story = {
  args: {
    hasNotification: true,
    size: 'small',
    children: <InfoIcon color='currentColor' height='1rem' width='1rem' />,
  },
}

export const CustomIconDotLarge: Story = {
  args: {
    hasNotification: true,
    size: 'large',
    children: <InfoIcon color='currentColor' height='1.5rem' width='1.5rem' />,
  },
}

export const CustomIconOverflowLarge: Story = {
  args: {
    notificationCount: 150,
    size: 'large',
    children: <UserIcon color='currentColor' height='1.5rem' width='1.5rem' />,
  },
}
