# Map Markers

Pre-built `MapMarker` variants for common WRI use cases. Each export is a typed wrapper around `MapMarker` with a preset icon, color, and `ariaLabel`.

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-map-marker-markers--docs)

## Import

```tsx
import { ClusterPoint, SimpleMapPin } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<ClusterPoint count={5} mode='dark' onClick={() => {}} />
<SimpleMapPin onClick={() => {}} />
```

## Props

Both `ClusterPoint` and `SimpleMapPin` accept:

```ts
type GenericMapMarkersProps = {
  onClick?: () => void
  triggerRef?: React.Ref<HTMLButtonElement>
  showFocusState?: boolean
  count?: number
  mode?: 'dark' | 'light'
  variant?: MapMarkerProps['variant']
}
```

The `variant` defaults to `'cluster'` for `ClusterPoint` and `'simple-pin'` for `SimpleMapPin`.
