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

| Prop                | Type                         | Default     | Description                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------- | ---------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `caption`           | `string`                     | —           | Helper text rendered below the label                                                                                                                                                                                                                                                                                                                                                                                        |
| `creatable`         | `boolean`                    | `false`     | Whether the user can create options that do not exist in the item list. When `true`, typing a non-matching value shows a "Create …" row that adds the entry to the list on selection                                                                                                                                                                                                                                        |
| `defaultValue`      | `string[]`                   | `[]`        | Initial selected values for uncontrolled usage                                                                                                                                                                                                                                                                                                                                                                              |
| `disabled`          | `boolean`                    | —           | Disables the input and the dropdown                                                                                                                                                                                                                                                                                                                                                                                         |
| `errorMessage`      | `string`                     | —           | Error message rendered below the input                                                                                                                                                                                                                                                                                                                                                                                      |
| `initialItems`      | `ComboboxItem[]`             | `[]`        | Legacy dropdown options, read only on mount when `items` is omitted. Pass the options through `items` instead                                                                                                                                                                                                                                                                                                               |
| `isLoading`         | `boolean`                    | `false`     | Shows a loading spinner inside the dropdown and hides the "No items found" empty state. Intended for server-side filtering mode while a request triggered by `onQueryChange` is in flight                                                                                                                                                                                                                                   |
| `items`             | `ComboboxItem[]`             | `[]`        | Dropdown options for both static lists and dynamically updated results. Changes to the list contents replace the dropdown options                                                                                                                                                                                                                                                                                           |
| `label`             | `string`                     | —           | Field label rendered above the input                                                                                                                                                                                                                                                                                                                                                                                        |
| `labels`            | `Partial<ComboboxLabels>`    | —           | Override internal UI labels for internationalization support                                                                                                                                                                                                                                                                                                                                                                |
| `multiple`          | `boolean`                    | `false`     | Allows selecting multiple options; pair with `showSelectedItems` to show them as removable tags                                                                                                                                                                                                                                                                                                                             |
| `noMarginBottom`    | `boolean`                    | —           | Removes the bottom margin below the field                                                                                                                                                                                                                                                                                                                                                                                   |
| `onChange`          | `(values: string[]) => void` | —           | Called with the selected values whenever the selection changes                                                                                                                                                                                                                                                                                                                                                              |
| `onQueryChange`     | `(query: string) => void`    | —           | Called with the current input text on every change, including the empty string when the input resets after a selection or clear (use it to restore the full list). Providing this callback enables server-side filtering mode: the built-in client-side filtering is skipped and the rendered list is whatever `items` currently contains, so the consumer can fetch matching items and pass them back via the `items` prop |
| `placeholder`       | `string`                     | —           | Placeholder text shown when no option is selected                                                                                                                                                                                                                                                                                                                                                                           |
| `required`          | `boolean`                    | —           | Marks the field as required and shows the required indicator                                                                                                                                                                                                                                                                                                                                                                |
| `showOptionalLabel` | `boolean`                    | `false`     | Shows the "(optional)" suffix for non-required fields                                                                                                                                                                                                                                                                                                                                                                       |
| `showSelectedItems` | `boolean`                    | `false`     | Shows the selected values as removable tags under the input                                                                                                                                                                                                                                                                                                                                                                 |
| `size`              | `'small' \| 'default'`       | `'default'` | Controls the input size                                                                                                                                                                                                                                                                                                                                                                                                     |
| `value`             | `string[]`                   | —           | Controlled selected values. When provided, the component is fully controlled — pair with `onChange`                                                                                                                                                                                                                                                                                                                         |

### Supporting types

```ts
type ComboboxItem = { label: string; value: string }

type ComboboxLabels = {
  requiredSymbolLabel: string // Default: "required"
  optionalSuffix: ReactNodeLabel // Default: "(optional)"
  defaultInputAriaLabel: string // Default: "Combobox input"
  clearSelectionLabel: string // Default: "Clear selection"
  toggleOptionsLabel: string // Default: "Toggle options"
  noItemsFoundLabel: ReactNodeLabel // Default: "No items found"
  createOptionLabel: (inputValue: string) => ReactNodeLabel // Default: (inputValue) => `Create “${inputValue}”`
  loadingLabel: ReactNodeLabel // Default: "Loading"
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

## Optional Label

```tsx
<Combobox
  label='Label'
  caption='Caption'
  placeholder='Search...'
  items={[{ label: 'Option 1', value: 'option-1' }]}
  showOptionalLabel
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
    optionalSuffix: '(opcional)',
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
      optionalSuffix: '(optionnel)',
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
