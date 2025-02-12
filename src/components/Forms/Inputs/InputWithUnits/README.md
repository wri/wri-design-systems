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

```ts
type InputWithUnitsProps = {
  label: string
  caption?: string
  errorMessage?: string
  units: { label: string; value: string }[]
  unitsPosition?: 'start' | 'end'
  defaultValue?: string
  defaultUnit?: string
  onChange?: (value: string) => void
  required?: boolean
  disabled?: boolean
}
```

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
