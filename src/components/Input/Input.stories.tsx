// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Input from '.'

const meta = {
  title: 'Inputs/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const RequiredInput: Story = {
  args: {
    label: 'Required Input',
    caption: 'caption',
    placeholder: 'placeholder',
    required: true,
  },
}

export const OptionalInput: Story = {
  args: {
    label: 'Optional Input',
    caption: 'caption',
    placeholder: 'placeholder',
  },
}

export const SmallInput: Story = {
  args: {
    label: 'Small Input',
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
