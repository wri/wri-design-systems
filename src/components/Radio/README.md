# Radio

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/controls-radio--docs)

[RadioDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Radio/RadioDemo.tsx)

## Import

```js
import { RadioGroup, Radio } from 'wri-design-systems'
```

## Usage

```html
<RadioGroup name='radio-group-1'>
  <Radio value='1'>
    One
  </Radio>
</RadioGroup>
```

## Props

```ts
type RadioGroupProps = Omit<
  ChakraRadioGroup.ItemProps,
  'size' | 'variant' | 'colorPalette' | 'value'
> & {
  name: string
  defaultValue?: string
  isRow?: boolean
  onValueChange?: (value: string) => void
}
```

```ts
type RadioProps = Omit<
  ChakraRadioGroup.ItemProps,
  'size' | 'variant' | 'colorPalette' | 'name' | 'defaultChecked'
> & {
  value: string
  disabled?: boolean
}
```

## Default Checked

```html
<RadioGroup
  name='radio-group'
  defaultValue='2'
>
  <Radio value='1'>
    One
  </Radio>
  <Radio value='2'>
    Two
  </Radio>
  <Radio value='3'>
    Three
  </Radio>
</RadioGroup>
```

## Disabled

```html
<RadioGroup
  name='radio-group'
  defaultValue='2'
>
  <Radio value='1'>
    One
  </Radio>
  <Radio value='2' disabled>
    Two
  </Radio>
  <Radio value='3'>
    Three
  </Radio>
</RadioGroup>
```

## Radio Groups Row

```html
<RadioGroup
  name='radio-group'
  isRow
>
  <Radio value='1'>
    One
  </Radio>
  <Radio value='2'>
    Two
  </Radio>
  <Radio value='3'>
    Three
  </Radio>
</RadioGroup>
```
