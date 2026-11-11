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

| Prop                | Type                        | Default     | Description                                                                                                                                    |
| ------------------- | --------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `caption`           | `string`                    | —           | Helper text rendered below the label                                                                                                           |
| `label`             | `string`                    | —           | Field label rendered above the slider                                                                                                          |
| `onChange`          | `(value: number[]) => void` | —           | Called with the current slider values whenever the slider or an input commits a change                                                         |
| `required`          | `boolean`                   | —           | Marks the field as required and shows the required indicator                                                                                   |
| `showOptionalLabel` | `boolean`                   | `false`     | Shows the "(optional)" suffix for non-required fields                                                                                          |
| `size`              | `'default' \| 'small'`      | `'default'` | Controls the field text size and spacing                                                                                                       |
| `sliderItem`        | `SliderProps`               | —           | Slider configuration props from the `Slider` component; when `step` and `marks` are set the numeric input is replaced by a select of the marks |

### Supporting types

- `SliderProps` — configuration props from `Forms/Controls/Slider`: `min`, `max`, `value`, `step`, `marks`, `isCentred`, `disabled`, `colors`, plus slider change callbacks

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
