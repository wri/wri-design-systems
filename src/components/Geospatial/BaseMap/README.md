# Base Map

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-base-map--docs)

[BaseMapDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/BaseMap/BaseMapDemo.tsx)

## Import

```tsx
import { BaseMap } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<BaseMap
  title='Base map settings'
  caption='Update the visual style of the map.'
  additionalSettings={[
    {
      label: 'Show boundaries',
      checked: additionalSettings.showBoundaries,
      onCheckedChange: ({ checked }: { checked: boolean }) => {
        setAdditionalSettings((current) => ({
          ...current,
          showBoundaries: checked,
        }))
      },
      children: (
        <Select
          items={[
            {
              label: 'Political boundaries',
              value: 'political-boundaries',
            },
            {
              label: 'Terrestrial ecoregions',
              value: 'terrestrial-ecoregions',
            },
            {
              label: 'River basins',
              value: 'river-basins',
            },
          ]}
          placeholder='Please select'
        />
      ),
    },
    {
      label: 'Show map labels',
      checked: additionalSettings.showMapLabels,
      onCheckedChange: ({ checked }: { checked: boolean }) => {
        setAdditionalSettings((current) => ({
          ...current,
          showMapLabels: checked,
        }))
      },
    },
    {
      label: 'Show roads',
      checked: additionalSettings.showRoads,
      onCheckedChange: ({ checked }: { checked: boolean }) => {
        setAdditionalSettings((current) => ({
          ...current,
          showRoads: checked,
        }))
      },
    },
  ]}
  options={[
    {
      id: 'carto-positron',
      label: 'Mapbox Streets',
      caption:
        'Emphasizes accurate, legible styling of road and transit networks.',
      imageUrl:
        'https://carto.com/help/images/building-maps/basemaps/positron_labels.png',
      active: selectedOption?.id === 'carto-positron',
    },
    {
      id: 'arcgis-hybrid',
      label: 'Mapbox Light',
      caption: 'Subtle map that provides basic geographic context.',
      imageUrl:
        'https://carto.com/help/images/building-maps/basemaps/dark_labels.png',
      active: selectedOption?.id === 'arcgis-hybrid',
    },
    {
      id: 'osm',
      label: 'Mapbox Satellite',
      caption: 'Global satellite imagery from NASA, and USGS.',
      imageUrl:
        'https://carto.com/help/images/building-maps/basemaps/voyager_labels.png',
      active: selectedOption?.id === 'osm',
      children: (
        <Select
          label='Period'
          items={[
            {
              label: '2017',
              value: '2017',
            },
            {
              label: '2018',
              value: '2018',
            },
            {
              label: '2019',
              value: '2019',
            },
            {
              label: '2020',
              value: '2020',
            },
          ]}
          placeholder='Please select'
        />
      ),
    },
    {
      id: 'carto-voyager',
      label: 'Open Street Map',
      caption: 'Community-built open data map.',
      imageUrl:
        'https://carto.com/help/images/building-maps/basemaps/voyager_labels.png',
      active: selectedOption?.id === 'carto-voyager',
    },
  ]}
  onOptionSelected={(option) => setSelectedOption(option)}
/>
```

## Props

### BaseMap

| Prop                 | Type                                   | Default      | Description                                                    |
| -------------------- | -------------------------------------- | ------------ | -------------------------------------------------------------- |
| `additionalSettings` | `AdditionalSettingsProps[]`            | `—`          | Optional checkbox settings rendered above the base map options |
| `caption`            | `string`                               | `—`          | Optional subheading shown under the title                      |
| `labels`             | `Partial<BaseMapLabels>`               | `—`          | Override internal UI labels for internationalization support   |
| `maxHeight`          | `string`                               | `'25rem'`    | Maximum height of the panel                                    |
| `maxWidth`           | `string`                               | `'16.25rem'` | Maximum width of the panel                                     |
| `onOptionSelected`   | `(option: BaseMapOptionProps) => void` | `—`          | Called with the selected option when an option is clicked      |
| `options`            | `BaseMapOptionProps[]`                 | `—`          | Base map options available for selection                       |
| `title`              | `string`                               | `—`          | Heading shown at the top of the base map panel                 |

### BaseMapOption

| Prop       | Type              | Default | Description                                                               |
| ---------- | ----------------- | ------- | ------------------------------------------------------------------------- |
| `active`   | `boolean`         | `—`     | Marks the option as the currently active base map, showing the Active tag |
| `caption`  | `string`          | `—`     | Short description shown under the option label                            |
| `children` | `React.ReactNode` | `—`     | Optional content rendered inside the option when it is active             |
| `id`       | `string`          | `—`     | Unique identifier of the base map option                                  |
| `imageUrl` | `string`          | `—`     | Preview image URL shown for the option                                    |
| `label`    | `string`          | `—`     | Display name of the base map option                                       |

### Supporting types

```ts
type AdditionalSettingsProps = {
  /** Checkbox label for the setting */
  label: string
  /** Whether the setting checkbox is checked */
  checked?: boolean
  /** Called with the new checked state when the checkbox toggles */
  onCheckedChange: ({ checked }: { checked: boolean }) => void
  /** Optional content rendered under the checkbox while it is checked */
  children?: React.ReactNode
}

type BaseMapLabels = {
  /**
   * Visible label text inside the active Tag badge.
   * Passed directly to Tag.label (string).
   * Default: "Active"
   */
  activeLabel: string
}
```
