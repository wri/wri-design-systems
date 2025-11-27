/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import AvatarStory from '.'
import Tooltip from '../../Forms/Actions/Tooltip'

const meta = {
  title: 'Status/Avatar',
  component: AvatarStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof AvatarStory>

export default meta
type Story = StoryObj<typeof meta>

export const Avatar: Story = {
  args: {
    size: 'medium',
    name: 'John Doe',
    src: 'https://bit.ly/sage-adebayo',
  },
}

export const WithClick: Story = {
  args: {
    name: 'Michael Scott',
    src: 'https://i.pravatar.cc/150?u=michael-scott',
    onClick: fn(),
    disabled: false,
  },
}

export const NoImage: Story = {
  args: {
    name: 'Heather Perkins',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    size: 'large',
    onClick: fn(),
    name: 'Heather Perkins',
  },
}

export const WithNotification: Story = {
  args: {
    name: 'Jane Doe',
    src: 'https://i.pravatar.cc/150?u=jane-doe',
    notificationCount: 3,
  },
}

export const WithTooltip: Story = {
  args: {
    name: 'Fenny Delphine',
    src: 'https://i.pravatar.cc/150?u=fenny-delphine',
  },
  render: (args) => (
    <Tooltip content='Fenny Delphine'>
      <AvatarStory {...args} />
    </Tooltip>
  ),
}
