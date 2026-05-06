/** @jsxImportSource @emotion/react */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { UserIcon, MapIcon, InfoIcon } from '../../icons'
import ListItem from './ListItem'
import { Tag } from '../..'

const meta = {
  title: 'Data Display/Lists/List Item',
  component: ListItem,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Structured list component with optional icons, actions, and nested items.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    onItemClick: fn(),
  },
  decorators: [
    (Story: any) => (
      <div style={{ width: '20rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['data', 'navigation'],
    },
    label: {
      control: 'text',
    },
    caption: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    icon: {
      control: { type: 'boolean' },
      mapping: {
        true: <UserIcon />,
        false: undefined,
      },
    },
  },
} satisfies Meta<typeof ListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Data: Story = {
  args: {
    label: 'Layer name',
    variant: 'data',
  },
}

export const DataWithValue: Story = {
  args: {
    label: 'Layer name',
    value: 'Value',
    variant: 'data',
  },
}

export const DataWithValueTag: Story = {
  args: {
    label: 'Layer name',
    value: (
      <Tag
        icon={<InfoIcon />}
        label='Value'
        onClick={() => {}}
        variant='info-grey'
      />
    ),
    variant: 'data',
  },
}

export const DataWithIcon: Story = {
  args: {
    label: 'Layer name',
    value: 'Value',
    variant: 'data',
    icon: <MapIcon />,
  },
}

export const Navigation: Story = {
  args: {
    label: 'Menu item',
    variant: 'navigation',
  },
}

export const NavigationWithIcon: Story = {
  args: {
    label: 'Menu item',
    variant: 'navigation',
    icon: <UserIcon />,
  },
}

export const NavigationWithCaption: Story = {
  args: {
    label: 'Menu item',
    caption: 'Additional information',
    variant: 'navigation',
    icon: <UserIcon />,
  },
}

export const NavigationDisabled: Story = {
  args: {
    label: 'Menu item',
    variant: 'navigation',
    icon: <UserIcon />,
    disabled: true,
  },
}
