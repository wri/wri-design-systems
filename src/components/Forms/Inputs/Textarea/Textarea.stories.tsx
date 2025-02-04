// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Textarea from '.'

const meta = {
  title: 'Forms/Inputs/Text Area',
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
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Placeholder',
    required: true,
  },
}

export const OptionalTextarea: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Placeholder',
  },
}

export const SmallTextarea: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Placeholder',
    size: 'small',
    required: true,
  },
}

export const DefaultValue: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Placeholder',
    defaultValue: 'Default Value',
    required: true,
  },
}

export const ErrorMessage: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Placeholder',
    errorMessage: 'Error Message',
    required: true,
  },
}

export const MaxLength: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Placeholder',
    maxLength: 200,
    required: true,
  },
}

export const MinLength: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Placeholder',
    minLength: 5,
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Placeholder',
    required: true,
    disabled: true,
  },
}
