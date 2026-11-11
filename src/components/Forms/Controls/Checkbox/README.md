# Checkbox

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-controls-checkbox--docs)

[CheckboxDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Controls/Checkbox/CheckboxDemo.tsx)

## Import

```tsx
import { Checkbox } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Checkbox name='Checkbox' value='1'>
  Checkbox
</Checkbox>
```

## Props

| Prop              | Type                                          | Default | Description                                                              |
| ----------------- | --------------------------------------------- | ------- | ------------------------------------------------------------------------ |
| `checked`         | `boolean`                                     | —       | Controlled checked state                                                 |
| `children`        | `React.ReactNode`                             | —       | Label text rendered next to the checkbox                                 |
| `defaultChecked`  | `boolean`                                     | —       | Checked state on first render (uncontrolled)                             |
| `disabled`        | `boolean`                                     | —       | Disables the checkbox and applies disabled styles                        |
| `indeterminate`   | `boolean`                                     | —       | Renders the indeterminate (dash) state and overrides the checked display |
| `name`            | `string`                                      | —       | Name of the form field                                                   |
| `onCheckedChange` | `({ checked }: { checked: boolean }) => void` | —       | Called with the new checked state when the checkbox is toggled           |
| `tabIndex`        | `number`                                      | —       | Tab index applied to the hidden native input                             |
| `value`           | `string`                                      | —       | Value submitted with the form when checked                               |

## Default Checked

```tsx
<Checkbox name='Checkbox' value='1' defaultChecked>
  Checkbox
</Checkbox>
```

## Disabled

```tsx
<Checkbox name='Checkbox' value='1' disabled>
  Checkbox
</Checkbox>
```

## Indeterminate

You will need to add some logic to validate all checked status and set or not an indeterminate state to the parent Checkbox. Check more in `CheckboxDemo.tsx`

```tsx
const [values, setValues] = useState(initialValues)

const allChecked = values.every((value) => value.checked)
const indeterminate = values.some((value) => value.checked) && !allChecked

....

```

```tsx
<Checkbox
  ms='6'
  checked={checked}
  onCheckedChange={(e) => {
    setValues((current) => {
      const newValues = [...current]
      newValues[index] = { ...newValues[index], checked: !!e.checked }
      return newValues
    })
  }}
>
  Item Checkbox
</Checkbox>
```

```tsx
<Checkbox
  checked={allChecked}
  indeterminate={indeterminate}
  onCheckedChange={(e) => {
    setValues((current) =>
      current.map((value) => ({ ...value, checked: !!e.checked })),
    )
  }}
>
  Main Checkbox
</Checkbox>
```
