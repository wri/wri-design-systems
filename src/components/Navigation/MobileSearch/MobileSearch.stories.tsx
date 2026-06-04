// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import MobileSearch from '.'
import { HistoryIcon } from '../../icons'

const sampleItems = [
  {
    id: 'location-1',
    label: 'Location name',
    caption: 'City • Address',
    icon: <HistoryIcon width='1.5rem' height='1.5rem' />,
  },
  {
    id: 'location-2',
    label: 'Location name',
    caption: 'City • Address',
    icon: <HistoryIcon width='1.5rem' height='1.5rem' />,
  },
  {
    id: 'location-3',
    label: 'Location name',
    caption: 'City • Address',
    icon: <HistoryIcon width='1.5rem' height='1.5rem' />,
  },
  {
    id: 'location-4',
    label: 'Location name',
    caption: 'City • Address',
    icon: <HistoryIcon width='1.5rem' height='1.5rem' />,
  },
  {
    id: 'location-5',
    label: 'Location name',
    caption: 'City • Address',
    icon: <HistoryIcon width='1.5rem' height='1.5rem' />,
  },
]

const meta = {
  title: 'Navigation/MobileSearch',
  component: MobileSearch,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    placeholder: {
      description: 'Placeholder text for the search input',
      control: 'text',
    },
    showInfoMessage: {
      description: 'Shows the inline info message when no query is typed',
      control: 'boolean',
    },
    items: {
      description: 'List of result items (ListItemProps[])',
      control: false,
    },
    onItemClick: {
      description: 'Handler called when a result item is clicked',
      control: false,
    },
    onCancel: {
      description: 'Handler called when the cancel button is pressed',
      control: false,
    },
    onQueryChange: {
      description: 'Handler called when the query string changes',
      control: false,
    },
    labels: {
      description: 'Override internal UI labels for i18n',
      control: false,
    },
    value: { table: { disable: true } },
  },
} satisfies Meta<typeof MobileSearch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Search',
    showInfoMessage: true,
    items: sampleItems,
  },
}
