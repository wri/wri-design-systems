// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import PaginationStory from '.'

const meta = {
  title: 'Data Display/Pagination',
  component: PaginationStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaginationStory>

export default meta
type Story = StoryObj<typeof meta>

export const Pagination: Story = {
  args: {
    totalItems: 100,
    pageSize: 10,
    currentPage: 1,
  },
}

export const Compact: Story = {
  args: {
    totalItems: 100,
    pageSize: 10,
    currentPage: 1,
    variant: 'compact',
  },
}

export const CompactWithButtons: Story = {
  args: {
    totalItems: 100,
    pageSize: 10,
    currentPage: 1,
    variant: 'compact-with-buttons',
  },
}
