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

| Prop              | Type                                  | Default  | Description                                                                                  |
| ----------------- | ------------------------------------- | -------- | -------------------------------------------------------------------------------------------- |
| `ariaLabel`       | `string`                              | `—`      | Custom aria-label for the marker button; falls back to a label based on the count or variant |
| `backgroundColor` | `string`                              | `—`      | Background color of the marker                                                               |
| `count`           | `number`                              | `—`      | Number of features in a cluster, formatted and shown when variant is cluster                 |
| `icon`            | `React.ReactNode`                     | `—`      | Icon rendered inside the marker when variant is icon                                         |
| `labels`          | `Partial<MapMarkerLabels>`            | `—`      | Override internal UI labels for internationalization support                                 |
| `mode`            | `'dark' \| 'light'`                   | `—`      | Color scheme of the marker; dark or light                                                    |
| `onClick`         | `() => void`                          | `—`      | Called when the marker button is clicked                                                     |
| `showFocusState`  | `boolean`                             | `—`      | Wraps the marker in a container that shows a focus ring                                      |
| `variant`         | `'cluster' \| 'simple-pin' \| 'icon'` | `'icon'` | Marker style; cluster shows a count, simple-pin a plain pin, icon a custom icon              |

### Supporting types

```ts
type MapMarkerLabels = {
  /** aria-label for a cluster marker. Default fn provided: (count) => `Cluster of ${count} locations` */
  clusterAriaLabel: (count: number) => string
  /** aria-label for a simple-pin marker. Default: "Map pin location" */
  pinAriaLabel: string
  /** aria-label for an icon marker. Default: "Map point" */
  pointAriaLabel: string
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

### Map Marker Presets

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-map-marker-presets--docs)

[MapMarkersDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/MapMarker/MapMarkerPresetsDemo.tsx)

```tsx
import { MapMarkers } from '@worldresources/wri-design-systems'
```

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
<div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
  <ClusterPoint count={10} mode='dark' />
  <ClusterPoint count={123123} mode='light' />
  <SimpleMapPin />
</div>
```
