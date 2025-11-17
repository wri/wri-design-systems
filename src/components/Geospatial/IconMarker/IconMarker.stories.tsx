// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import IconMarkerStory from '.'
import { PlaceholderIcon } from '../../icons'

const meta = {
  title: 'Geospatial/Icon Marker',
  component: IconMarkerStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const IconMarker: Story = {
  args: {
    ariaLabel: 'icon marker',
    icon: <PlaceholderIcon color='var(--chakra-colors-success-500)' />,
  },
}
