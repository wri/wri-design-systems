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

| Prop                 | Type                                                   | Default | Description                                                                                                                                |
| -------------------- | ------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `caption`            | `string`                                               | —       | Helper text rendered below the label                                                                                                       |
| `checkboxes`         | `CheckboxProps[]`                                      | —       | Checkbox items rendered in the list, each following the `Checkbox` component props                                                         |
| `defaultValues`      | `string[]`                                             | `[]`    | Names of checkboxes initially checked when the item has no explicit `checked` prop                                                         |
| `errorMessage`       | `string`                                               | —       | Error message rendered below the list and included in the group aria-label                                                                 |
| `hideCheckedCounter` | `boolean`                                              | `false` | Hides the "checked / total" counter next to the parent checkbox label                                                                      |
| `hideExpandToggle`   | `boolean`                                              | `false` | Hides the expand/collapse toggle shown next to the parent checkbox label                                                                   |
| `horizontal`         | `boolean`                                              | —       | Lays out the checkboxes in a horizontal row instead of a vertical column                                                                   |
| `label`              | `CheckboxListLabel`                                    | —       | Group label; pass an object with `type: 'checkbox'` to render a parent select-all checkbox with expand/collapse toggle and checked counter |
| `labels`             | `Partial<CheckboxListLabels>`                          | —       | Override internal UI labels for internationalization support                                                                               |
| `onCheckedChange`    | `(checkedValues: { [name: string]: boolean }) => void` | —       | Called with a map of checkbox names to checked state whenever the selection changes                                                        |
| `required`           | `boolean`                                              | —       | Marks the field as required and shows the required indicator                                                                               |
| `showOptionalLabel`  | `boolean`                                              | `false` | Shows the "(optional)" suffix for non-required fields                                                                                      |

### Supporting types

```ts
type CheckboxListLabel =
  | string
  | { type: 'checkbox'; label: string; name: string }

type CheckboxListLabels = {
  expandLabel: ReactNodeLabel // Default: "Expand"
  hideLabel: ReactNodeLabel // Default: "Hide"
  requiredLabel: string // Default: "Required."
  optionalLabel: string // Default: "Optional"
  errorPrefix: string // Default: "Error:"
  requiredSymbolLabel: string // Default: "required"
}
```

- `CheckboxProps` — item props from `Forms/Controls/Checkbox`: `name`, `value`, `checked`, `defaultChecked`, `disabled`, `indeterminate`, `onCheckedChange`, plus the checkbox content children

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
    optionalLabel: 'opcional',
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
;<DesignSystemLocaleProvider
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
