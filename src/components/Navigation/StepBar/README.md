# StepBar

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/navigation-step-bar--docs)

[StepBarDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Navigation/StepBar/StepBarDemo.tsx)

## Import

```tsx
import { StepBar } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<StepBar
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
type StepBarProps = {
  steps: {
    label?: string
    onClick?: () => void
  }[]
  currentStep: number
}
```
