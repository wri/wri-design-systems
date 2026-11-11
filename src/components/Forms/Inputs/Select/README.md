# Select

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-inputs-select--docs)

[SelectDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Inputs/Select/SelectDemo.tsx)

## Import

```tsx
import { Select } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Select
  label='Label'
  caption='Caption'
  placeholder='Please select'
  defaultValue={['value-2']}
  items={[
    {
      label: 'Label 1',
      caption: 'Caption 1',
      value: 'value-1',
    },
    {
      label: 'Label 2',
      caption: 'Caption 2',
      value: 'value-2',
    },
    {
      label: 'Label 3',
      caption: 'Caption 3',
      value: 'value-3',
    },
  ]}
  required
/>
```

## Props

| Prop                | Type                        | Default     | Description                                                                        |
| ------------------- | --------------------------- | ----------- | ---------------------------------------------------------------------------------- |
| `caption`           | `string`                    | —           | Helper text rendered below the label                                               |
| `defaultValue`      | `string[]`                  | `[]`        | Initially selected item values for uncontrolled usage                              |
| `disabled`          | `boolean`                   | —           | Disables the trigger and dropdown                                                  |
| `errorMessage`      | `string`                    | —           | Error message rendered below the trigger                                           |
| `items`             | `SelectItemProps[]`         | —           | Options shown in the dropdown, each with a `label`, optional `caption` and `value` |
| `label`             | `string`                    | —           | Field label rendered above the trigger                                             |
| `labels`            | `Partial<SelectLabels>`     | —           | Override internal UI labels for internationalization support                       |
| `multiple`          | `boolean`                   | —           | Allows selecting multiple options, shown as removable tags in the trigger          |
| `onChange`          | `(value: string[]) => void` | —           | Called with the selected item values whenever the selection changes                |
| `placeholder`       | `string`                    | `''`        | Text shown in the trigger when no value is selected                                |
| `required`          | `boolean`                   | —           | Marks the field as required and shows the required indicator                       |
| `showOptionalLabel` | `boolean`                   | `false`     | Shows the "(optional)" suffix for non-required fields                              |
| `size`              | `'default' \| 'small'`      | `'default'` | Controls the trigger and dropdown size                                             |

### Supporting types

```ts
type SelectItemProps = { label: string; caption?: string; value: string }

type SelectLabels = {
  defaultAriaLabel: string // Default: "Select input"
  requiredSuffix: string // Default: " required."
  disabledSuffix: string // Default: " Disabled."
}
```

## Default Select

```tsx
<Select
  label='Label'
  caption='Caption'
  placeholder='Please select'
  defaultValue={['value-2']}
  items={[
    {
      label: 'Label 1',
      caption: 'Caption 1',
      value: 'value-1',
    },
    {
      label: 'Label 2',
      caption: 'Caption 2',
      value: 'value-2',
    },
    {
      label: 'Label 3',
      caption: 'Caption 3',
      value: 'value-3',
    },
  ]}
  required
/>
```

## Multi Select

```tsx
<Select
  label='Label'
  caption='Caption'
  placeholder='Please select'
  defaultValue={['value-2', 'value-3']}
  items={[
    {
      label: 'Label 1',
      caption: 'Caption 1',
      value: 'value-1',
    },
    {
      label: 'Label 2',
      caption: 'Caption 2',
      value: 'value-2',
    },
    {
      label: 'Label 3',
      caption: 'Caption 3',
      value: 'value-3',
    },
  ]}
  required
  multiple
/>
```

## Small Select

```tsx
<Select
  label='Label'
  caption='Caption'
  placeholder='Please select'
  size='small'
  items={[
    {
      label: 'Label 1',
      caption: 'Caption 1',
      value: 'value-1',
    },
    {
      label: 'Label 2',
      caption: 'Caption 2',
      value: 'value-2',
    },
    {
      label: 'Label 3',
      caption: 'Caption 3',
      value: 'value-3',
    },
  ]}
  required
/>
```

## Error Message

```tsx
<Select
  label='Label'
  caption='Caption'
  placeholder='Please select'
  items={[
    {
      label: 'Label 1',
      caption: 'Caption 1',
      value: 'value-1',
    },
    {
      label: 'Label 2',
      caption: 'Caption 2',
      value: 'value-2',
    },
    {
      label: 'Label 3',
      caption: 'Caption 3',
      value: 'value-3',
    },
  ]}
  errorMessage='Error Message'
  required
/>
```
