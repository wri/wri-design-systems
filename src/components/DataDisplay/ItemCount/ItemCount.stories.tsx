// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import ItemCountStory from '.'

const meta = {
  title: 'Data Display/Item Count',
  component: ItemCountStory,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Displays a count with a label. Use in list headers or data summaries.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    pageSize: { description: '`pageSize` value', control: 'number' },
    currentPage: { description: '`currentPage` value', control: 'number' },
    totalItems: { description: '`totalItems` value', control: 'number' },
    onPageSizeChange: {
      description: '`onPageSizeChange` handler',
      control: false,
    },
    showItemCountText: {
      description: '`showItemCountText` flag',
      control: 'boolean',
    },
    labels: { description: '`labels` value', control: false },
  },
} satisfies Meta<typeof ItemCountStory>

export default meta
type Story = StoryObj<typeof meta>

export const ItemCount: Story = {
  args: {
    pageSize: 10,
    currentPage: 1,
    totalItems: 100,
  },
}
