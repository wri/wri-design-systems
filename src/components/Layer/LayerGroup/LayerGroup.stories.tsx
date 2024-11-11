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

// export const Radio: Story = {
//   args: {
//     name: 'radio-layer',
//     label: 'Layer name',
//     caption: 'Caption',
//     variant: 'radio',
//   },
// }

// export const Disabled: Story = {
//   args: {
//     name: 'switch-layer-1',
//     label: 'Layer name',
//     caption: 'Caption',
//     isDisabled: true,
//   },
// }

// export const RadioDisabeld: Story = {
//   args: {
//     name: 'radio-layer',
//     label: 'Layer name',
//     caption: 'Caption',
//     variant: 'radio',
//     isDisabled: true,
//   },
// }

// export const NoInfoButton: Story = {
//   args: {
//     name: 'switch-layer-2',
//     label: 'Layer name',
//     caption: 'Caption',
//     showInfoButton: false,
//   },
// }

// export const CustomInfoButtonLabel: Story = {
//   args: {
//     name: 'switch-layer-3',
//     label: 'Layer name',
//     caption: 'Caption',
//     infoButtonLabel: 'Another Label',
//   },
// }
