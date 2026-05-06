// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import MapMarkerStory from '.'
import { PlaceholderIcon } from '../../icons'

const meta = {
  title: 'Geospatial/Map Marker',
  component: MapMarkerStory,
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
} satisfies Meta<typeof MapMarkerStory>

export default meta
type Story = StoryObj<typeof meta>

export const MapMarker: Story = {
  args: {
    ariaLabel: 'map marker',
    icon: <PlaceholderIcon color='var(--chakra-colors-success-500)' />,
  },
}
