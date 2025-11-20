// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { SimpleMapPin as SimpleMapPinPreset, ClusterPoint } from '.'
import { MapMarkerProps } from '../types'

type ClusterPointProps = {
  count?: MapMarkerProps['count']
  mode?: MapMarkerProps['mode']
  variant?: MapMarkerProps['variant']
}

const meta = {
  title: 'Geospatial/Map Marker',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: { type: 'number' },
    },
    mode: {
      control: {
        type: 'radio',
      },
      options: ['light', 'dark'],
    },
    variant: {
      control: {
        type: 'radio',
      },
      options: ['simple-pin', 'cluster'],
    },
  },
} satisfies Meta<ClusterPointProps>

export default meta
type Story = StoryObj<ClusterPointProps>

export const ClusterPointLight: Story = {
  args: {
    count: 10,
    mode: 'light',
    variant: 'cluster',
  },
  render: (args) => <ClusterPoint {...args} />,
}

export const ClusterPointDark: Story = {
  args: {
    count: 500000,
    mode: 'dark',
    variant: 'cluster',
  },
  render: (args) => <ClusterPoint {...args} />,
}

export const SimpleMapPin: Story = {
  args: {
    variant: 'simple-pin',
  },
  render: (args) => <SimpleMapPinPreset {...args} />,
}
