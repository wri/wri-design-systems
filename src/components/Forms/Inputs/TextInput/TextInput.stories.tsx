// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import TextInput from '.'
import { DesignSystemLocaleProvider } from '../../..'

const meta = {
  title: 'Forms/Inputs/Text Input',
  component: TextInput,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Single-line text input with label, caption, and validation support. Use `errorMessage` to display validation errors. Use `required` to mark mandatory fields.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { description: 'Field label', control: 'text' },
    placeholder: { description: 'Placeholder text', control: 'text' },
    caption: {
      description: 'Helper text shown below the input',
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
    disabled: { description: 'Disables the input', control: 'boolean' },
    size: {
      description: 'Size variant',
      control: { type: 'select' },
      options: ['default', 'small'],
    },
    noMarginBottom: {
      description: 'Removes bottom margin from the field',
      control: 'boolean',
    },
    onChange: { description: 'Change handler', control: false },
    labels: {
      description: 'Override internal UI labels for i18n',
      control: false,
    },
  },
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

/**
 * Override specific labels via the `labels` prop for one-off translations.
 */
export const WithI18nLabels: Story = {
  args: {
    label: 'Correo electrónico',
    caption: 'Introduce tu correo',
    labels: {
      requiredSymbolLabel: 'obligatorio',
      optionalSuffix: ' (Opcional)',
    },
  },
}

/**
 * Use `DesignSystemLocaleProvider` for app-wide translations.
 */
export const WithI18nContext: Story = {
  render: (args) => (
    <DesignSystemLocaleProvider
      labels={{
        TextInput: {
          requiredSymbolLabel: 'obligatoire',
          optionalSuffix: ' (Optionnel)',
        },
      }}
    >
      <TextInput {...args} />
    </DesignSystemLocaleProvider>
  ),
  args: {
    label: 'Adresse e-mail',
    caption: 'Entrez votre adresse e-mail',
  },
}
