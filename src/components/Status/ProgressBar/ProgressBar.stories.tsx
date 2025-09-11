// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import ProgressBarStory from '.'

const meta = {
  title: 'Status/Progress Bar',
  component: ProgressBarStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBarStory>

export default meta
type Story = StoryObj<typeof meta>

export const ProgressBar: Story = {
  args: {
    progress: 50,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <ProgressBarStory {...args} />
    </div>
  ),
}
