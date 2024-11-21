// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import LayerGroupContainer from './LayerGroupContainer'
import LayerGroup from '.'

const meta = {
  title: 'Layers/LayerGroup',
  component: LayerGroupContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LayerGroupContainer>

export default meta
type Story = StoryObj<typeof meta>

export const LayerGroupOpen: Story = {
  args: {
    defaultValue: ['1'],
    children: (
      <>
        <LayerGroup
          label='Title 1'
          caption='Caption 1'
          value='1'
          layerItems={[
            {
              name: 'layer-1-item-1',
              label: 'Layer 1 name 1',
              caption: 'Caption',
            },
            {
              name: 'layer-1-item-2',
              label: 'Layer 1 name 2',
              caption: 'Caption',
            },
          ]}
        />
        <LayerGroup
          label='Title 2'
          caption='Caption 2'
          value='2'
          layerItems={[
            {
              name: 'layer-2-item-1',
              label: 'Layer 2 name 1',
              caption: 'Caption',
            },
            {
              name: 'layer-2-item-2',
              label: 'Layer 2 name 2',
              caption: 'Caption',
            },
          ]}
        />
      </>
    ),
  },
}

export const LayerGroupWithRadios: Story = {
  args: {
    defaultValue: ['3'],
    children: (
      <>
        <LayerGroup
          label='Title 3'
          caption='Caption 3'
          value='3'
          layerItems={[
            {
              name: 'layer-3-item-1',
              label: 'Layer 3 name 1',
              caption: 'Caption',
            },
            {
              name: 'layer-3-item-2',
              label: 'Layer 3 name 2',
              caption: 'Caption',
            },
          ]}
        />
        <LayerGroup
          label='Title 4'
          caption='Caption 4'
          value='4'
          layerItems={[
            {
              name: 'layer-4-item-1',
              label: 'Layer 4 name 1',
              caption: 'Caption',
              variant: 'radio',
            },
            {
              name: 'layer-4-item-2',
              label: 'Layer 4 name 2',
              caption: 'Caption',
              variant: 'radio',
            },
          ]}
        />
      </>
    ),
  },
}

export const LayerGroupDefaultSelected: Story = {
  args: {
    defaultValue: ['6'],
    children: (
      <>
        <LayerGroup
          label='Title 5'
          caption='Caption 5'
          value='5'
          layerItems={[
            {
              name: 'layer-5-item-1',
              label: 'Layer 5 name 1',
              caption: 'Caption',
            },
            {
              name: 'layer-5-item-2',
              label: 'Layer 5 name 2',
              caption: 'Caption',
              isDefaultSelected: true,
            },
          ]}
        />
        <LayerGroup
          label='Title 6'
          caption='Caption 6'
          value='6'
          layerItems={[
            {
              name: 'layer-6-item-1',
              label: 'Layer 6 name 1',
              caption: 'Caption',
              variant: 'radio',
            },
            {
              name: 'layer-6-item-2',
              label: 'Layer 6 name 2',
              caption: 'Caption',
              variant: 'radio',
              isDefaultSelected: true,
            },
          ]}
        />
      </>
    ),
  },
}
