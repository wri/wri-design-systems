# wri-design-systems

WRI UI Library

## Requirements

Node: `20.16.0`

React: `18.3.1`

## Installation

```
yarn add wri-design-systems
```

or

```
npm i wri-design-systems
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

### General

- [Banner](https://github.com/wri/wri-design-systems/tree/main/src/components/Banner)
- [NavigationRail](https://github.com/wri/wri-design-systems/tree/main/src/components/NavigationRail)
- [TabBar](https://github.com/wri/wri-design-systems/tree/main/src/components/TabBar)
- [Tag](https://github.com/wri/wri-design-systems/tree/main/src/components/Tag)

### Controls

- [Checkbox](https://github.com/wri/wri-design-systems/tree/main/src/components/Checkbox)
- [Radio](https://github.com/wri/wri-design-systems/tree/main/src/components/Radio)
- [Switch](https://github.com/wri/wri-design-systems/tree/main/src/components/Switch)

### Layers

- [LayerItem](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerItem)
- [LayerGroup](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerGroup)
- [LayerPanel](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerPanel)
- [LayerSidebar](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerSidebar)

### Inputs

- [Input](https://github.com/wri/wri-design-systems/tree/main/src/components/Input)
- [Textarea](https://github.com/wri/wri-design-systems/tree/main/src/components/Textarea)

### Buttons

- [Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Buttons/Button)
- [CloseButton](https://github.com/wri/wri-design-systems/tree/main/src/components/Buttons/CloseButton)
- [IconButton](https://github.com/wri/wri-design-systems/tree/main/src/components/Buttons/IconButton)
