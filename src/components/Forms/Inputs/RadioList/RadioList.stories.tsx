// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import RadioListStory from '.'

const meta = {
  title: 'Forms/Inputs/Radio List',
  component: RadioListStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onCheckedChange: fn() },
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
