// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import MapControlStory from '.'
import { PlusIcon, MinusIcon, PrintIcon, ShareIcon } from '../../../icons'

const meta = {
  title: 'Forms/Buttons/Map Control',
  component: MapControlStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MapControlStory>

export default meta
type Story = StoryObj<typeof meta>

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
