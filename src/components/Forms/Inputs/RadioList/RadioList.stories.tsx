// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import RadioListStory from '.'

const meta = {
  title: 'Forms/Inputs/Radio List',
  component: RadioListStory,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Pre-composed list of radio options. Use `items` to define options.',
      },
    },
  },
  tags: ['autodocs'],
  args: { onCheckedChange: fn() },
  decorators: [
    (Story: any) => (
      <div style={{ width: '22.875rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: { description: '`label` text', control: 'text' },
    caption: { description: '`caption` text', control: 'text' },
    name: { description: '`name` text', control: 'text' },
    radios: { description: '`radios` value', control: false },
    defaultValue: { description: '`defaultValue` text', control: 'text' },
    onCheckedChange: {
      description: '`onCheckedChange` handler',
      control: false,
    },
    errorMessage: { description: '`errorMessage` text', control: 'text' },
    horizontal: { description: '`horizontal` flag', control: 'boolean' },
    required: { description: '`required` flag', control: 'boolean' },
    variant: {
      description: '`variant` variant',
      control: { type: 'select' },
      options: ['default', 'card'],
    },
    labels: { description: '`labels` value', control: false },
  },
} satisfies Meta<typeof RadioListStory>

export default meta
type Story = StoryObj<typeof meta>

export const RadioList: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    name: 'radio-list-1',
    radios: [
      {
        children: 'Radio 1',
        value: 'radio-1',
      },
      {
        children: 'Radio 2',
        value: 'radio-2',
      },
      {
        children: 'Radio 3',
        value: 'radio-3',
      },
    ],
    required: true,
  },
}

export const WithDefaultValue: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    name: 'radio-list-2',
    defaultValue: 'radio-2',
    radios: [
      {
        children: 'Radio 1',
        value: 'radio-1',
      },
      {
        children: 'Radio 2',
        value: 'radio-2',
      },
      {
        children: 'Radio 3',
        value: 'radio-3',
      },
    ],
    required: true,
  },
}

export const Horizontal: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    name: 'radio-list-3',
    defaultValue: 'radio-2',
    radios: [
      {
        children: 'Radio 1',
        value: 'radio-1',
      },
      {
        children: 'Radio 2',
        value: 'radio-2',
      },
      {
        children: 'Radio 3',
        value: 'radio-3',
      },
    ],
    required: true,
    horizontal: true,
  },
}

export const WithErrorMessage: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    name: 'radio-list-2',
    defaultValue: 'radio-2',
    errorMessage: 'Error Message',
    radios: [
      {
        children: 'Radio 1',
        value: 'radio-1',
      },
      {
        children: 'Radio 2',
        value: 'radio-2',
      },
      {
        children: 'Radio 3',
        value: 'radio-3',
      },
    ],
    required: true,
  },
}

export const CardVariant: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    name: 'radio-list-2',
    defaultValue: 'radio-2',
    radios: [
      {
        children: 'Radio 1',
        value: 'radio-1',
      },
      {
        children: 'Radio 2',
        value: 'radio-2',
      },
      {
        children: 'Radio 3',
        value: 'radio-3',
      },
    ],
    variant: 'card',
    required: true,
  },
  render: (args) => (
    <div style={{ width: '22.875rem' }}>
      <RadioListStory {...args} />
    </div>
  ),
}

export const CardVariantWithErrorMessage: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    name: 'radio-list-2',
    defaultValue: 'radio-2',
    errorMessage: 'Error Message',
    radios: [
      {
        children: 'Radio 1',
        value: 'radio-1',
      },
      {
        children: 'Radio 2',
        value: 'radio-2',
      },
      {
        children: 'Radio 3',
        value: 'radio-3',
      },
    ],
    variant: 'card',
    required: true,
  },
  render: (args) => (
    <div style={{ width: '22.875rem' }}>
      <RadioListStory {...args} />
    </div>
  ),
}
