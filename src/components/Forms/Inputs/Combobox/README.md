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
    },
  }}
>
  <App />
</DesignSystemLocaleProvider>
```

> **Note:** The component-level `labels` prop always takes precedence over the context provider.
