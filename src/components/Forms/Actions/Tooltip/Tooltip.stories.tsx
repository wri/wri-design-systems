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

    docs: {
      description: {
        component:
          "Contextual label that appears on hover. Wraps any trigger element. Use `variant='pill'` for short labels and `variant='text'` for longer explanations.",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { description: '`children` content', control: false },
    content: { description: '`content` content', control: false },
    showArrow: { description: '`showArrow` value', control: false },
    disabled: { description: '`disabled` flag', control: 'boolean' },
    position: {
      description: '`position` variant',
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left', 'bottom'],
    },
    variant: {
      description: '`variant` variant',
      control: { type: 'select' },
      options: ['pill', 'text', 'pill'],
    },
    portalRef: { description: '`portalRef` value', control: false },
    openDelay: { description: '`openDelay` value', control: 'number' },
    closeDelay: { description: '`closeDelay` value', control: 'number' },
  },
} satisfies Meta<typeof TooltipStory>

export default meta
type Story = StoryObj<typeof meta>

export const Tooltip: Story = {
  args: {
    content: 'Tooltip content',
    children: <InfoIcon height='1.25rem' width='1.25rem' />,
  },
}

export const TextVariant: Story = {
  args: {
    content: 'Tooltip content',
    children: <InfoIcon height='1.25rem' width='1.25rem' />,
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
          gap: '0.3125rem',
        }}
      >
        <InfoIcon />
        This is a tooltip
      </div>
    ),
    children: <InfoIcon height='1.25rem' width='1.25rem' />,
  },
}

export const Position: Story = {
  args: {
    content: 'Tooltip content',
    children: <InfoIcon height='1.25rem' width='1.25rem' />,
    position: 'right',
  },
}

export const Delay: Story = {
  args: {
    content: 'Tooltip content',
    children: <InfoIcon height='1.25rem' width='1.25rem' />,
    openDelay: 500,
    closeDelay: 2000,
  },
}
