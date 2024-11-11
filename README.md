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
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```
or
```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```


## Usage
### Create the Project Theme
With this custom theme you can change the color scheme according to your Project Theme

```
import { extendTheme } from '@chakra-ui/react'

export const projectTheme = extendTheme({
  colors: {
    wri: {
      neutral: {
        300: '#ff5252',
        500: '#ff0000',
      },
      primary: {
        200: '#93ff93',
        500: '#d80a5d',
        600: '#16b816',
        700: '#006100',
      },
      secondary: {
        ...
      },
      success: {
        ...
      },
    },
  },
})
```

### Wrap ChakraProvider at the root of your app
```
import * as React from 'react'
import { projectTheme } from './lib/theme'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={projectTheme}>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )
}
```

## Components
### General
* [Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Button)
* [NavigationRail](https://github.com/wri/wri-design-systems/tree/main/src/components/NavigationRail)
* [TabBar](https://github.com/wri/wri-design-systems/tree/main/src/components/TabBar)

### Controls
* [Checkbox](https://github.com/wri/wri-design-systems/tree/main/src/components/Checkbox)
* [Radio](https://github.com/wri/wri-design-systems/tree/main/src/components/Radio)
* [Switch](https://github.com/wri/wri-design-systems/tree/main/src/components/Switch)

### Layers
* [LayerItem](https://github.com/wri/wri-design-systems/tree/main/src/components/LayerGroup)
* [LayerItem](https://github.com/wri/wri-design-systems/tree/main/src/components/LayerItem)
