# SliderInput

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-inputs-slider-input--docs)

[SliderInputDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Inputs/SliderInputDemo.tsx)

## Import

```tsx
import { SliderInput } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<SliderInput
  label='Continuous'
  caption='Caption'
  sliderItem={{
    min: 0,
    max: 100,
    defaultValue: [30],
  }}
  onChange={(value) => console.log('Continuous', value)}
  required
/>
```

## Props

```ts
type SliderInputProps = {
  label: string
  caption?: string
  size?: 'default' | 'small'
  sliderItem: SliderProps
  required?: boolean
  onChange?: (value: number[]) => void
}
```

## Continuous

```tsx
<SliderInput
  label='Continuous'
  caption='Caption'
  sliderItem={{
    min: 0,
    max: 100,
    defaultValue: [30],
  }}
  onChange={(value) => console.log('Continuous', value)}
  required
/>
```

## Small

```tsx
<SliderInput
  label='Small'
  caption='Caption'
  size='small'
  sliderItem={{
    min: 0,
    max: 100,
    defaultValue: [60],
  }}
  onChange={(value) => console.log('Small', value)}
  required
/>
```

## Discrete

```tsx
<SliderInput
  label='Discrete'
  caption='Caption'
  sliderItem={{
    min: 0,
    max: 100,
    defaultValue: [75],
    marks: [
      { value: 0, label: 0 },
      { value: 25, label: 25 },
      { value: 50, label: 50 },
      { value: 75, label: 75 },
      { value: 100, label: 100 },
    ],
    step: 25,
  }}
  onChange={(value) => console.log('Discrete', value)}
  required
/>
```

## Range

```tsx
<SliderInput
  label='Range'
  caption='Caption'
  sliderItem={{
    min: 0,
    max: 100,
    defaultValue: [20, 80],
  }}
  onChange={(value) => console.log('Range', value)}
  required
/>
```

## Centered

```tsx
<SliderInput
  label='Centered'
  caption='Caption'
  sliderItem={{
    min: -100,
    max: 100,
    defaultValue: [0],
    isCentred: true,
  }}
  onChange={(value) => console.log('Centered', value)}
  required
/>
```
