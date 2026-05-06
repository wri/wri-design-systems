// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import PaginationStory from '.'

const meta = {
  title: 'Navigation/Pagination',
  component: PaginationStory,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Page navigation control. Use `totalPages`, `currentPage`, and `onPageChange` to control state.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: { description: '`currentPage` value', control: 'number' },
    totalItems: { description: '`totalItems` value', control: 'number' },
    pageSize: { description: '`pageSize` value', control: 'number' },
    variant: {
      description: '`variant` variant',
      control: { type: 'select' },
      options: ['default', 'compact', 'compact-with-buttons'],
    },
    onPageChange: { description: '`onPageChange` handler', control: false },
    labels: { description: '`labels` value', control: false },
  },
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
