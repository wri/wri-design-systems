import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Toolbar from '../..'
import {
  PlusIcon,
  MinusIcon,
  ExpandIcon,
  ShareIcon,
  PrintIcon,
  SettingsIcon,
  QuestionIcon,
} from '../../../../../icons'

const meta = {
  title: 'Forms/Actions/Toolbar/Preset/Map Controls',
  component: Toolbar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toolbar>

export default meta
type Story = StoryObj<typeof meta>

const mapControlItems = [
  {
    icon: <PlusIcon />,
    label: 'Zoom in',
    ariaLabel: 'zoom in',
    onClick: () => {},
  },
  {
    icon: <MinusIcon />,
    label: 'Zoom out',
    ariaLabel: 'zoom out',
    onClick: () => {},
    gap: true,
  },
  {
    icon: <ExpandIcon />,
    label: 'Expand',
    ariaLabel: 'expand',
    onClick: () => {},
    gap: true,
  },
  {
    icon: <ShareIcon />,
    label: 'Share',
    ariaLabel: 'share',
    onClick: () => {},
    gap: true,
  },
  {
    icon: <PrintIcon />,
    label: 'Print',
    ariaLabel: 'print',
    onClick: () => {},
    gap: true,
  },
  {
    icon: <SettingsIcon />,
    label: 'Settings',
    ariaLabel: 'settings',
    onClick: () => {},
    gap: true,
  },
  {
    icon: <QuestionIcon />,
    label: 'Help',
    ariaLabel: 'question',
    onClick: () => {},
    gap: true,
  },
]

export const Horizontal: Story = {
  args: {
    items: mapControlItems,
    ariaLabel: 'Map controls toolbar',
    defaultGaps: true,
    showExpandedToggle: true,
    expanded: true,
    autoCollapse: true,
    vertical: false,
  },
  render: (args) => (
    <div style={{ width: 1100, border: '1px solid #ccc', padding: 16 }}>
      <Toolbar {...args} />
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    items: mapControlItems,
    vertical: true,
    ariaLabel: 'Map controls toolbar',
    showExpandedToggle: true,
    defaultGaps: false,
    expanded: true,
  },
  render: (args) => (
    <div
      style={{
        width: 800,
        height: 550,
        border: '1px solid #ccc',
        padding: 16,
      }}
    >
      <Toolbar {...args} />
    </div>
  ),
}
