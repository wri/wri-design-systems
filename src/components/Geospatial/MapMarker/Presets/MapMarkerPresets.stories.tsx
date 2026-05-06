import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MapMarkers } from '.'

const meta = {
  title: 'Geospatial/Map Marker/Presets',
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Marker for placing points of interest on the map. Supports custom icons via presets.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { description: '`ariaLabel` text', control: 'text' },
    icon: { description: '`icon` content', control: false },
    backgroundColor: { description: '`backgroundColor` text', control: 'text' },
    onClick: { description: '`onClick` handler', control: false },
    showFocusState: {
      description: '`showFocusState` flag',
      control: 'boolean',
    },
    count: { description: '`count` value', control: 'number' },
    mode: {
      description: '`mode` variant',
      control: { type: 'select' },
      options: ['dark', 'light'],
    },
    variant: {
      description: '`variant` variant',
      control: { type: 'select' },
      options: ['cluster', 'simple-pin', 'icon'],
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Paper: Story = {
  render: () => <MapMarkers.Paper />,
}

export const Drop: Story = {
  render: () => <MapMarkers.Drop />,
}

export const Plant: Story = {
  render: () => <MapMarkers.Plant />,
}

export const Point: Story = {
  render: () => <MapMarkers.Point />,
}
