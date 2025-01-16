# Select

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-inputs-select--docs)

[SelectDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Inputs/Select/SelectDemo.tsx)

## Import

```js
import { Select } from '@worldresources/wri-design-systems'
```

## Usage

```html
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

```ts
type SelectItemProps = {
  label: string
  caption?: string
  value: string
}
```

```ts
type SelectProps = Omit<
  ChakraSelectRootProps,
  | 'collection'
  | 'size'
  | 'colorPalette'
  | 'variant'
  | 'onValueChange'
  | 'onChange'
  | 'defaultChecked'
  | 'invalid'
> & {
  label: string
  caption?: string
  placeholder: string
  items: SelectItemProps[]
  size?: 'default' | 'small'
  required?: boolean
  disabled?: boolean
  onChange?: (value: string[]) => void
  errorMessage?: string
}
```

## Default Select

```html
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

## Small Select

```html
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

```html
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
