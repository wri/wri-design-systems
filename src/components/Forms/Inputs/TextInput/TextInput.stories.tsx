// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import TextInput from '.'

const meta = {
  title: 'Forms/Inputs/Text Input',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>

export const RequiredInput: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    required: true,
  },
}

export const OptionalInput: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
  },
}

export const SmallInput: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    size: 'small',
    required: true,
  },
}

export const DefaultValue: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    defaultValue: 'Default Value',
    required: true,
  },
}

export const WithError: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    errorMessage: 'Error Message',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    required: true,
    disabled: true,
  },
}
