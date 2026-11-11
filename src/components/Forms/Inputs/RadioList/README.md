# RadioList

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-inputs-radio-list--docs)

[RadioListDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Inputs/RadioList/RadioListDemo.tsx)

## Import

```tsx
import { RadioList } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<RadioList
  label='Label'
  name='radio-list-1'
  radios={[
    { children: 'Radio 1', value: 'radio-1' },
    { children: 'Radio 2', value: 'radio-2' },
  ]}
/>
```

## Props

| Prop                | Type                                            | Default     | Description                                                                            |
| ------------------- | ----------------------------------------------- | ----------- | -------------------------------------------------------------------------------------- |
| `caption`           | `string`                                        | —           | Helper text rendered below the label                                                   |
| `defaultValue`      | `string`                                        | —           | Initially selected radio value                                                         |
| `errorMessage`      | `string`                                        | —           | Error message rendered below the list and included in the group aria-label             |
| `horizontal`        | `boolean`                                       | —           | Lays out the radios in a horizontal row; ignored in the `card` variant                 |
| `label`             | `string`                                        | —           | Group label rendered above the list                                                    |
| `labels`            | `Partial<RadioListLabels>`                      | —           | Override internal UI labels for internationalization support                           |
| `name`              | `string`                                        | —           | Name applied to the underlying radio group                                             |
| `onCheckedChange`   | `(name: string, selectedValue: string) => void` | —           | Called with the group name and the selected radio value whenever the selection changes |
| `radios`            | `RadioProps[]`                                  | —           | Radio items rendered in the list, each following the `Radio` component props           |
| `required`          | `boolean`                                       | —           | Marks the field as required and shows the required indicator                           |
| `showOptionalLabel` | `boolean`                                       | `false`     | Shows the "(optional)" suffix for non-required fields                                  |
| `variant`           | `'default' \| 'card'`                           | `'default'` | Visual style of the radio items; `card` renders bordered cards                         |

### Supporting types

```ts
type RadioListLabels = {
  requiredLabel: string // Default: "Required."
  optionalLabel: string // Default: "Optional."
  errorPrefix: string // Default: "Error:"
  requiredSymbolLabel: string // Default: "required"
}
```

- `RadioProps` — item props from `Forms/Controls/Radio`: `value: string`, `disabled?: boolean`, plus the radio content children

## Default

```tsx
<RadioList
  label='Label'
  caption='Caption'
  name='radio-list-1'
  radios={[
    {
      children: 'Radio 1',
      value: 'radio-1',
    },
    {
      children: 'Radio 2',
      value: 'radio-2',
    },
    {
      children: 'Radio 3',
      value: 'radio-3',
    },
  ]}
  required
/>
```

## With Default Value

```tsx
<RadioList
  label='Label'
  caption='Caption'
  name='radio-list-1'
  defaultValue='radio-2'
  radios={[
    {
      children: 'Radio 1',
      value: 'radio-1',
    },
    {
      children: 'Radio 2',
      value: 'radio-2',
    },
    {
      children: 'Radio 3',
      value: 'radio-3',
    },
  ]}
  required
/>
```

## Horizontal

```tsx
<RadioList
  label='Label'
  caption='Caption'
  name='radio-list-3'
  radios={[
    {
      children: 'Radio 1',
      value: 'radio-1',
    },
    {
      children: 'Radio 2',
      value: 'radio-2',
    },
    {
      children: 'Radio 3',
      value: 'radio-3',
    },
  ]}
  horizontal
  required
/>
```

## With Error Message

```tsx
<RadioList
  label='Label'
  caption='Caption'
  name='radio-list-2'
  defaultValue='radio-2'
  radios={[
    {
      children: 'Radio 1',
      value: 'radio-1',
    },
    {
      children: 'Radio 2',
      value: 'radio-2',
    },
    {
      children: 'Radio 3',
      value: 'radio-3',
    },
  ]}
  errorMessage='Error Message'
  required
/>
```

## Card Variant

```tsx
<RadioList
  label='Label'
  caption='Caption'
  name='radio-list-2'
  defaultValue='radio-2'
  radios={[
    {
      children: 'Radio 1',
      value: 'radio-1',
    },
    {
      children: 'Radio 2',
      value: 'radio-2',
    },
    {
      children: 'Radio 3',
      value: 'radio-3',
    },
  ]}
  variant='card'
  required
/>
```

## Card Variant With Error Message

```tsx
<RadioList
  label='Label'
  caption='Caption'
  name='radio-list-2'
  defaultValue='radio-2'
  radios={[
    {
      children: 'Radio 1',
      value: 'radio-1',
    },
    {
      children: 'Radio 2',
      value: 'radio-2',
    },
    {
      children: 'Radio 3',
      value: 'radio-3',
    },
  ]}
  variant='card'
  errorMessage='Error Message'
  required
/>
```
