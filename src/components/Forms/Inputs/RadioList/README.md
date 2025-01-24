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

## Props

```ts
type RadioListProps = {
  label: string
  caption?: string
  name: string
  radios: RadioProps[]
  defaultValue?: string
  onCheckedChange?: (name: string, selectedValue: string) => void
  errorMessage?: string
  horizontal?: boolean
  required?: boolean
}
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
  errorMessage='Error Message'
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
