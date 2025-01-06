# LegendPanel

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/legend-legend-panel--docs)

[LegendPanelDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Legend/LegendPanel/LegendPanelDemo.tsx)

## Import

```js
import { LegendPanel } from 'wri-design-systems'
```

## Usage

```html
<LegendPanel
  legendContent={(
    <>
      <LegendItemDemo />
      <LegendItemDemo2 />
      <LegendItemDemo3 />
    </>
  )}
  analysisContent={<div />}
/>
```

## Props

```ts
type LegendPanelProps = {
  legendContent: React.ReactNode
  analysisContent: React.ReactNode
  onTabClick?: (tabValue: string) => void
}
```
