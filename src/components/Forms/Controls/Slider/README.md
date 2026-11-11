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

| Prop               | Type                                                         | Default | Description                                                                                                       |
| ------------------ | ------------------------------------------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------- |
| `colors`           | `string[]`                                                   | —       | Colors used to render a gradient track, e.g. for data-driven scales (low → high)                                  |
| `disabled`         | `boolean`                                                    | —       | Disables the slider and applies disabled styles                                                                   |
| `isCentred`        | `boolean`                                                    | —       | Renders a centred origin: the filled range grows from the middle and a middle marker is drawn between min and max |
| `marks`            | `Array<number \| { value: number; label: React.ReactNode }>` | —       | Tick marks on the track. Numbers render markers only; objects can also render a label below the track             |
| `max`              | `number`                                                     | `100`   | Maximum slider value                                                                                              |
| `min`              | `number`                                                     | `0`     | Minimum slider value                                                                                              |
| `onValueChange`    | `(details: { value: number[] }) => void`                     | —       | Called with the current value(s) while the value changes                                                          |
| `onValueChangeEnd` | `(details: { value: number[] }) => void`                     | —       | Called with the final value(s) when the change interaction ends                                                   |
| `step`             | `number`                                                     | —       | Increment between selectable values                                                                               |
| `value`            | `number[]`                                                   | `[0]`   | Controlled value(s) of the slider                                                                                 |
| `width`            | `string`                                                     | —       | Custom width for the slider                                                                                       |

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
