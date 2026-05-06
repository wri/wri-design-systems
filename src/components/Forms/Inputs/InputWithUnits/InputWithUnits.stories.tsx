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

    docs: {
      description: {
        component: 'Text input with an attached unit selector (e.g. km, mi).',
      },
    },
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
  decorators: [
    (Story: any) => (
      <div style={{ width: '23.125rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: { description: '`label` text', control: 'text' },
    caption: { description: '`caption` text', control: 'text' },
    errorMessage: { description: '`errorMessage` text', control: 'text' },
    units: { description: '`units` value', control: false },
    unitsPosition: {
      description: '`unitsPosition` variant',
      control: { type: 'select' },
      options: ['start', 'end'],
    },
    defaultValue: { description: '`defaultValue` text', control: 'text' },
    defaultUnit: { description: '`defaultUnit` text', control: 'text' },
    onChange: { description: '`onChange` handler', control: false },
    required: { description: '`required` flag', control: 'boolean' },
    disabled: { description: '`disabled` flag', control: 'boolean' },
  },
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
