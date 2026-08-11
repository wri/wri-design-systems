// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import OpacityControl from '.'

const meta = {
  title: 'Geospatial/Legends/Opacity Control',
  component: OpacityControl,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component: 'Control for adjusting map layer opacity from 0 to 100.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div
        style={{
          width: '14.875rem',
          minHeight: '12rem',
          paddingBottom: '9rem',
          overflow: 'visible',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    defaultValue: { description: '`defaultValue` value', control: 'number' },
    onOpacityChanged: {
      description: '`onOpacityChanged` callback',
      control: false,
    },
    labels: { description: '`labels` value', control: false },
  },
} satisfies Meta<typeof OpacityControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 80,
    onOpacityChanged: () => {},
  },
}
