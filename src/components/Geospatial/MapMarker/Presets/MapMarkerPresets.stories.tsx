import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MapMarkers } from '.'

const meta = {
  title: 'Geospatial/Map Marker/Presets',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
