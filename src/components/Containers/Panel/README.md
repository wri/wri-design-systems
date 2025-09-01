# Panel

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/containers-panel-panel--docs)

[PanelDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Containers/Panel/PanelDemo.tsx)

## Import

```tsx
import { Panel } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Panel
  header={<div>Header</div>}
  content={<div>Content</div>}
  footer={<div>Footer</div>}
/>
```

## Props

```ts
type PanelProps = {
  header?: React.ReactNode
  content: React.ReactNode
  footer?: React.ReactNode
  width?: string // 240 - 560px, default 320px
  variant?: 'fixed' | 'floating'
}
```
