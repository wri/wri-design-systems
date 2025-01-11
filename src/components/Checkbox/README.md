# Checkbox

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-controls-checkbox--docs)

[CheckboxDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Checkbox/CheckboxDemo.tsx)

## Import

```js
import { Checkbox } from '@worldresources/wri-design-systems'
```

## Usage

```html
<Checkbox name="Checkbox" value="1"> Checkbox </Checkbox>
```

## Props

```ts
type CheckboxProps = Omit<
  ChakraCheckbox.RootProps,
  | 'size'
  | 'variant'
  | 'colorScheme'
  | 'icon'
  | 'iconColor'
  | 'iconSize'
  | 'spacing'
> & {
  name?: string
  value?: string
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  onCheckedChange?: ({ checked }: { checked: boolean }) => void
}
```

## Default Checked

```html
<Checkbox name="Checkbox" value="1" defaultChecked> Checkbox </Checkbox>
```

## Disabled

```html
<Checkbox name="Checkbox" value="1" disabled> Checkbox </Checkbox>
```

## Indeterminate

You will need to add some logic to validate all checked status and set or not an indeterminate state to the parent Checkbox. Check more in `CheckboxDemo.tsx`

```js
const [values, setValues] = useState(initialValues)

const allChecked = values.every((value) => value.checked)
const indeterminate = values.some((value) => value.checked) && !allChecked

....
```

```html
<Checkbox ms="6" checked="{checked}" onCheckedChange="{(e)" ="">
  { setValues((current) => { const newValues = [...current] newValues[index] = {
  ...newValues[index], checked: !!e.checked } return newValues }) }} > Item
  Checkbox
</Checkbox>
```

```html
<Checkbox
  checked="{allChecked}"
  indeterminate="{indeterminate}"
  onCheckedChange="{(e)"
  =""
>
  { setValues((current) => current.map((value) => ({ ...value, checked:
  !!e.checked })), ) }} > Main Checkbox
</Checkbox>
```
