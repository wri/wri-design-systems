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
  initialItems={[
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
}

type ComboboxProps = {
  initialItems?: { label: string; value: string }[]
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
  clearInputOnSelect?: boolean
}
```

## Optional

```tsx
<Combobox
  label='Label'
  caption='Caption'
  placeholder='Search...'
  initialItems={[{ label: 'Option 1', value: 'option-1' }]}
/>
```

## Small

```tsx
<Combobox
  label='Label'
  caption='Caption'
  placeholder='Search...'
  initialItems={[{ label: 'Option 1', value: 'option-1' }]}
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
  initialItems={[
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
  initialItems={[{ label: 'Option 1', value: 'option-1' }]}
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
  initialItems={[{ label: 'Option 1', value: 'option-1' }]}
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
  initialItems={[{ label: 'Option 1', value: 'option-1' }]}
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
  initialItems={[{ label: 'Option 1', value: 'option-1' }]}
  value={value}
  onChange={setValue}
  required
/>
```

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
  initialItems={[{ label: 'Opción 1', value: 'opcion-1' }]}
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
