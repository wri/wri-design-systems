// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import IconButton from '.'
import { ChevronDownIcon, MenuDotsIcon } from '../../../icons'

const meta = {
  title: 'Forms/Actions/Icon Button',
  component: IconButton,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Icon-only action button. Use when a label is not needed and the icon is self-explanatory. Wrap in `Tooltip` to provide accessible context.',
      },
    },
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    icon: {
      description: 'Icon element to render inside the button',
      control: false,
    },
    disabled: {
      description: 'Disables the button and prevents interaction',
      control: 'boolean',
    },
    onClick: { description: 'Click handler', control: false },
  },
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
    icon: <ChevronDownIcon />,
    disabled: true,
  },
}
