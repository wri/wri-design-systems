/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import LegendItemStory from '.'
import ScaleBar from '../ScaleBar'
import QualitativeAttribute from '../QualitativeAttribute'
import InlineMessage from '../../../Status/InlineMessage'
import LayerParameters from '../LayerParameters'

const meta = {
  title: 'Geospatial/Legends/Legend Item',
  component: LegendItemStory,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component: 'Single legend entry showing a color swatch and label.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ width: '18.125rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    layerName: { description: '`layerName` text', control: 'text' },
    dataUnit: { description: '`dataUnit` text', control: 'text' },
    onDrag: { description: '`onDrag` handler', control: false },
    onUpClick: { description: '`onUpClick` handler', control: false },
    onDownClick: { description: '`onDownClick` handler', control: false },
    onRemoveClick: { description: '`onRemoveClick` handler', control: false },
    children: { description: '`children` content', control: false },
    onInfoClick: { description: '`onInfoClick` handler', control: false },
    onOpacityChanged: {
      description: '`onOpacityChanged` handler',
      control: false,
    },
    labels: { description: '`labels` value', control: false },
  },
} satisfies Meta<typeof LegendItemStory>

export default meta
type Story = StoryObj<typeof meta>

export const LegendItem: Story = {
  args: {
    layerName: 'Layer Name',
    dataUnit: 'Data Unit',
    onDrag: () => console.log('drag'),
    onUpClick: () => console.log('up'),
    onDownClick: () => console.log('down'),
    onRemoveClick: () => console.log('remove'),
    onInfoClick: () => console.log('info'),
    onOpacityChanged: (value) => console.log('opacity changed', value),
    children: null,
  },
  render: function Render(args) {
    return (
      <LegendItemStory {...args}>
        <ScaleBar
          colors={['#EDF8FB', '#B2E2E2', '#66C2A4', '#2CA25F', '#006D2C']}
          values={['0%', '25%', '50%', '75%', '100%']}
        />
        <QualitativeAttribute
          type='raster'
          label='Attribute'
          caption='Caption'
          color='#238B45'
          onActionClick={() => console.log('click')}
          showActionButton
        />
        <QualitativeAttribute
          type='raster'
          label='Attribute'
          caption='Caption'
          color='#238B45'
        />
        <InlineMessage
          label='Label'
          caption='caption'
          variant='info-white'
          actionLabel='Label'
          size='small'
        />
        <LayerParameters label='Adjust layer parameters'>
          <div>Component Placeholder</div>
          <div>Component Placeholder</div>
          <div>Component Placeholder</div>
        </LayerParameters>
      </LegendItemStory>
    )
  },
}
