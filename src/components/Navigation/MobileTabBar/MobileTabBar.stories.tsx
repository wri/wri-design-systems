// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import MobileTabBarStory from '.'
import { PlaceholderIcon } from '../../icons'

const meta = {
  title: 'Navigation/Mobile Tab Bar',
  component: MobileTabBarStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MobileTabBarStory>

export default meta
type Story = StoryObj<typeof meta>

export const MobileTabBar: Story = {
  args: {
    tabs: [
      { label: 'One', value: 'one', icon: <PlaceholderIcon /> },
      { label: 'Two', value: 'two', icon: <PlaceholderIcon /> },
      {
        label: 'Three',
        value: 'three',
        icon: <PlaceholderIcon />,
        bagdeCount: 3,
      },
      {
        label: 'Four',
        value: 'four',
        icon: <PlaceholderIcon />,
      },
      {
        label: 'Five',
        value: 'five',
        icon: <PlaceholderIcon />,
      },
    ],
    onTabClick: () => {},
  },
}

export const MobileTabBarWithDefaultActive: Story = {
  args: {
    tabs: [
      { label: 'One', value: 'one', icon: <PlaceholderIcon /> },
      { label: 'Two', value: 'two', icon: <PlaceholderIcon /> },
      {
        label: 'Three',
        value: 'three',
        icon: <PlaceholderIcon />,
        bagdeCount: 3,
      },
      {
        label: 'Four',
        value: 'four',
        icon: <PlaceholderIcon />,
      },
      {
        label: 'Five',
        value: 'five',
        icon: <PlaceholderIcon />,
      },
    ],
    onTabClick: () => {},
    defaultValue: 'two',
  },
}

export const MobileTabBarDisabled: Story = {
  args: {
    tabs: [
      { label: 'One', value: 'one', icon: <PlaceholderIcon /> },
      { label: 'Two', value: 'two', icon: <PlaceholderIcon /> },
      {
        label: 'Three',
        value: 'three',
        icon: <PlaceholderIcon />,
        bagdeCount: 3,
      },
      {
        label: 'Four',
        value: 'four',
        icon: <PlaceholderIcon />,
        disabled: true,
      },
      {
        label: 'Five',
        value: 'five',
        icon: <PlaceholderIcon />,
      },
    ],
    onTabClick: () => {},
  },
}

export const MobileTabBarWithHideLabel: Story = {
  args: {
    tabs: [
      { label: 'One', value: 'one', icon: <PlaceholderIcon /> },
      { label: 'Two', value: 'two', icon: <PlaceholderIcon /> },
      {
        label: 'Three',
        value: 'three',
        icon: <PlaceholderIcon />,
        bagdeCount: 3,
      },
      {
        label: 'Four',
        value: 'four',
        icon: <PlaceholderIcon />,
      },
      {
        label: 'Five',
        value: 'five',
        icon: <PlaceholderIcon />,
        hideLabel: true,
      },
    ],
    onTabClick: () => {},
  },
}
