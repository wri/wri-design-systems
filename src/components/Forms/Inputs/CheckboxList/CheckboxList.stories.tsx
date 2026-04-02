// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import CheckboxListStory from '.'
import { DesignSystemLocaleProvider } from '../../..'

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
    defaultValues: ['checkbox-2'],
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

export const Horizontal: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    defaultValues: ['checkbox-2'],
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
    horizontal: true,
  },
}

export const WithErrorMessage: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    defaultValues: ['checkbox-2'],
    errorMessage: 'Error Message',
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

export const WithParentCheckbox: Story = {
  render: (args) => (
    <div style={{ width: '250px' }}>
      <CheckboxListStory {...args} />
    </div>
  ),
  args: {
    label: { type: 'checkbox', label: 'Parent', name: 'all' },
    defaultValues: ['checkbox-2'],
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

export const WithParentCheckboxAndErrorMessage: Story = {
  render: (args) => (
    <div style={{ width: '250px' }}>
      <CheckboxListStory {...args} />
    </div>
  ),
  args: {
    label: { type: 'checkbox', label: 'Parent', name: 'all' },
    defaultValues: ['checkbox-2'],
    errorMessage: 'Error Message',
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
/**
 * Override specific labels via the `labels` prop for one-off translations.
 * Works with any i18n library — pass pre-translated strings directly.
 */
export const WithI18nLabels: Story = {
  render: (args) => (
    <div style={{ width: '250px' }}>
      <CheckboxListStory {...args} />
    </div>
  ),
  args: {
    label: { type: 'checkbox', label: 'Opciones', name: 'all' },
    caption: 'Elige una o más opciones',
    labels: {
      expandLabel: 'Mostrar',
      hideLabel: 'Ocultar',
      requiredLabel: 'Obligatorio.',
      optionalLabel: 'Opcional',
      errorPrefix: 'Error:',
      requiredSymbolLabel: 'obligatorio',
    },
    checkboxes: [
      { children: 'Opción 1', name: 'opcion-1', value: 'opcion-1' },
      { children: 'Opción 2', name: 'opcion-2', value: 'opcion-2' },
      { children: 'Opción 3', name: 'opcion-3', value: 'opcion-3' },
    ],
    required: true,
  },
}

/**
 * Use `DesignSystemLocaleProvider` for app-wide translations.
 * All components inside the provider automatically receive the configured labels.
 */
export const WithI18nContext: Story = {
  render: (args) => (
    <DesignSystemLocaleProvider
      labels={{
        CheckboxList: {
          expandLabel: 'Afficher',
          hideLabel: 'Masquer',
          requiredLabel: 'Obligatoire.',
          optionalLabel: 'Optionnel',
          errorPrefix: 'Erreur :',
          requiredSymbolLabel: 'obligatoire',
        },
      }}
    >
      <div style={{ width: '250px' }}>
        <CheckboxListStory {...args} />
      </div>
    </DesignSystemLocaleProvider>
  ),
  args: {
    label: { type: 'checkbox', label: 'Options', name: 'all' },
    caption: 'Choisissez une ou plusieurs options',
    checkboxes: [
      { children: 'Option 1', name: 'option-1', value: 'option-1' },
      { children: 'Option 2', name: 'option-2', value: 'option-2' },
      { children: 'Option 3', name: 'option-3', value: 'option-3' },
    ],
    required: true,
  },
}
