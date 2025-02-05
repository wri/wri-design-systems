# Slider

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-controls-slider--docs)

[SliderDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Controls/Slider/SliderDemo.tsx)

## Import

```tsx
import { Slider } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Slider min={0} max={100} defaultValue={[50]} />
```

## Props

```ts
type SliderProps = Omit<
  ChakraSliderRootProps,
  | 'size'
  | 'variant'
  | 'colorPalette'
  | 'thumbAlignment'
  | 'thumbSize'
  | 'label'
  | 'defaultChecked'
  | 'origin'
  | 'defaultValue'
> & {
  width?: string
  min?: number
  max?: number
  value?: number[]
  marks?: Array<number | { value: number; label: React.ReactNode }>
  step?: number
  disabled?: boolean
  onValueChange?: (details: ValueChangeDetails) => void
  onValueChangeEnd?: (details: ValueChangeDetails) => void
  isCentred?: boolean
}
```

## Continuous

```tsx
<Slider min={0} max={100} defaultValue={[50]} />
```

## Discrete

```tsx
<Slider
  min={0}
  max={100}
  defaultValue={[50]}
  marks={[
    { value: 0, label: 0 },
    { value: 25, label: 25 },
    { value: 50, label: 50 },
    { value: 75, label: 75 },
    { value: 100, label: 100 },
  ]}
/>
```

## Discrete With Steps

```tsx
<Slider
  min={0}
  max={100}
  defaultValue={[50]}
  marks={[
    { value: 0, label: 0 },
    { value: 25, label: 25 },
    { value: 50, label: 50 },
    { value: 75, label: 75 },
    { value: 100, label: 100 },
  ]}
  step={25}
/>
```

## Range

```tsx
<Slider value={[20, 80]} />
```

## Centred

```tsx
<Slider min={-100} max={100} defaultValue={[0]} isCentred />
```

## Disabled

```tsx
<Slider min={0} max={100} defaultValue={[50]} disabled />
```
