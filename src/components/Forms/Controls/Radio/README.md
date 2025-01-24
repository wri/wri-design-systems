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

```ts
type RadioGroupProps = Omit<
  ChakraRadioGroup.ItemProps,
  'size' | 'variant' | 'colorPalette' | 'value' | 'onChange'
> & {
  name: string
  defaultValue?: string
  horizontal?: boolean
  onChange?: (name: string, selectedValue: string) => void
  customGap?: string
}
```

```ts
type RadioProps = Omit<
  ChakraRadioGroup.ItemProps,
  'size' | 'variant' | 'colorPalette' | 'name' | 'defaultChecked' | 'onChange'
> & {
  value: string
  disabled?: boolean
}
```

## Default Checked

```tsx
<RadioGroup name='radio-group' defaultValue='2'>
  <Radio value='1'>One</Radio>
  <Radio value='2'>Two</Radio>
  <Radio value='3'>Three</Radio>
</RadioGroup>
```

## Disabled

```tsx
<RadioGroup name='radio-group' defaultValue='2'>
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
