// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import SelectStory from '.'

const meta = {
  title: 'Forms/Inputs/Select',
  component: SelectStory,
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
} satisfies Meta<typeof SelectStory>

export default meta
type Story = StoryObj<typeof meta>

export const Select: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Please select',
    items: [
      {
        label: 'Label 1',
        caption: 'Caption 1',
        value: 'value-1',
      },
      {
        label: 'Label 2',
        caption: 'Caption 2',
        value: 'value-2',
      },
      {
        label: 'Label 3',
        caption: 'Caption 3',
        value: 'value-3',
      },
    ],
    required: true,
  },
}

export const DefaultValue: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Please select',
    defaultValue: ['value-2'],
    items: [
      {
        label: 'Label 1',
        caption: 'Caption 1',
        value: 'value-1',
      },
      {
        label: 'Label 2',
        caption: 'Caption 2',
        value: 'value-2',
      },
      {
        label: 'Label 3',
        caption: 'Caption 3',
        value: 'value-3',
      },
    ],
  },
}

export const SmallSize: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Please select',
    size: 'small',
    items: [
      {
        label: 'Label 1',
        caption: 'Caption 1',
        value: 'value-1',
      },
      {
        label: 'Label 2',
        caption: 'Caption 2',
        value: 'value-2',
      },
      {
        label: 'Label 3',
        caption: 'Caption 3',
        value: 'value-3',
      },
    ],
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Please select',
    defaultValue: ['value-2'],
    items: [
      {
        label: 'Label 1',
        caption: 'Caption 1',
        value: 'value-1',
      },
      {
        label: 'Label 2',
        caption: 'Caption 2',
        value: 'value-2',
      },
      {
        label: 'Label 3',
        caption: 'Caption 3',
        value: 'value-3',
      },
    ],
    disabled: true,
  },
}

export const ErrorMessage: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Please select',
    defaultValue: ['value-2'],
    items: [
      {
        label: 'Label 1',
        caption: 'Caption 1',
        value: 'value-1',
      },
      {
        label: 'Label 2',
        caption: 'Caption 2',
        value: 'value-2',
      },
      {
        label: 'Label 3',
        caption: 'Caption 3',
        value: 'value-3',
      },
    ],
    errorMessage: 'Error Message',
  },
}
