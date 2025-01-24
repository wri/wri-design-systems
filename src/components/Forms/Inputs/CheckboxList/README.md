# CheckboxList

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-inputs-checkbox-list--docs)

[CheckboxListDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Inputs/CheckboxList/CheckboxListDemo.tsx)

## Import

```tsx
import { CheckboxList } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<CheckboxList
  label='Label'
  caption='Caption'
  checkboxes={[
    {
      children: 'Checkbox 1',
      name: 'checkbox-1',
      value: 'checkbox-1',
    },
    {
      children: 'Checkbox 2',
      name: 'checkbox-2',
      value: 'checkbox-2',
    },
    {
      children: 'Checkbox 3',
      name: 'checkbox-3',
      value: 'checkbox-3',
    },
  ]}
  required
/>
```

## Props

```ts
type CheckboxListProps = {
  label: string
  caption?: string
  checkboxes: CheckboxProps[]
  defaultValue?: string
  onCheckedChange?: (checkedValues: { [name: string]: boolean }) => void
  errorMessage?: string
  horizontal?: boolean
  required?: boolean
}
```

## With Default Value

```tsx
<CheckboxList
  label='Label'
  caption='Caption'
  defaultValue='checkbox-2'
  checkboxes={[
    {
      children: 'Checkbox 1',
      name: 'checkbox-1',
      value: 'checkbox-1',
    },
    {
      children: 'Checkbox 2',
      name: 'checkbox-2',
      value: 'checkbox-2',
    },
    {
      children: 'Checkbox 3',
      name: 'checkbox-3',
      value: 'checkbox-3',
    },
  ]}
  required
/>
```

## Horizontal

```tsx
<CheckboxList
  label='Label'
  caption='Caption'
  checkboxes={[
    {
      children: 'Checkbox 1',
      name: 'checkbox-1',
      value: 'checkbox-1',
    },
    {
      children: 'Checkbox 2',
      name: 'checkbox-2',
      value: 'checkbox-2',
    },
    {
      children: 'Checkbox 3',
      name: 'checkbox-3',
      value: 'checkbox-3',
    },
  ]}
  horizontal
  required
/>
```

## With Error Message

```tsx
<CheckboxList
  label='Label'
  caption='Caption'
  errorMessage='Error Message'
  checkboxes={[
    {
      children: 'Checkbox 1',
      name: 'checkbox-1',
      value: 'checkbox-1',
    },
    {
      children: 'Checkbox 2',
      name: 'checkbox-2',
      value: 'checkbox-2',
    },
    {
      children: 'Checkbox 3',
      name: 'checkbox-3',
      value: 'checkbox-3',
    },
  ]}
  required
/>
```
