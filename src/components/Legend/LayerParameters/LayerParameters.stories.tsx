// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import LayerParametersStory from '.'

const meta = {
  title: 'Legend/Layer Parameters',
  component: LayerParametersStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ width: '238px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LayerParametersStory>

export default meta
type Story = StoryObj<typeof meta>

export const LayerParameters: Story = {
  args: {
    label: 'Adjust layer parameters',
    children: <div>Children</div>,
  },
  render: function Render() {
    return (
      <LayerParametersStory label='Adjust layer parameters'>
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
      </LayerParametersStory>
    )
  },
}
