import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IconMarkers } from '.'

const meta = {
  title: 'Geospatial/Icon Marker/Presets/Icon Markers',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Paper: Story = {
  render: () => <IconMarkers.Paper />,
}

export const Drop: Story = {
  render: () => <IconMarkers.Drop />,
}

export const Plant: Story = {
  render: () => <IconMarkers.Plant />,
}

export const Point: Story = {
  render: () => <IconMarkers.Point />,
}
