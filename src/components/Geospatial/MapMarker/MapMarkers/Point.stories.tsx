import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IconMarkers } from '../Presets'

const meta = {
  title: 'Geospatial/Map Marker',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Point: Story = {
  render: () => <IconMarkers.Point />,
}
