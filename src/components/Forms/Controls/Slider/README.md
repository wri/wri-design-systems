# Slider

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-controls-slider--docs)

[SliderDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Controls/Slider/SliderDemo.tsx)

## Import

```js
import { Slider } from '@worldresources/wri-design-systems'
```

## Usage

```html
<Slider min="{0}" max="{100}" defaultValue="{[50]}" />
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
> & {
  min?: number
  max?: number
  defaultValue?: number[]
  value?: number[]
  marks?: Array<number | { value: number; label: React.ReactNode }>
  step?: number
  disabled?: boolean
  width?: string
  onValueChange?: (details: ValueChangeDetails) => void
  onValueChangeEnd?: (details: ValueChangeDetails) => void
  isCentred?: boolean
}
```

## Continuous

```html
<Slider min="{0}" max="{100}" defaultValue="{[50]}" />
```

## Discrete

```html
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

```html
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

```html
<Slider value="{[20," 80]} />
```

## Centred

````html
<Slider min="{0}" max="{100}" defaultValue="{[50]}" isCentred />

## Disabled ```html
<Slider min="{0}" max="{100}" defaultValue="{[50]}" disabled />
````
