# CheckboxList

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-inputs-checkbox-list--docs)

[CheckboxListDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Inputs/CheckboxList/CheckboxListDemo.tsx)

## Import

```tsx
import { CheckboxList } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<CheckboxList
  label='Label'
  caption='Caption'
  checkboxes={[
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
  ]}
  required
/>
```

## Props

```ts
export type CheckboxListLabel =
  | string
  | {
      type: 'checkbox'
      label: string
      name: string
    }

export type CheckboxListProps = {
  label: CheckboxListLabel
  caption?: string
  checkboxes: CheckboxProps[]
  defaultValues?: string[]
  onCheckedChange?: (checkedValues: { [name: string]: boolean }) => void
  errorMessage?: string
  horizontal?: boolean
  required?: boolean
  hideCheckedCounter?: boolean
  hideExpandToggle?: boolean
  labels?: Partial<CheckboxListLabels>
}

// CheckboxListLabels — all keys are optional when using Partial<>
export type CheckboxListLabels = {
  expandLabel: string        // Default: 'Expand'
  hideLabel: string          // Default: 'Hide'
  requiredLabel: string      // Default: 'Required.'
  optionalLabel: string      // Default: 'Optional'
  errorPrefix: string        // Default: 'Error:'
  requiredSymbolLabel: string // Default: 'required'
}
```

## With Default Value

```tsx
<CheckboxList
  label='Label'
  caption='Caption'
  defaultValues={['checkbox-2']}
  checkboxes={[
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
  ]}
  required
/>
```

## Horizontal

```tsx
<CheckboxList
  label='Label'
  caption='Caption'
  checkboxes={[
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
  ]}
  horizontal
  required
/>
```

## With Error Message

```tsx
<CheckboxList
  label='Label'
  caption='Caption'
  errorMessage='Error Message'
  checkboxes={[
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
  ]}
  required
/>
```

## Internationalization (i18n)

The component ships with English defaults for all internal UI strings. Override any or all of them via the `labels` prop, or set them app-wide using `DesignSystemLocaleProvider`.

### Per-component override

```tsx
<CheckboxList
  label={{ type: 'checkbox', label: 'Opciones', name: 'all' }}
  labels={{
    expandLabel: 'Mostrar',
    hideLabel: 'Ocultar',
    requiredLabel: 'Obligatorio.',
    optionalLabel: 'Opcional',
    errorPrefix: 'Error:',
    requiredSymbolLabel: 'obligatorio',
  }}
  checkboxes={[...]}
  required
/>
```

### App-wide via context

```tsx
import { DesignSystemLocaleProvider } from '@worldresources/wri-design-systems'

<DesignSystemLocaleProvider
  labels={{
    CheckboxList: {
      expandLabel: 'Mostrar',
      hideLabel: 'Ocultar',
    },
  }}
>
  <App />
</DesignSystemLocaleProvider>
```

### With react-intl

```tsx
const intl = useIntl()

<CheckboxList
  labels={{
    expandLabel: intl.formatMessage({ id: 'checkboxList.expand' }),
    hideLabel: intl.formatMessage({ id: 'checkboxList.hide' }),
  }}
  checkboxes={[...]}
/>
```

> **Note:** The component-level `labels` prop always takes precedence over the context provider.

