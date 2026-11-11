# InputWithUnits

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-inputs-input-with-units--docs)

[InputWithUnitsDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Inputs/InputWithUnits/InputWithUnitsDemo.tsx)

## Import

```tsx
import { InputWithUnits } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<InputWithUnits
  label='Label'
  caption='Caption'
  units={[
    {
      label: 'Unit 1',
      value: 'unit-1',
    },
    {
      label: 'Unit 2',
      value: 'unit-2',
    },
    {
      label: 'Unit 3',
      value: 'unit-3',
    },
  ]}
  required
/>
```

## Props

| Prop                | Type                                 | Default | Description                                                                       |
| ------------------- | ------------------------------------ | ------- | --------------------------------------------------------------------------------- |
| `caption`           | `string`                             | —       | Helper text rendered below the label                                              |
| `defaultUnit`       | `string`                             | `''`    | Initially selected unit value; when empty the first unit is used                  |
| `defaultValue`      | `string`                             | `''`    | Initial value for the value input                                                 |
| `disabled`          | `boolean`                            | —       | Disables both the value input and the unit select                                 |
| `errorMessage`      | `string`                             | —       | Error message rendered below the input                                            |
| `label`             | `string`                             | —       | Field label rendered above the input                                              |
| `onChange`          | `(value: string) => void`            | —       | Called with the combined value and unit string whenever the value or unit changes |
| `required`          | `boolean`                            | —       | Marks the field as required and shows the required indicator                      |
| `showOptionalLabel` | `boolean`                            | `false` | Shows the "(optional)" suffix for non-required fields                             |
| `units`             | `{ label: string; value: string }[]` | —       | Unit options shown in the attached unit select, each with a label and value       |
| `unitsPosition`     | `'start' \| 'end'`                   | `'end'` | Positions the unit select before (`start`) or after (`end`) the value input       |

## With Units Right

```tsx
<InputWithUnits
  label='Label'
  caption='Caption'
  units={[
    {
      label: 'Unit 1',
      value: 'unit-1',
    },
    {
      label: 'Unit 2',
      value: 'unit-2',
    },
    {
      label: 'Unit 3',
      value: 'unit-3',
    },
  ]}
  required
/>
```

## With Units Left

```tsx
<InputWithUnits
  label='Label'
  caption='Caption'
  units={[
    {
      label: 'Unit 1',
      value: 'unit-1',
    },
    {
      label: 'Unit 2',
      value: 'unit-2',
    },
    {
      label: 'Unit 3',
      value: 'unit-3',
    },
  ]}
  unitsPosition='start'
  required
/>
```

## With Default Value and Default Unit

```tsx
<InputWithUnits
  label='Label'
  caption='Caption'
  units={[
    {
      label: 'Unit 1',
      value: 'unit-1',
    },
    {
      label: 'Unit 2',
      value: 'unit-2',
    },
    {
      label: 'Unit 3',
      value: 'unit-3',
    },
  ]}
  defaultValue='123'
  defaultUnit='unit-2'
  required
/>
```

## With Error Message

```tsx
<InputWithUnits
  label='Label'
  caption='Caption'
  units={[
    {
      label: 'Unit 1',
      value: 'unit-1',
    },
    {
      label: 'Unit 2',
      value: 'unit-2',
    },
    {
      label: 'Unit 3',
      value: 'unit-3',
    },
  ]}
  defaultValue='123'
  defaultUnit='unit-2'
  errorMessage='Error Message'
  required
/>
```

## Disabled

```tsx
<InputWithUnits
  label='Label'
  caption='Caption'
  units={[
    {
      label: 'Unit 1',
      value: 'unit-1',
    },
    {
      label: 'Unit 2',
      value: 'unit-2',
    },
    {
      label: 'Unit 3',
      value: 'unit-3',
    },
  ]}
  disabled
  required
/>
```
