/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import AvatarStory from '.'
import Tooltip from '../../Forms/Actions/Tooltip'

const meta = {
  title: 'Status/Avatar',
  component: AvatarStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarStory>

export default meta
type Story = StoryObj<typeof meta>

export const Avatar: Story = {
  args: {
    name: 'John Doe',
    src: 'https://bit.ly/sage-adebayo',
  },
}

export const WithClick: Story = {
  args: {
    name: 'Michael Scott',
    src: 'https://i.pravatar.cc/150?u=michael-scott',
    onClick: () => console.log('clicked'),
  },
}

export const NoImage: Story = {
  args: {
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
