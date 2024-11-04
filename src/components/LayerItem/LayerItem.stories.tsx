import type { Meta, StoryObj } from '@storybook/react'
import LayerItem from '.'

const meta = {
  title: 'Layers/LayerItem',
  component: LayerItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LayerItem>

export default meta
type Story = StoryObj<typeof meta>

export const Switch: Story = {
  args: {
    id: 'switch-layer',
    label: 'Layer name',
    caption: 'Caption',
  },
}

export const Radio: Story = {
  args: {
    id: 'radio-layer',
    label: 'Layer name',
    caption: 'Caption',
    variant: 'radio',
  },
}

export const Disabled: Story = {
  args: {
    id: 'switch-layer-1',
    label: 'Layer name',
    caption: 'Caption',
    isDisabled: true,
  },
}

export const RadioDisabeld: Story = {
  args: {
    id: 'radio-layer',
    label: 'Layer name',
    caption: 'Caption',
    variant: 'radio',
    isDisabled: true,
  },
}

export const NoInfoButton: Story = {
  args: {
    id: 'switch-layer-2',
    label: 'Layer name',
    caption: 'Caption',
    showInfoButton: false,
  },
}

export const CustomInfoButtonLabel: Story = {
  args: {
    id: 'switch-layer-3',
    label: 'Layer name',
    caption: 'Caption',
    infoButtonLabel: 'Another Label',
  },
}
