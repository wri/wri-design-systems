// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Combobox from '.'
import { ComboboxItem } from './types'
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
    items: {
      description:
        '`items` — reactive item list; replaces the dropdown contents when it changes',
      control: false,
    },
    onQueryChange: {
      description:
        '`onQueryChange` — fires on every input change (empty query after select/clear); providing it enables server-side filtering mode (client-side filtering is skipped)',
      control: false,
    },
    isLoading: {
      description:
        '`isLoading` — shows a spinner in the dropdown and hides the empty state',
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
    items: ITEMS,
    required: true,
  },
}

export const Optional: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Type to search or add new',
    items: ITEMS,
  },
}

export const OptionalNoOptionalLabel: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Type to search or add new',
    items: ITEMS,
    showOptionalLabel: false,
  },
}

export const Small: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Type to search or add new',
    items: ITEMS,
    size: 'small',
    required: true,
  },
}

export const Multiple: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Type to search or add new',
    items: ITEMS,
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
    items: ITEMS,
    errorMessage: 'Error Message',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Type to search or add new',
    items: ITEMS,
    required: true,
    disabled: true,
  },
}

export const Creatable: Story = {
  args: {
    label: 'Label',
    caption: 'Caption',
    placeholder: 'Type to search or add new',
    items: ITEMS,
    creatable: true,
    required: true,
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<string[]>(['option-2'])
    return (
      <div style={{ width: '18.125rem' }}>
        <Combobox
          label='Label'
          caption='Caption'
          placeholder='Type to search or add new'
          items={ITEMS}
          value={value}
          onChange={setValue}
          required
          {...args}
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
    items: SPANISH_ITEMS,
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
 * Server-side filtering backed by the JSONPlaceholder API. The consumer owns
 * the fetch and the debounce: `onQueryChange` reports every keystroke, the
 * debounced effect "refetches" (filters the fetched user list) and passes the
 * matching users back through the reactive `items` prop. While the request is
 * in flight, `isLoading` shows a spinner in the dropdown.
 */
const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/users'

export const AsyncServerFiltering: Story = {
  render: (args) => {
    const [items, setItems] = useState<ComboboxItem[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [query, setQuery] = useState('')

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        let cancelled = false
        setIsLoading(true)

        fetch(JSON_PLACEHOLDER_URL)
          .then((response) => response.json())
          .then((users: { id: number; name: string }[]) => {
            if (cancelled) return
            const filtered = users.filter((user) =>
              user.name.toLowerCase().includes(query.toLowerCase()),
            )
            setItems(
              filtered.map((user) => ({
                label: user.name,
                value: String(user.id),
              })),
            )
          })
          .finally(() => {
            if (!cancelled) setIsLoading(false)
          })

        return () => {
          cancelled = true
        }
      }, 300)

      return () => clearTimeout(timeoutId)
    }, [query])

    return (
      <Combobox
        items={items}
        isLoading={isLoading}
        onQueryChange={setQuery}
        label='Server-side filtering'
        caption='Users fetched from JSONPlaceholder — type to filter'
        placeholder='Type to search users'
        showSelectedItems
        multiple
        {...args}
      />
    )
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
    items: SPANISH_ITEMS,
  },
}
