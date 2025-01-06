/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import LegendItemStory from '.'
import ScaleLegend from '../ScaleLegend'
import QualitativeLegend from '../QualitativeLegend'
import InlineMessage from '../../InlineMessage'
import LayerParameters from '../LayerParameters'

const meta = {
  title: 'Legend/Legend Item',
  component: LegendItemStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ width: '290px' }}>
        <Story />
      </div>
    ),
  ],
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
        <ScaleLegend
          colors={['#EDF8FB', '#B2E2E2', '#66C2A4', '#2CA25F', '#006D2C']}
          values={['0%', '25%', '50%', '75%', '100%']}
        />
        <QualitativeLegend
          type='raster'
          label='Attribute'
          caption='Caption'
          color='#238B45'
          onActionClick={() => console.log('click')}
          showActionButton
        />
        <QualitativeLegend
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
