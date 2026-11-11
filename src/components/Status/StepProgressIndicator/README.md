# StepProgressIndicator

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/status-step-progress-indicator--docs)

[StepProgressIndicatorDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Status/StepProgressIndicator/StepProgressIndicatorDemo.tsx)

## Import

```tsx
import { StepProgressIndicator } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<StepProgressIndicator
  steps={[
    { label: 'Label', onClick: () => {} },
    { label: 'Label', onClick: () => {} },
    { label: 'Label', onClick: () => {} },
    { label: 'Label', onClick: () => {} },
    { label: 'Label', onClick: () => {} },
  ]}
  currentStep={1}
/>
```

## Props

| Prop          | Type                                         | Default | Description                                                  |
| ------------- | -------------------------------------------- | ------- | ------------------------------------------------------------ |
| `currentStep` | `number`                                     | —       | 1-based index of the active step                             |
| `labels`      | `Partial<StepProgressIndicatorLabels>`       | —       | Override internal UI labels for internationalization support |
| `steps`       | `{ label?: string; onClick?: () => void }[]` | —       | Step definitions rendered as numbered indicators             |

### Supporting types

```ts
type StepProgressIndicatorLabels = {
  /** Builds the aria-label per step. Default fn provided. */
  currentStepLabel: (
    step: number,
    label: string,
    isCompleted: boolean,
  ) => string
}
```
