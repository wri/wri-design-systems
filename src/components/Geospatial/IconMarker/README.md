# Icon Marker

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-icon-marker--docs)

[IconMarkerDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/IconMarker/IconMarkerDemo.tsx)

## Import

```tsx
import { IconMarker } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<IconMarker
  ariaLabel='icon marker'
  icon={<PlaceholderIcon color='var(--chakra-colors-success-500)' />}
/>
```

## Props

```ts
type IconMarkerProps = {
  ariaLabel: string
  icon: React.ReactNode
  backgroundColor?: string
  onClick?: () => void
}
```

## Default index open

```tsx
<IconMarker
  ariaLabel='icon marker'
  icon={<PlaceholderIcon color='var(--chakra-colors-success-500)' />}
/>
```

## Presets

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-icon-marker-presets-icon-markers--docs)

[IconMarkersDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/IconMarker/IconMarkerDemo.tsx)

```tsx
import { IconMarkers } from '@worldresources/wri-design-systems'
```

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <IconMarkers.Paper />
  <IconMarkers.Drop />
  <IconMarkers.Plant />
</div>
```
