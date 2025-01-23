// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import CheckboxListStory from '.'

const meta = {
  title: 'Forms/Inputs/Checkbox List',
  component: CheckboxListStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onCheckedChange: fn() },
} satisfies Meta<typeof CheckboxListStory>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxList: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    checkboxes: [
      {
        children: 'Checkbox 1',
        name: 'checkbox-1',
        value: 'checkbox-1',
      },
      {
        children: 'Checkbox 2',
        name: 'checkbox-2',
        value: 'checkbox-2',
      },
      {
        children: 'Checkbox 3',
        name: 'checkbox-3',
        value: 'checkbox-3',
      },
    ],
    required: true,
  },
}

export const WithDefaultValue: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    checkboxes: [
      {
        children: 'Checkbox 1',
        name: 'checkbox-1',
        value: 'checkbox-1',
      },
      {
        children: 'Checkbox 2',
        name: 'checkbox-2',
        value: 'checkbox-2',
      },
      {
        children: 'Checkbox 3',
        name: 'checkbox-3',
        value: 'checkbox-3',
      },
    ],
    defaultValue: 'checkbox-2',
    required: true,
  },
}

export const Horizontal: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    checkboxes: [
      {
        children: 'Checkbox 1',
        name: 'checkbox-1',
        value: 'checkbox-1',
      },
      {
        children: 'Checkbox 2',
        name: 'checkbox-2',
        value: 'checkbox-2',
      },
      {
        children: 'Checkbox 3',
        name: 'checkbox-3',
        value: 'checkbox-3',
      },
    ],
    defaultValue: 'checkbox-2',
    required: true,
    horizontal: true,
  },
}

export const WithErrorMessage: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    checkboxes: [
      {
        children: 'Checkbox 1',
        name: 'checkbox-1',
        value: 'checkbox-1',
      },
      {
        children: 'Checkbox 2',
        name: 'checkbox-2',
        value: 'checkbox-2',
      },
      {
        children: 'Checkbox 3',
        name: 'checkbox-3',
        value: 'checkbox-3',
      },
    ],
    defaultValue: 'checkbox-2',
    errorMessage: 'Error Message',
    required: true,
  },
}
