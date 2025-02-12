// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import InputWithUnitsStory from '.'

const meta = {
  title: 'Forms/Inputs/Input With Units',
  component: InputWithUnitsStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
  decorators: [
    (Story: any) => (
      <div style={{ width: '370px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InputWithUnitsStory>

export default meta
type Story = StoryObj<typeof meta>

export const InputWithUnits: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    units: [
      {
        label: 'Unit 1',
        value: 'unit-1',
      },
      {
        label: 'Unit 2',
        value: 'unit-2',
      },
      {
        label: 'Unit 3',
        value: 'unit-3',
      },
    ],
    required: true,
  },
}

export const InputWithUnitsLeft: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    units: [
      {
        label: 'Unit 1',
        value: 'unit-1',
      },
      {
        label: 'Unit 2',
        value: 'unit-2',
      },
      {
        label: 'Unit 3',
        value: 'unit-3',
      },
    ],
    unitsPosition: 'start',
    required: true,
  },
}

export const WithDefaultValue: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    units: [
      {
        label: 'Unit 1',
        value: 'unit-1',
      },
      {
        label: 'Unit 2',
        value: 'unit-2',
      },
      {
        label: 'Unit 3',
        value: 'unit-3',
      },
    ],
    defaultValue: '123',
    defaultUnit: 'unit-2',
    required: true,
  },
}

export const WithErrorMessage: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    units: [
      {
        label: 'Unit 1',
        value: 'unit-1',
      },
      {
        label: 'Unit 2',
        value: 'unit-2',
      },
      {
        label: 'Unit 3',
        value: 'unit-3',
      },
    ],
    errorMessage: 'Error Message',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    units: [
      {
        label: 'Unit 1',
        value: 'unit-1',
      },
      {
        label: 'Unit 2',
        value: 'unit-2',
      },
      {
        label: 'Unit 3',
        value: 'unit-3',
      },
    ],
    defaultValue: '123',
    defaultUnit: 'unit-2',
    disabled: true,
    required: true,
  },
}
