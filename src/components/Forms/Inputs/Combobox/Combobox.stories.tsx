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

const SPANISH_ITEMS = [
  { label: 'Opción 1', value: 'option-1' },
  { label: 'Opción 2', value: 'option-2' },
  { label: 'Opción 3', value: 'option-3' },
  { label: 'Opción 4', value: 'option-4' },
]

const meta = {
  title: 'Forms/Inputs/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Searchable select input combining a text field with a dropdown. Use when the list is long or users may type to filter.',
      },
    },
  },
  decorators: [
    (Story: any) => (
      <div style={{ width: '20rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    initialItems: { description: '`initialItems` value', control: false },
    label: { description: '`label` text', control: 'text' },
    required: { description: '`required` flag', control: 'boolean' },
    caption: { description: '`caption` text', control: 'text' },
    errorMessage: { description: '`errorMessage` text', control: 'text' },
    size: {
      description: '`size` variant',
      control: { type: 'select' },
      options: ['small', 'default'],
    },
    disabled: { description: '`disabled` flag', control: 'boolean' },
    placeholder: { description: '`placeholder` text', control: 'text' },
    labels: { description: '`labels` value', control: false },
    noMarginBottom: {
      description: '`noMarginBottom` flag',
      control: 'boolean',
    },
    multiple: { description: '`multiple` flag', control: 'boolean' },
    showSelectedItems: {
      description: '`showSelectedItems` flag',
      control: 'boolean',
    },
    value: { description: '`value` (controlled) — string[]', control: false },
    defaultValue: {
      description: '`defaultValue` (uncontrolled initial selection)',
      control: false,
    },
    onChange: {
      description: '`onChange` callback — (values: string[]) => void',
      control: false,
    },
    creatable: {
      description: '`creatable` flag — allow adding new options',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

export const Required: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Type to search or add new',
    initialItems: ITEMS,
    required: true,
  },
}

export const Optional: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Type to search or add new',
    initialItems: ITEMS,
  },
}

export const OptionalNoOptionalLabel: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Type to search or add new',
    initialItems: ITEMS,
    showOptionalLabel: false,
  },
}

export const Small: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Type to search or add new',
    initialItems: ITEMS,
    size: 'small',
    required: true,
  },
}

export const Multiple: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Type to search or add new',
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
    placeholder: 'Type to search or add new',
    initialItems: ITEMS,
    errorMessage: 'Error Message',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Type to search or add new',
    initialItems: ITEMS,
    required: true,
    disabled: true,
  },
}

export const Creatable: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Type to search or add new',
    initialItems: ITEMS,
    creatable: true,
    required: true,
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>(['option-2'])
    return (
      <div style={{ width: '18.125rem' }}>
        <Combobox
          label='Label'
          caption='Caption'
          placeholder='Type to search or add new'
          initialItems={ITEMS}
          value={value}
          onChange={setValue}
          required
        />
        <p style={{ marginTop: '0.5rem' }}>Selected: {value.join(', ')}</p>
      </div>
    )
  },
}

/**
 * Override specific labels via the `labels` prop for one-off translations.
 */
export const WithI18nLabels: Story = {
  args: {
    label: 'Categoría',
    caption: 'Selecciona una opción',
    placeholder: 'Escribe para buscar o agregar nuevo',
    initialItems: SPANISH_ITEMS,
    labels: {
      requiredSymbolLabel: 'obligatorio',
      optionalSuffix: ' (Opcional)',
      clearSelectionLabel: 'Borrar selección',
      toggleOptionsLabel: 'Mostrar opciones',
      noItemsFoundLabel: 'No se encontraron elementos',
      createOptionLabel: (inputValue) => `Crear “${inputValue}”`,
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
        Combobox: {
          requiredSymbolLabel: 'obligatorio',
          optionalSuffix: ' (Opcional)',
          clearSelectionLabel: 'Borrar selección',
          toggleOptionsLabel: 'Mostrar opciones',
          noItemsFoundLabel: 'No se encontraron elementos',
          createOptionLabel: (inputValue) => `Crear “${inputValue}”`,
        },
      }}
    >
      <Combobox {...args} />
    </DesignSystemLocaleProvider>
  ),
  args: {
    label: 'Categoría',
    caption: 'Selecciona una opción',
    placeholder: 'Escribe para buscar o agregar nuevo',
    initialItems: SPANISH_ITEMS,
  },
}
