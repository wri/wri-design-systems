// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react'
import TooltipStory from '.'
import { InfoIcon } from '../../../icons'

const meta = {
  title: 'Forms/Actions/Tooltip',
  component: TooltipStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TooltipStory>

export default meta
type Story = StoryObj<typeof meta>

export const Tooltip: Story = {
  args: {
    content: 'Tooltip content',
    children: <InfoIcon height='20px' width='20px' />,
  },
}

export const TextVariant: Story = {
  args: {
    content: 'Tooltip content',
    children: <InfoIcon height='20px' width='20px' />,
    variant: 'text',
  },
}

export const AnyContent: Story = {
  args: {
    content: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <InfoIcon />
        This is a tooltip
      </div>
    ),
    children: <InfoIcon height='20px' width='20px' />,
  },
}

export const Position: Story = {
  args: {
    content: 'Tooltip content',
    children: <InfoIcon height='20px' width='20px' />,
    position: 'right',
  },
}

export const Delay: Story = {
  args: {
    content: 'Tooltip content',
    children: <InfoIcon height='20px' width='20px' />,
    openDelay: 500,
    closeDelay: 2000,
  },
}
