# Map Marker

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-map-marker--docs)

[MapMarkerDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/MapMarker/MapMarkerDemo.tsx)

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
  ariaLabel='map marker'
  icon={<PlaceholderIcon color='var(--chakra-colors-success-500)' />}
/>
```

## Presets

### Map Marker Prestes

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-map-marker-presets--docs)

[MapMarkersDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/MapMarker/MapMarkerPresetsDemo.tsx)

```tsx
import { MapMarkers } from '@worldresources/wri-design-systems'
```

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <MapMarkers.Paper />
  <MapMarkers.Drop />
  <MapMarkers.Plant />
  <MapMarkers.Point />
</div>
```

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
