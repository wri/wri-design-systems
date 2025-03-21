// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import ItemCountStory from '.'

const meta = {
  title: 'Information Display/Item Count',
  component: ItemCountStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ItemCountStory>

export default meta
type Story = StoryObj<typeof meta>

export const ItemCount: Story = {
  args: {
    currentPage: 1,
    totalItems: 100,
  },
}
