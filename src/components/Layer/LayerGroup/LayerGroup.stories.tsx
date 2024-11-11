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
    defaultIndex: [0],
    allowMultiple: true,
    allowToggle: true,
    children: (
      <>
        <LayerGroup
          label='Title 1'
          caption='Caption 1'
          layerItems={[
            {
              name: 'layer-1-item-1',
              label: 'Layer name 1',
              caption: 'Caption',
            },
            {
              name: 'layer-1-item-2',
              label: 'Layer name 2',
              caption: 'Caption',
            },
          ]}
        />
        <LayerGroup
          label='Title 2'
          caption='Caption 2'
          layerItems={[
            {
              name: 'layer-2-item-1',
              label: 'Layer name 1',
              caption: 'Caption',
            },
            {
              name: 'layer-2-item-2',
              label: 'Layer name 2',
              caption: 'Caption',
            },
          ]}
        />
      </>
    )
  },
}

export const LayerGroupWithRadios: Story = {
  args: {
    defaultIndex: [0],
    allowMultiple: true,
    allowToggle: true,
    children: (
      <>
        <LayerGroup
          label='Title 1'
          caption='Caption 1'
          layerItems={[
            {
              name: 'layer-1-item-11',
              label: 'Layer name 1',
              caption: 'Caption',
            },
            {
              name: 'layer-1-item-12',
              label: 'Layer name 2',
              caption: 'Caption',
            },
          ]}
        />
        <LayerGroup
          label='Title 2'
          caption='Caption 2'
          layerItems={[
            {
              name: 'layer-2-item-21',
              label: 'Layer name 1',
              caption: 'Caption',
              variant: 'radio',
            },
            {
              name: 'layer-2-item-22',
              label: 'Layer name 2',
              caption: 'Caption',
              variant: 'radio',
            },
          ]}
        />
      </>
    )
  },
}
