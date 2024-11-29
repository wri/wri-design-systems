// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Textarea from '.'

const meta = {
  title: 'Inputs/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const RequiredtTextarea: Story = {
  args: {
    label: 'Required Textarea',
    caption: 'caption',
    placeholder: 'placeholder',
    helperText: 'You have 200 characters remaining',
    required: true,
  },
}

export const OptionaltTextarea: Story = {
  args: {
    label: 'Optional Textarea',
    caption: 'caption',
    placeholder: 'placeholder',
  },
}

export const SmallTextarea: Story = {
  args: {
    label: 'Small Textarea',
    caption: 'caption',
    placeholder: 'placeholder',
    size: 'small',
    required: true,
  },
}

export const DefaultValue: Story = {
  args: {
    label: 'Label',
    caption: 'caption',
    placeholder: 'placeholder',
    defaultValue: 'Default Value',
    required: true,
  },
}

export const WithError: Story = {
  args: {
    label: 'Label',
    caption: 'caption',
    placeholder: 'placeholder',
    errorMessage: 'Error Message',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    caption: 'caption',
    placeholder: 'placeholder',
    required: true,
    disabled: true,
  },
}
