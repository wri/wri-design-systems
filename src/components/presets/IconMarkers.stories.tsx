// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { IconMarkers } from './IconMarkers'

const meta = {
  title: 'Presets/Icon Markers',
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
