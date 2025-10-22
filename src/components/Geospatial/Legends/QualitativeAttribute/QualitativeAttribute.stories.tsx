// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import QualitativeAttribute from '.'
import { PlaceholderIcon } from '../../../icons'

const meta = {
  title: 'Geospatial/Legends/Qualitative Attributes',
  component: QualitativeAttribute,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onActionClick: fn() },
  decorators: [
    (Story: any) => (
      <div style={{ width: '238px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof QualitativeAttribute>

export default meta
type Story = StoryObj<typeof meta>

export const Raster: Story = {
  args: {
    type: 'raster',
    label: 'Attribute',
    caption: 'Caption',
    color: '#238B45',
  },
}

export const Line: Story = {
  args: {
    type: 'line',
    label: 'Attribute',
    caption: 'Caption',
    color: '#238B45',
  },
}

export const Point: Story = {
  args: {
    type: 'point',
    label: 'Attribute',
    caption: 'Caption',
    color: '#C7E9C0',
    pointIcon: <PlaceholderIcon color='#006D2C' />,
  },
}

export const WithActionButton: Story = {
  args: {
    type: 'raster',
    label: 'Attribute',
    caption: 'Caption',
    color: '#238B45',
    showActionButton: true,
  },
}
