import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { UserIcon } from '../../icons'
import List from '.'

const meta = {
  title: 'Data Display/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ backgroundColor: 'black', width: '450px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      {
        id: 0,
        label: 'Label',
        data: 'Data',
        variant: 'data',
        icon: <UserIcon />,
      },
      {
        id: 1,
        label: 'Label',
        caption: 'Data',
        icon: <UserIcon />,
        variant: 'navigation',
        onClick: () => alert('action'),
      },
    ],
  },
}
