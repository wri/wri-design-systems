# Map Marker

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-icon-marker--docs)

[IconMarkerDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/MapMarker/IconMarkerDemo.tsx)

## Import

```tsx
import { MapMarker } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<MapMarker
  ariaLabel='map marker'
  icon={<PlaceholderIcon color='var(--chakra-colors-success-500)' />}
/>
```

## Props

```ts
type MapMarkerProps = {
  ariaLabel?: string
  icon?: React.ReactNode
  backgroundColor?: string
  onClick?: () => void
  showFocusState?: boolean
  count?: number
  mode?: 'dark' | 'light'
  variant?: 'cluster' | 'simple-pin' | 'icon'
}
```

## Default index open

```tsx
<MapMarker
  ariaLabel='icon marker'
  icon={<PlaceholderIcon color='var(--chakra-colors-success-500)' />}
/>
```

## Presets

### Map Marker Prestes

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-map-marker-presets--docs)

[IconMarkersDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/MapMarker/MapMarkerPresetsDemo.tsx)

```tsx
import { IconMarkers } from '@worldresources/wri-design-systems'
```

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <IconMarkers.Paper />
  <IconMarkers.Drop />
  <IconMarkers.Plant />
  <IconMarkers.Point />
</div>
```

### Map Markers

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-icon-marker-presets-map-markers--docs)

[MapMarkersDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/MapMarker/MapMarkerDemo.tsx)

```tsx
import { SimpleMapPin, ClusterPoint } from '@worldresources/wri-design-systems'
```

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <ClusterPoint count={10} mode='dark' />
  <ClusterPoint count={123123} mode='light' />
  <SimpleMapPin />
</div>
```
