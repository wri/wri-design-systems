# LegendPanel

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-legends-legend-panel--docs)

[LegendPanelDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/Legends/LegendPanel/LegendPanelDemo.tsx)

## Import

```js
import { LegendPanel } from '@worldresources/wri-design-systems'
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
