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
yarn add @chakra-ui/react@ @emotion/react
```

or

```
npm i @chakra-ui/react@ @emotion/react
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
          300: { value: '#ff5252' },
          500: { value: '#ff0000' },
        },
        primary: {
          200: { value: '#93ff93' },
          500: { value: '#d80a5d' },
          600: { value: '#16b816' },
          700: { value: '#006100' },
        },
        secondary: {
          ...
        },
        success: {
          ...
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
