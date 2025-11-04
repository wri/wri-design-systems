// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Toolbar from '.'
import { PlusIcon, MinusIcon, PrintIcon, ShareIcon } from '../../../icons'

const meta = {
  title: 'Forms/Actions/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toolbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    vertical: true,
    expanded: false,
    showExpandedToggle: true,
    defaultGaps: true,
    items: [
      {
        icon: <PlusIcon />,
        ariaLabel: 'zoom in',
        label: 'zoom in',
        gap: false,
      },
      {
        icon: <MinusIcon />,
        ariaLabel: 'zoom out',
        label: 'zoom out',
      },
      {
        icon: <PrintIcon />,
        ariaLabel: 'print',
        label: 'Print',
      },
    ],
  },
}

export const MapControl: Story = {
  args: {
    items: [
      {
        icon: <PlusIcon />,
        ariaLabel: 'zoom in',
      },
      {
        icon: <MinusIcon />,
        ariaLabel: 'zoom out',
      },
    ],
  },
}

export const Vertical: Story = {
  args: {
    items: [
      {
        icon: <PlusIcon />,
        ariaLabel: 'zoom in',
      },
      {
        icon: <MinusIcon />,
        ariaLabel: 'zoom out',
      },
    ],
    vertical: true,
  },
}

export const Single: Story = {
  args: {
    items: [
      {
        icon: <PrintIcon />,
        ariaLabel: 'print',
      },
    ],
  },
}

export const Disabled: Story = {
  args: {
    items: [
      {
        icon: <ShareIcon />,
        ariaLabel: 'share',
        disabled: true,
      },
    ],
  },
}
