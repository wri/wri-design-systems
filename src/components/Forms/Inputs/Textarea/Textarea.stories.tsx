// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Textarea from '.'

const meta = {
  title: 'Forms/Inputs/Text Area',
  component: Textarea,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Multi-line text input. Use `rows` to set the initial height.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { description: 'Field label', control: 'text' },
    placeholder: { description: 'Placeholder text', control: 'text' },
    caption: {
      description: 'Helper text shown below the textarea',
      control: 'text',
    },
    errorMessage: {
      description: 'Validation error message — shown when set',
      control: 'text',
    },
    defaultValue: {
      description: 'Default value (uncontrolled)',
      control: 'text',
    },
    required: {
      description: 'Marks the field as required',
      control: 'boolean',
    },
    disabled: { description: 'Disables the textarea', control: 'boolean' },
    size: {
      description: 'Size variant',
      control: { type: 'select' },
      options: ['default', 'small'],
    },
    minLength: { description: 'Minimum character count', control: 'number' },
    maxLength: { description: 'Maximum character count', control: 'number' },
    onChange: { description: 'Change handler', control: false },
    labels: {
      description: 'Override internal UI labels for i18n',
      control: false,
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const RequiredTextarea: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    required: true,
  },
}

export const OptionalTextarea: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
  },
}

export const SmallTextarea: Story = {
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

export const ErrorMessage: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    errorMessage: 'Error Message',
    required: true,
  },
}

export const MaxLength: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    maxLength: 200,
    required: true,
  },
}

export const MinLength: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    minLength: 5,
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
