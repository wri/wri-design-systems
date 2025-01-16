// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import NavigationRail from '.'
import { CheckIcon } from '../../icons'

const meta = {
  title: 'Navigation/Navigation Rail',
  component: NavigationRail,
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
  tags: ['autodocs'],
  args: { onTabClick: fn() },
} satisfies Meta<typeof NavigationRail>

export default meta
type Story = StoryObj<typeof meta>

export const NavigationRailActive: Story = {
  args: {
    tabs: [
      {
        label: 'Label 1',
        value: 'label-1',
        icon: <CheckIcon />,
      },
      {
        label: 'Label 2',
        value: 'label-2',
        icon: <CheckIcon />,
      },
      {
        label: 'Label 3',
        value: 'label-3',
        icon: <CheckIcon />,
      },
    ],
    defaultValue: 'label-1',
  },
}

export const NavigationRailDefaultSelected: Story = {
  args: {
    tabs: [
      {
        label: 'Label 1',
        value: 'label-1',
        icon: <CheckIcon />,
      },
      {
        label: 'Label 2',
        value: 'label-2',
        icon: <CheckIcon />,
      },
      {
        label: 'Label 3',
        value: 'label-3',
        icon: <CheckIcon />,
      },
    ],
    defaultValue: 'label-2',
  },
}

export const NavigationRailOpenClose: Story = {
  args: {
    tabs: [
      {
        label: 'Label 1',
        value: 'label-1',
        icon: <CheckIcon />,
      },
      {
        label: 'Label 2',
        value: 'label-2',
        icon: <CheckIcon />,
      },
      {
        label: 'Label 3',
        value: 'label-3',
        icon: <CheckIcon />,
      },
    ],
    children: <div>children</div>,
  },
}
