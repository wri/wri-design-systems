// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MapIcon } from '../../icons'
import Search from '.'

const meta = {
  title: 'Navigation/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

const sampleOptions = [
  {
    id: '1',
    label: 'Location Name 1',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
  {
    id: '2',
    label: 'Location Name 2',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
  {
    id: '3',
    label: 'Location Name 3',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
  {
    id: '4',
    label: 'Location Name 4',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
  {
    id: '5',
    label: 'Location Name 5',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
]

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Search for a fruit',
    onSelect: (option) => {
      console.log('Selected option:', option)
    },
  },
}
