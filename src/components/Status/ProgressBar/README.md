# ProgressBar

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/status-progress-bar--docs)

[ProgressBarDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Status/ProgressBar/ProgressBarDemo.tsx)

## Import

```tsx
import { ProgressBar } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<ProgressBar progress={25} />

<ProgressBar progress={75} color={getThemedColor('success', 500)} />
```

## Props

| Prop       | Type                         | Default                          | Description                                                  |
| ---------- | ---------------------------- | -------------------------------- | ------------------------------------------------------------ |
| `color`    | `string`                     | `getThemedColor('primary', 500)` | Custom fill color of the bar                                 |
| `labels`   | `Partial<ProgressBarLabels>` | —                                | Override internal UI labels for internationalization support |
| `progress` | `number`                     | —                                | Percentage of the bar filled, clamped between 0 and 100      |

### Supporting types

```ts
type ProgressBarLabels = {
  /** Builds aria-label text for progress value. Default: (progress) => `Progress: ${progress}%` */
  progressAriaLabel: (progress: number) => string
}
```
