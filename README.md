# @worldresources/wri-design-systems

WRI UI Library

## Requirements

Node: `22.14.0`

React: `18.3.1`

## Installation

```
yarn add @worldresources/wri-design-systems
```

or

```
npm i @worldresources/wri-design-systems
```

## Other dependecies

```
yarn add @chakra-ui/react@^3.14.2 @emotion/react@^^11.14.0
```

or

```
npm i @chakra-ui/react@^3.14.2 @emotion/react@^^11.14.0
```

## Usage

### Create the Project Theme

With this custom theme you can change the color scheme according to your Project Theme

```tsx
import { createSystem, defaultConfig } from '@chakra-ui/react'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        neutral: {
          100: { value: '#FFFFFF' },
          200: { value: '#F6F6F6' },
          300: { value: '#E7E6E6' },
          400: { value: '#C9C9C9' },
          500: { value: '#B0B0B0' },
          600: { value: '#A1A1A1' },
          700: { value: '#5C5959' },
          800: { value: '#3D3B3B' },
          900: { value: '#1A1919' },
        },
        primary: {
          100: { value: '#FFFBF2' },
          200: { value: '#FCEFD3' },
          300: { value: '#FADFA7' },
          400: { value: '#F5BF4F' },
          500: { value: '#F0AB00' },
          600: { value: '#DE9E00' },
          700: { value: '#855B00' },
          800: { value: '#5F4205' },
          900: { value: '#332300' },
        },
        secondary: {
          100: { value: '#F2F6FF' },
          200: { value: '#D7E0F7' },
          300: { value: '#B2C3F0' },
          400: { value: '#4F6CBA' },
          500: { value: '#3855A3' },
          600: { value: '#0A4298' },
          700: { value: '#123369' },
          800: { value: '#162241' },
          900: { value: '#0B1121' },
        },
        success: {
          100: { value: '#EBF5F2' },
          200: { value: '#D3EED1' },
          300: { value: '#C2E5DC' },
          500: { value: '#009E77' },
          900: { value: '#00664D' },
        },
        warning: {
          100: { value: '#FBF7EA' },
          200: { value: '#E3CC8F' },
          300: { value: '#EEDDA5' },
          500: { value: '#A88100' },
          900: { value: '#715804' },
        },
        error: {
          100: { value: '#FFEFED' },
          200: { value: '#EDA1A9' },
          300: { value: '#F6C5C1' },
          500: { value: '#C11101' },
          900: { value: '#8D0D01' },
        },
        accessible: {
          'text-on-primary-mids': { value: '#332300' }, // primary 900
          'text-on-secondary-mids': { value: '#F2F6FF' }, // secondary 100
          'controls-on-neutral-lights': { value: '#855B00' }, // primary 700
          'controls-on-neutral-darks': { value: '#F5BF4F' }, // primary 400
        },
      },
    },
  },
})
```

### Wrap ChakraProvider at the root of your app

```tsx
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { designSystemStyles } from "@worldresources/wri-design-systems";
import { system } from './lib/theme'

function App() {
  return (
    {/* if you want to use the default WRI Theme colors */}
    {/* <ChakraProvider value={designSystemStyles}> */}

    {/* if you want to use your custom system Theme colors */}
    <ChakraProvider value={system}>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )
}
```

### getThemedColor

Use **getThemedColor** to access your theme colors and variants.

```tsx
import { getThemedColor } from '@worldresources/wri-design-systems'
```

```
border: 1px solid ${getThemedColor('neutral', 400)};
```

## Components

## Forms

### Buttons

- [Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Buttons/Button)
- [Close Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Buttons/CloseButton)
- [Icon Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Buttons/IconButton)
- [Map Control](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Buttons/MapControl)
- [Multi Action Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Buttons/MultiActionButton)

### Controls

- [Checkbox](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Controls/Checkbox)
- [Option Card](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Controls/OptionCard)
- [Radio Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Controls/Radio)
- [Slider](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Controls/Slider)
- [Switch](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Controls/Switch)

### Inputs

- [Checkbox List](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Inputs/CheckboxList)
- [Input With Units](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Inputs/InputWithUnits)
- [Password](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Inputs/Password)
- [Radio List](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Inputs/RadioList)
- [Select](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Inputs/Select)
- [Slider Input](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Inputs/SliderInput)
- [Text Area](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Inputs/Textarea)
- [Text Input](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Inputs/TextInput)

### Tags

- [Tag](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Tag)

## Geospatial

- [Icon Marker](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/IconMarker)

### Layers

- [Layer Group](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Layers/LayerGroup)
- [Layer Item](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Layers/LayerItem)
- [Layer Panel](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Layers/LayerPanel)
- [Layer Sidebar](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Layers/LayerSidebar)

### Legends

- [Layer Parameters](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Legends/LayerParameters)
- [Legend Item](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Legends/LegendItem)
- [Legend Panel](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Legends/LegendPanel)
- [Qualitative Attribute](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Legends/QualitativeAttribute)
- [Scale Bar](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Legends/ScaleBar)

## Information Display

- [Item Count](https://github.com/wri/wri-design-systems/tree/main/src/components/InformationDisplay/ItemCount)
- [Pagination](https://github.com/wri/wri-design-systems/tree/main/src/components/InformationDisplay/Pagination)
- [Table](https://github.com/wri/wri-design-systems/tree/main/src/components/InformationDisplay/Table)

## Navigation

- [Breadcrumb](https://github.com/wri/wri-design-systems/tree/main/src/components/Navigation/Breadcrumb)
- [Footer](https://github.com/wri/wri-design-systems/tree/main/src/components/Navigation/Footer)
- [Navigation Rail](https://github.com/wri/wri-design-systems/tree/main/src/components/Navigation/NavigationRail)
- [Tab Bar](https://github.com/wri/wri-design-systems/tree/main/src/components/Navigation/TabBar)

## Overlays

- [Menu](https://github.com/wri/wri-design-systems/tree/main/src/components/Overlays/Menu)

## Status

- [Badge](https://github.com/wri/wri-design-systems/tree/main/src/components/Status/Badge)
- [Inline Message](https://github.com/wri/wri-design-systems/tree/main/src/components/Status/InlineMessage)
- [Toast](https://github.com/wri/wri-design-systems/tree/main/src/components/Status/Toast)

## Templates

- [Next.js](https://github.com/wri/next-js-design-system-template)

## Building the lib

```
yarn lint-fix
```

```
yarn build
```

## Publish new version

```
npm login
```

```
npm publish
```
