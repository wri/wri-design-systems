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

```ts
type StepProgressIndicatorProps = {
  steps: {
    label?: string
    onClick?: () => void
  }[]
  currentStep: number
}
```
