# Combobox

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-inputs-combobox--docs)

[ComboboxDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Inputs/Combobox/ComboboxDemo.tsx)

## Import

```tsx
import { Combobox } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Combobox
  label='Label'
  caption='Caption'
  placeholder='Search...'
  items={[
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
  ]}
  required
/>
```

## Props

```ts
type ComboboxLabels = {
  requiredSymbolLabel: string
  optionalSuffix: ReactNodeLabel
  defaultInputAriaLabel: string
  clearSelectionLabel: string
  toggleOptionsLabel: string
  noItemsFoundLabel: ReactNodeLabel
  createOptionLabel: (inputValue: string) => ReactNodeLabel
  loadingLabel: ReactNodeLabel
}

type ComboboxProps = {
  items?: { label: string; value: string }[]
  label?: string
  required?: boolean
  caption?: string
  errorMessage?: string
  size?: 'small' | 'default'
  disabled?: boolean
  showOptionalLabel?: boolean
  placeholder?: string
  labels?: Partial<ComboboxLabels>
  noMarginBottom?: boolean
  multiple?: boolean
  showSelectedItems?: boolean
  value?: string[]
  defaultValue?: string[]
  onChange?: (values: string[]) => void
  creatable?: boolean
  onQueryChange?: (query: string) => void
  isLoading?: boolean
}
```

## Optional

```tsx
<Combobox
  label='Label'
  caption='Caption'
  placeholder='Search...'
  items={[{ label: 'Option 1', value: 'option-1' }]}
/>
```

## Small

```tsx
<Combobox
  label='Label'
  caption='Caption'
  placeholder='Search...'
  items={[{ label: 'Option 1', value: 'option-1' }]}
  size='small'
  required
/>
```

## Multiple Selection

```tsx
<Combobox
  label='Label'
  caption='Caption'
  placeholder='Search...'
  items={[
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
  ]}
  multiple
  showSelectedItems
/>
```

## With Error

```tsx
<Combobox
  label='Label'
  caption='Caption'
  placeholder='Search...'
  items={[{ label: 'Option 1', value: 'option-1' }]}
  errorMessage='Error Message'
  required
/>
```

## Disabled

```tsx
<Combobox
  label='Label'
  caption='Caption'
  placeholder='Search...'
  items={[{ label: 'Option 1', value: 'option-1' }]}
  required
  disabled
/>
```

## Creatable (add new options)

When `creatable` is enabled, typing a value that does not match any option shows
a "Create …" row. Selecting it adds the entry to the list.

```tsx
<Combobox
  label='Label'
  caption='Caption'
  placeholder='Type to add...'
  items={[{ label: 'Option 1', value: 'option-1' }]}
  creatable
  required
/>
```

## Controlled value

Pass `value` + `onChange` to own the selection, or `defaultValue` for
uncontrolled usage.

```tsx
const [value, setValue] = useState<string[]>([])

<Combobox
  label='Label'
  caption='Caption'
  placeholder='Search...'
  items={[{ label: 'Option 1', value: 'option-1' }]}
  value={value}
  onChange={setValue}
  required
/>
```

## Server-side filtering (async)

For large datasets (e.g. 500+ sites) the list can be filtered by an API instead
of client-side. Provide `onQueryChange` to enable server-side filtering mode:

- `onQueryChange(query)` fires on every input change — including an empty
  query when the input resets after a selection or clear, which is your signal
  to restore the full list. The component does **not**
  debounce; the consumer owns debouncing, aborting and error handling.
- Client-side filtering is **skipped** — the dropdown renders whatever `items`
  currently contains, so pass the fetched results back through the reactive
  `items` prop.
- `isLoading` shows a spinner inside the dropdown and hides the "No items
  found" empty state while a request is in flight.
- Selected tags keep their labels even when a later query replaces the items
  list.

```tsx
const [items, setItems] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [query, setQuery] = useState('')

// Consumer-owned debounce
useEffect(() => {
  const timeoutId = setTimeout(() => {
    fetch(`/api/sites?name_like=${encodeURIComponent(query)}`)
      .then((response) => response.json())
      .then((data) =>
        setItems(data.map((site) => ({ label: site.name, value: site.id }))),
      )
      .finally(() => setIsLoading(false))
  }, 300)

  return () => clearTimeout(timeoutId)
}, [query])

<Combobox
  label='Site'
  placeholder='Type to search sites'
  items={items}
  isLoading={isLoading}
  onQueryChange={setQuery}
  showSelectedItems
/>
```

> **Note:** `items` is the reactive list — whenever it changes, the dropdown
> contents are replaced.

## Internationalization (i18n)

The component ships with English defaults for all internal UI strings. Override any or all of them via the `labels` prop, or set them app-wide using `DesignSystemLocaleProvider`.

### Per-component override

```tsx
<Combobox
  label='Categoría'
  labels={{
    requiredSymbolLabel: 'obligatorio',
    optionalSuffix: ' (Opcional)',
    defaultInputAriaLabel: 'Entrada de lista',
    clearSelectionLabel: 'Borrar selección',
    toggleOptionsLabel: 'Alternar opciones',
    noItemsFoundLabel: 'Sin resultados',
    createOptionLabel: (inputValue) => `Crear “${inputValue}”`,
  }}
  items={[{ label: 'Opción 1', value: 'opcion-1' }]}
/>
```

### App-wide via context

```tsx
import { DesignSystemLocaleProvider } from '@worldresources/wri-design-systems'
;<DesignSystemLocaleProvider
  labels={{
    Combobox: {
      requiredSymbolLabel: 'obligatoire',
      optionalSuffix: ' (Optionnel)',
      defaultInputAriaLabel: 'Champ de sélection',
      clearSelectionLabel: 'Effacer la sélection',
      toggleOptionsLabel: 'Basculer les options',
      noItemsFoundLabel: 'Aucun résultat',
      createOptionLabel: (inputValue) => `Créer « ${inputValue} »`,
    },
  }}
>
  <App />
</DesignSystemLocaleProvider>
```

> **Note:** The component-level `labels` prop always takes precedence over the context provider.
