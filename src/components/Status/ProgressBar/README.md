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

```ts
type ProgressBarLabels = {
  /** Builds aria-label text for progress value. Default: (progress) => `Progress: ${progress}%` */
  progressAriaLabel: (progress: number) => string
}

type ProgressBarProps = {
  progress: number
  color?: string
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<ProgressBarLabels>
}
```
