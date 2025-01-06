// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Textarea from '.'

const meta = {
  title: 'Inputs/Text Area',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const RequiredTextarea: Story = {
  args: {
    label: 'Required Textarea',
    caption: 'caption',
    placeholder: 'placeholder',
    required: true,
  },
}

export const OptionalTextarea: Story = {
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

export const ErrorMessage: Story = {
  args: {
    label: 'Label',
    caption: 'caption',
    placeholder: 'placeholder',
    errorMessage: 'Error Message',
    required: true,
  },
}

export const MaxLength: Story = {
  args: {
    label: 'Label',
    caption: 'caption',
    placeholder: 'placeholder',
    maxLength: 200,
    required: true,
  },
}

export const MinLength: Story = {
  args: {
    label: 'Label',
    caption: 'caption',
    placeholder: 'placeholder',
    minLength: 5,
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
