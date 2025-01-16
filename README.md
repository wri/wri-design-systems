# @worldresources/wri-design-systems

WRI UI Library

## Requirements

Node: `20.16.0`

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
yarn add @chakra-ui/react @emotion/react @emotion/styled
```

or

```
npm i @chakra-ui/react @emotion/react @emotion/styled
```

## Usage

### Create the Project Theme

With this custom theme you can change the color scheme according to your Project Theme

```js
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

```js
import React from 'react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { system } from './lib/theme'

function App() {
  return (
    {/* if you want to use the default WRI Theme colors */}
    {/* <ChakraProvider value={defaultSystem}> */}

    {/* if you want to use your custom system Theme colors */}
    <ChakraProvider value={system}>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )
}
```

## Components

## Forms

### Buttons

- [Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Buttons/Button)
- [Icon Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Buttons/IconButton)
- [Close Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Buttons/CloseButton)

### Controls

- [Switch](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Controls/Switch)
- [Radio Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Controls/Radio)
- [Checkbox](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Controls/Checkbox)
- [Slider](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Controls/Slider)

### Tags

- [Tag](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Tag)

### Inputs

- [Text Input](https://github.com/wri/wri-design-systems/tree/main/src/components/TextInput)
- [Text Area](https://github.com/wri/wri-design-systems/tree/main/src/components/Textarea)
- [Select](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Inputs/Select)

## Navigation

- [Tab Bar](https://github.com/wri/wri-design-systems/tree/main/src/components/TabBar)
- [Navigation Rail](https://github.com/wri/wri-design-systems/tree/main/src/components/NavigationRail)

## Status

- [Inline Message](https://github.com/wri/wri-design-systems/tree/main/src/components/InlineMessage)

## Geospatial

### Layers

- [Layer Item](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerItem)
- [Layer Group](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerGroup)
- [Layer Panel](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerPanel)
- [Layer Sidebar](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerSidebar)

### Legends

- [Qualitative Attributes](https://github.com/wri/wri-design-systems/tree/main/src/components/Legend/QualitativeLegend)
- [Scale Bar](https://github.com/wri/wri-design-systems/tree/main/src/components/Legend/ScaleBar)
- [Layer Parameters](https://github.com/wri/wri-design-systems/tree/main/src/components/Legend/LayerParameters)
- [Legend Item](https://github.com/wri/wri-design-systems/tree/main/src/components/Legend/LegendItem)
- [Legend Panel](https://github.com/wri/wri-design-systems/tree/main/src/components/Legend/LegendPanel)

## Building the lib

```
yarn lint-fix
```

```
yarn rollup-build
```

## Publish new version

```
npm login
```

```
npm publish
```
