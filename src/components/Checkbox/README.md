# Checkbox

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/controls-checkbox--docs)

## Import

```js
import { Checkbox } from 'wri-design-systems'
```

## Usage

```html
<Checkbox
  label='Checkbox'
  name='Checkbox'
  value='1'
/>
```

## Props

```ts
type CheckboxProps = Omit<
  ChakraCheckboxProps,
  | 'size'
  | 'variant'
  | 'colorScheme'
  | 'icon'
  | 'iconColor'
  | 'iconSize'
  | 'spacing'
> & {
  label?: string
  name: string
  value: string
  defaultChecked?: boolean
  isChecked?: boolean
  isDisabled?: boolean
  isIndeterminate?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
```

## Default Checked

```html
<Checkbox
  label='Checkbox'
  name='Checkbox'
  value='1'
  defaultChecked
/>
```

## Disabled

```html
<Checkbox
  label='Checkbox'
  name='Checkbox'
  value='1'
  isDisabled
/>
```

## Invalid

```html
<Checkbox
  label='Checkbox'
  name='Checkbox'
  value='1'
  isInvalid
/>
```

## Indeterminate

You will need to add some logic to validate all checked status and set or not an indeterminate state to the parent Checkbox

```js
const [checkedItems, setCheckedItems] = React.useState([false, false])

const allChecked = checkedItems.every(Boolean)
const isIndeterminate = checkedItems.some(Boolean) && !allChecked

....
```

```html
<Checkbox
  label='Checkbox'
  name='Checkbox'
  value='1'
  isChecked={allChecked}
  isIndeterminate={isIndeterminate}
/>
```
