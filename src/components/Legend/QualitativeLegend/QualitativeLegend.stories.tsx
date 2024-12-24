// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import QualitativeLegend from '.'
import { InfoIcon } from '../../icons'

const meta = {
  title: 'Legend/Qualitative',
  component: QualitativeLegend,
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
} satisfies Meta<typeof QualitativeLegend>

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
    color: '#F3FFF2',
    pointIcon: <InfoIcon />,
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
