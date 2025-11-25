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
    expanded: true,
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

export const WithTooltip: Story = {
  args: {
    vertical: true,
    expanded: false,
    showExpandedToggle: true,
    defaultGaps: true,
    items: [
      {
        icon: <ShareIcon />,
        ariaLabel: 'share',
        disabled: false,
        label: 'Share',
        tooltip: 'Share tooltip',
      },
      {
        icon: <PrintIcon />,
        ariaLabel: 'print',
        label: 'Print',
        tooltip: 'Print tooltip',
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
    showExpandedToggle: false,
  },
}

export const Single: Story = {
  args: {
    items: [
      {
        icon: <PrintIcon />,
        label: 'Print',

        ariaLabel: 'print',
      },
    ],

    showExpandedToggle: false,
    expanded: true,
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
