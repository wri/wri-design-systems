// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import IconButton from '.'
import { CheckIcon, MenuDotsIcon } from '../../icons'

const meta = {
  title: 'Buttons/Icon Button',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: <MenuDotsIcon />,
  },
}

export const Disabled: Story = {
  args: {
    icon: <CheckIcon />,
    disabled: true,
  },
}
