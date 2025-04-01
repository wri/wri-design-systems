// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import PaginationStory from '.'

const meta = {
  title: 'Information Display/Pagination',
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

export const CompactPagination: Story = {
  args: {
    totalItems: 100,
    pageSize: 10,
    currentPage: 1,
    compact: true,
  },
}
