// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@chakra-ui/react'
import { MapIcon } from '../../icons'
import TextResults from './TextResults'
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
  {
    id: '6',
    label: 'Other Location 6',
    caption: 'State • Area',
    icon: <MapIcon />,
  },
  {
    id: '7',
    label: 'Other Location 7',
    caption: 'State • Area',
    icon: <MapIcon />,
  },
  {
    id: '8',
    label: 'Other Location 8',
    caption: 'State • Area',
    icon: <MapIcon />,
  },
  {
    id: '9',
    label: 'Other Location 9',
    caption: 'State • Area',
    icon: <MapIcon />,
  },
  {
    id: '10',
    label: 'Other Location 10',
    caption: 'State • Area',
    icon: <MapIcon />,
  },
]

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Search',
    onSelect: (option) => {
      console.log('Selected option:', option)
    },
  },
}

export const ResultsAsList: Story = {
  args: {
    options: sampleOptions,
    displayResults: 'list',
  },
}

export const CustomResultsRendering: Story = {
  args: {
    options: sampleOptions,
    displayResults: 'custom',
    renderResults: ({ items, query, highlightedIndex, onSelect }) => (
      <div>
        <Box padding='6px 8px'>
          Recent searches
          <TextResults
            highlightedIndex={highlightedIndex}
            items={items}
            query={query}
            onSelect={onSelect}
          />
        </Box>
      </div>
    ),
    onSelect: (option) => {
      console.log('Selected option:', option)
    },
  },
}

export const LoadingState: Story = {
  args: {
    options: sampleOptions,
    isLoading: true,
  },
}

export const SmallSize: Story = {
  args: {
    options: sampleOptions,
    size: 'small',
  },
}

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Disabled Search Field',
    disabled: true,
  },
}

export const MaxHeightResults: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Max Height Results',
    resultsMaxHeight: '70px',
  },
}

export const NoDisplayResults: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Results are hidden',
    displayResults: 'none',
  },
}
