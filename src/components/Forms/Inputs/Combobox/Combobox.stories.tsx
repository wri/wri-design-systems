// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Combobox from '.'
import { DesignSystemLocaleProvider } from '../../..'

const ITEMS = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
]

const meta = {
  title: 'Forms/Inputs/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

export const Required: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Search...',
    initialItems: ITEMS,
    required: true,
  },
}

export const Optional: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Search...',
    initialItems: ITEMS,
  },
}

export const Small: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Search...',
    initialItems: ITEMS,
    size: 'small',
    required: true,
  },
}

export const Multiple: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Search...',
    initialItems: ITEMS,
    multiple: true,
    showSelectedItems: true,
    required: true,
  },
}

export const WithError: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Search...',
    initialItems: ITEMS,
    errorMessage: 'Error Message',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Search...',
    initialItems: ITEMS,
    required: true,
    disabled: true,
  },
}

/**
 * Override specific labels via the `labels` prop for one-off translations.
 */
export const WithI18nLabels: Story = {
  args: {
    label: 'Categoría',
    caption: 'Selecciona una opción',
    placeholder: 'Buscar...',
    initialItems: ITEMS,
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
      <Combobox {...args} />
    </DesignSystemLocaleProvider>
  ),
  args: {
    label: 'Catégorie',
    caption: 'Sélectionnez une option',
    placeholder: 'Rechercher...',
    initialItems: ITEMS,
  },
}
