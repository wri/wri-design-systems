// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import LayerParametersStory from '.'

const meta = {
  title: 'Geospatial/Legends/Layer Parameters',
  component: LayerParametersStory,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Displays layer configuration parameters in the legend panel.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ width: '14.875rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: { description: '`label` text', control: 'text' },
    children: { description: '`children` content', control: false },
    openedByDefault: {
      description: '`openedByDefault` flag',
      control: 'boolean',
    },
  },
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
