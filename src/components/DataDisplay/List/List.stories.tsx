import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { UserIcon, MapIcon, SettingsIcon } from '../../icons'
import List from '.'

const meta = {
  title: 'Data Display/Lists/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ width: '450px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of objects defining each list item.',
    },
  },
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const LabelOnly: Story = {
  args: {
    items: [
      {
        id: 'data-1',
        label: 'Layer 1',
        variant: 'data',
      },
      {
        id: 'data-2',
        label: 'Layer 2',
        variant: 'data',
      },
      {
        id: 'data-3',
        label: 'Layer 3',
        variant: 'data',
      },
    ],
  },
}

export const LabelWithData: Story = {
  args: {
    items: [
      {
        id: 'data-1',
        label: 'Layer 1',
        value: 'Value 1',
        variant: 'data',
      },
      {
        id: 'data-2',
        label: 'Layer 2',
        value: 'Value 2',
        variant: 'data',
      },
      {
        id: 'data-3',
        label: 'Layer 3',
        value: 'Value 3',
        variant: 'data',
      },
    ],
  },
}

export const DataWithIcons: Story = {
  args: {
    items: [
      {
        id: 'data-1',
        label: 'Attribute 1',
        value: 'Info',
        variant: 'data',
        icon: <MapIcon />,
      },
      {
        id: 'data-2',
        label: 'Attribute 2',
        value: 'Warning',
        variant: 'data',
        icon: <SettingsIcon />,
      },
      {
        id: 'data-3',
        label: 'Attribute 3',
        value: 'Data',
        variant: 'data',
        icon: <UserIcon />,
      },
    ],
  },
}

export const NavigationOnly: Story = {
  args: {
    items: [
      {
        id: 'nav-1',
        label: 'Menu item 1',
        variant: 'navigation',
        onItemClick: fn(),
      },
      {
        id: 'nav-2',
        label: 'Menu item 2',
        variant: 'navigation',
        onItemClick: fn(),
      },
      {
        id: 'nav-3',
        label: 'Menu item 3',
        variant: 'navigation',
        onItemClick: fn(),
      },
    ],
  },
}

export const NavigationWithIcons: Story = {
  args: {
    items: [
      {
        id: 'nav-1',
        label: 'Option 1',
        variant: 'navigation',
        icon: <MapIcon />,
        onItemClick: fn(),
      },
      {
        id: 'nav-2',
        label: 'Option 2',
        variant: 'navigation',
        icon: <SettingsIcon />,
        onItemClick: fn(),
      },
      {
        id: 'nav-3',
        label: 'Option 3',
        variant: 'navigation',
        icon: <UserIcon />,
        onItemClick: fn(),
      },
    ],
  },
}

export const NavigationWithCaptions: Story = {
  args: {
    items: [
      {
        id: 'nav-1',
        label: 'Section 1',
        caption: 'Additional information',
        variant: 'navigation',
        icon: <MapIcon />,
        onItemClick: fn(),
      },
      {
        id: 'nav-2',
        label: 'Section 2',
        caption: 'More details here',
        variant: 'navigation',
        icon: <SettingsIcon />,
        onItemClick: fn(),
      },
      {
        id: 'nav-3',
        label: 'Section 3',
        caption: 'Extra context',
        variant: 'navigation',
        icon: <UserIcon />,
        onItemClick: fn(),
      },
    ],
  },
}

export const MixedItems: Story = {
  args: {
    items: [
      {
        id: 'data-1',
        label: 'Status',
        value: 'Active',
        variant: 'data',
        icon: <MapIcon />,
      },
      {
        id: 'nav-1',
        label: 'Settings',
        caption: 'Configure options',
        variant: 'navigation',
        icon: <SettingsIcon />,
        onItemClick: fn(),
      },
      {
        id: 'data-2',
        label: 'Version',
        value: '2.0',
        variant: 'data',
      },
      {
        id: 'nav-2',
        label: 'Profile',
        variant: 'navigation',
        onItemClick: fn(),
      },
    ],
  },
}
