// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import LayerItem from '.'
import RadioGroup from '../../../Forms/Controls/Radio/RadioGroup'

const meta = {
  title: 'Geospatial/Layers/Layer Item',
  component: LayerItem,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Individual layer row in the layer panel. Supports visibility toggle and opacity control.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ width: '20rem' }}>
        <RadioGroup name='radio-group'>
          <Story />
        </RadioGroup>
      </div>
    ),
  ],
  argTypes: {
    name: { description: '`name` text', control: 'text' },
    label: { description: '`label` text', control: 'text' },
    caption: { description: '`caption` text', control: 'text' },
    showInfoButton: {
      description: '`showInfoButton` flag',
      control: 'boolean',
    },
    infoButtonLabel: { description: '`infoButtonLabel` text', control: 'text' },
    variant: {
      description: '`variant` variant',
      control: { type: 'select' },
      options: ['switch', 'radio'],
    },
    disabled: { description: '`disabled` flag', control: 'boolean' },
    onInfoClick: { description: '`onInfoClick` handler', control: false },
    isDefaultSelected: {
      description: '`isDefaultSelected` flag',
      control: 'boolean',
    },
    onChange: { description: '`onChange` handler', control: false },
  },
} satisfies Meta<typeof LayerItem>

export default meta
type Story = StoryObj<typeof meta>

export const Switch: Story = {
  args: {
    name: 'switch-layer',
    label: 'Layer name',
    caption: 'Caption',
  },
}

export const Radio: Story = {
  args: {
    name: 'radio-layer',
    label: 'Layer name',
    caption: 'Caption',
    variant: 'radio',
  },
}

export const Disabled: Story = {
  args: {
    name: 'switch-layer-1',
    label: 'Layer name',
    caption: 'Caption',
    disabled: true,
  },
}

export const RadioDisabeld: Story = {
  args: {
    name: 'radio-layer',
    label: 'Layer name',
    caption: 'Caption',
    variant: 'radio',
    disabled: true,
  },
}

export const NoInfoButton: Story = {
  args: {
    name: 'switch-layer-2',
    label: 'Layer name',
    caption: 'Caption',
    showInfoButton: false,
  },
}

export const CustomInfoButtonLabel: Story = {
  args: {
    name: 'switch-layer-3',
    label: 'Layer name',
    caption: 'Caption',
    infoButtonLabel: 'Another Label',
  },
}
