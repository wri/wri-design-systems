# Radio

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-controls-radio-button--docs)

[RadioDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Controls/Radio/RadioDemo.tsx)

## Import

```tsx
import { RadioGroup, Radio } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<RadioGroup name='radio-group-1'>
  <Radio value='1'>One</Radio>
</RadioGroup>
```

## Props

### Radio

| Prop       | Type              | Default | Description                                    |
| ---------- | ----------------- | ------- | ---------------------------------------------- |
| `children` | `React.ReactNode` | —       | Label text rendered next to the radio          |
| `disabled` | `boolean`         | —       | Disables the radio and applies disabled styles |
| `value`    | `string`          | —       | Value submitted for the radio when selected    |

### RadioGroup

| Prop         | Type                                            | Default                                           | Description                                                                        |
| ------------ | ----------------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `children`   | `React.ReactNode`                               | —                                                 | Radio items to render inside the group                                             |
| `customGap`  | `string`                                        | `1.25rem` when horizontal, `0.5rem` when vertical | Custom gap between items                                                           |
| `horizontal` | `boolean`                                       | `false`                                           | Lays the radios out in a row instead of a column                                   |
| `name`       | `string`                                        | —                                                 | Name of the radio group, also passed to the onChange callback                      |
| `onChange`   | `(name: string, selectedValue: string) => void` | —                                                 | Called with the group name and the newly selected value when the selection changes |
| `value`      | `string`                                        | `''`                                              | Currently selected value (controlled)                                              |

## Default Checked

```tsx
<RadioGroup name='radio-group' value='2'>
  <Radio value='1'>One</Radio>
  <Radio value='2'>Two</Radio>
  <Radio value='3'>Three</Radio>
</RadioGroup>
```

## Disabled

```tsx
<RadioGroup name='radio-group' value='2'>
  <Radio value='1'>One</Radio>
  <Radio value='2' disabled>
    Two
  </Radio>
  <Radio value='3'>Three</Radio>
</RadioGroup>
```

## Radio Groups Row

```tsx
<RadioGroup name='radio-group' horizontal>
  <Radio value='1'>One</Radio>
  <Radio value='2'>Two</Radio>
  <Radio value='3'>Three</Radio>
</RadioGroup>
```
