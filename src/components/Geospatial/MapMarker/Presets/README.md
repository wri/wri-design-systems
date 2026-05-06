# Map Marker Presets

Themed `MapMarker` presets for WRI datasets. Each preset uses a standardized icon and brand-aligned color pair so map markers are visually consistent across WRI applications.

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-map-marker-presets--docs)

## Import

```tsx
import { MapMarkers } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<MapMarkers.Paper onClick={() => {}} />
<MapMarkers.Drop onClick={() => {}} />
<MapMarkers.Plant onClick={() => {}} />
<MapMarkers.Point onClick={() => {}} />
```

## Available presets

| Preset             | Icon      | Background color   | Use case                          |
| ------------------ | --------- | ------------------ | --------------------------------- |
| `MapMarkers.Paper` | PaperIcon | `#FFBCD4` (pink)   | Documents / publications          |
| `MapMarkers.Drop`  | DropIcon  | `#F3A078` (orange) | Water / hydrology data            |
| `MapMarkers.Plant` | PlantIcon | `#B7E578` (green)  | Forest / land / biodiversity data |
| `MapMarkers.Point` | _(none)_  | Primary 500        | Generic point of interest         |

## Props

All presets accept:

```ts
type GenericMapMarkersProps = {
  ariaLabel?: string
  onClick?: () => void
  triggerRef?: React.Ref<HTMLButtonElement>
  showFocusState?: boolean
}
```
