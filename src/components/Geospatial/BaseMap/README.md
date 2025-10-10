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

```ts
type AdditionalSettingsProps = {
  label: string
  checked?: boolean
  onCheckedChange: ({ checked }: { checked: boolean }) => void
  children?: React.ReactNode
}

type BaseMapOptionProps = {
  id: string
  label: string
  caption: string
  imageUrl: string
  children?: React.ReactNode
  active?: boolean
}

type BaseMapProps = {
  title: string
  caption?: string
  additionalSettings?: AdditionalSettingsProps[]
  options: BaseMapOptionProps[]
  onOptionSelected?: (option: BaseMapOptionProps) => void
  maxHeight?: string
}
```

## Base Map

```tsx
<div
  style={{
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }}
>
  <div
    style={{
      height: isOpenBaseMap ? '400px' : 0,
      overflow: 'hidden',
      transition: 'height 0.3s ease-in-out',
    }}
  >
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
  </div>

  <button
    style={{
      height: '40px',
      width: '260px',
      border: `1px solid ${getThemedColor('neutral', 300)}`,
      borderRadius: '4px',
      borderTopLeftRadius: isOpenBaseMap ? '0px' : '4px',
      borderTopRightRadius: isOpenBaseMap ? '0px' : '4px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      padding: '0px 8px',
      backgroundColor: 'white',
    }}
    onClick={() => setIsOpenBaseMap(!isOpenBaseMap)}
    type='button'
  >
    <MapIcon />
    <p
      style={{
        width: '200px',
        fontWeight: 'bold',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textAlign: 'left',
        color: getThemedColor('neutral', 800),
      }}
    >{`Base map: ${selectedOption?.label}`}</p>
    {isOpenBaseMap ? <ChevronDownIcon rotate='180' /> : <ChevronDownIcon />}
  </button>
</div>
```

## Base Map Within Sheet

```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
  <div style={{ height: '500px', width: '260px', position: 'relative' }}>
    <Sheet
      content={
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
          maxHeight='100%'
        />
      }
      defaultSnap='mid'
      open={showSheet}
      onClose={() => setShowSheet(false)}
    />
  </div>
  <Button
    style={{ width: '200px' }}
    label='Show Closed Sheet'
    onClick={() => setShowSheet(true)}
  />
</div>
```
