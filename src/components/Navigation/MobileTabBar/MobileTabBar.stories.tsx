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

    docs: {
      description: {
        component: 'Bottom navigation bar optimized for mobile viewports.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ width: '20rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    defaultValue: { description: '`defaultValue` text', control: 'text' },
    tabs: { description: '`tabs` value', control: false },
    onTabClick: { description: '`onTabClick` handler', control: false },
    hideLabels: { description: '`hideLabels` flag', control: 'boolean' },
    activationMode: {
      description: '`activationMode` variant',
      control: { type: 'select' },
      options: ['automatic', 'manual', 'manual'],
    },
  },
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

export const MobileTabBarWithHiddenLabels: Story = {
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
    hideLabels: true,
  },
}

export const AutomaticActivationMode: Story = {
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
    activationMode: 'automatic',
  },
}
