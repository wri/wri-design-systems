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
yarn add @chakra-ui/react @emotion/react
```

or

```
npm i @chakra-ui/react @emotion/react
```

## Usage

### Create the Project Theme

With this custom theme you can change the color scheme according to your Project Theme

```tsx
import { createSystem, defaultConfig } from '@chakra-ui/react'
import { designSystemStyles } from '@worldresources/wri-design-systems'

export const system = createSystem(designSystemStyles._config, {
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

### Adding theme to your CSS variables

```css
--color-neutral-100: var(--chakra-colors-neutral-100);
--color-neutral-200: var(--chakra-colors-neutral-200);
--color-neutral-300: var(--chakra-colors-neutral-300);
--color-neutral-400: var(--chakra-colors-neutral-400);
--color-neutral-500: var(--chakra-colors-neutral-500);
--color-neutral-600: var(--chakra-colors-neutral-600);
--color-neutral-700: var(--chakra-colors-neutral-700);
--color-neutral-800: var(--chakra-colors-neutral-800);
--color-neutral-900: var(--chakra-colors-neutral-900);

--color-primary-100: var(--chakra-colors-primary-100);
--color-primary-200: var(--chakra-colors-primary-200);
--color-primary-300: var(--chakra-colors-primary-300);
--color-primary-400: var(--chakra-colors-primary-400);
--color-primary-500: var(--chakra-colors-primary-500);
--color-primary-600: var(--chakra-colors-primary-600);
--color-primary-700: var(--chakra-colors-primary-700);
--color-primary-800: var(--chakra-colors-primary-800);
--color-primary-900: var(--chakra-colors-primary-900);

--color-secondary-100: var(--chakra-colors-secondary-100);
--color-secondary-200: var(--chakra-colors-secondary-200);
--color-secondary-300: var(--chakra-colors-secondary-300);
--color-secondary-400: var(--chakra-colors-secondary-400);
--color-secondary-500: var(--chakra-colors-secondary-500);
--color-secondary-600: var(--chakra-colors-secondary-600);
--color-secondary-700: var(--chakra-colors-secondary-700);
--color-secondary-800: var(--chakra-colors-secondary-800);
--color-secondary-900: var(--chakra-colors-secondary-900);

--color-success-100: var(--chakra-colors-success-100);
--color-success-200: var(--chakra-colors-success-200);
--color-success-300: var(--chakra-colors-success-300);
--color-success-500: var(--chakra-colors-success-500);
--color-success-900: var(--chakra-colors-success-900);

--color-warning-100: var(--chakra-colors-warning-100);
--color-warning-200: var(--chakra-colors-warning-200);
--color-warning-300: var(--chakra-colors-warning-300);
--color-warning-500: var(--chakra-colors-warning-500);
--color-warning-900: var(--chakra-colors-warning-900);

--color-error-100: var(--chakra-colors-error-100);
--color-error-200: var(--chakra-colors-error-200);
--color-error-300: var(--chakra-colors-error-300);
--color-error-500: var(--chakra-colors-error-500);
--color-error-900: var(--chakra-colors-error-900);

--color-accessible-text-on-primary-mids: var(
  --chakra-colors-accessible-text-on-primary-mids
);
--color-accessible-text-on-secondary-mids: var(
  --chakra-colors-accessible-text-on-secondary-mids
);
--color-accessible-controls-on-neutral-lights: var(
  --chakra-colors-accessible-controls-on-neutral-lights
);
--color-accessible-controls-on-neutral-darks: var(
  --chakra-colors-accessible-controls-on-neutral-darks
);
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

## Containers

- [Modal](https://github.com/wri/wri-design-systems/tree/main/src/components/Containers/Modal)
- [Panel](https://github.com/wri/wri-design-systems/tree/main/src/components/Containers/Panel)
- [Sheet](https://github.com/wri/wri-design-systems/tree/main/src/components/Containers/Sheet)

## Data Display

- [Item Count](https://github.com/wri/wri-design-systems/tree/main/src/components/DataDisplay/ItemCount)
- [List](https://github.com/wri/wri-design-systems/tree/main/src/components/DataDisplay/List)
- [Table](https://github.com/wri/wri-design-systems/tree/main/src/components/DataDisplay/Table)
- [Extendable Card](https://github.com/wri/wri-design-systems/tree/main/src/components/DataDisplay/ExtendableCard)
- [Analysis Widget](https://github.com/wri/wri-design-systems/tree/main/src/components/DataDisplay/AnalysisWidget)

## Forms

### Actions

- [Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Actions/Button)
- [Close Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Actions/CloseButton)
- [Icon Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Actions/IconButton)
- [Toolbar](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Actions/Toolbar)
- [Menu](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Actions/Menu)
- [Multi Action Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Actions/MultiActionButton)
- [Tooltip](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Actions/Tooltip)

### Controls

- [Checkbox](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Controls/Checkbox)
- [Checkbox Option Card](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Controls/CheckboxOptionCard)
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

- [Base Map](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/BaseMap)
- [Icon Marker](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/IconMarker)
- [Map Pop Up](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/MapPopUp)

### Layers

- [Layer Group](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Layers/LayerGroup)
- [Layer Item](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Layers/LayerItem)
- [Layer Panel](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Layers/LayerPanel)

### Legends

- [Layer Parameters](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Legends/LayerParameters)
- [Legend Item](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Legends/LegendItem)
- [Legend Panel](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Legends/LegendPanel)
- [Qualitative Attribute](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Legends/QualitativeAttribute)
- [Scale Bar](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Legends/ScaleBar)

## Navigation

- [Breadcrumb](https://github.com/wri/wri-design-systems/tree/main/src/components/Navigation/Breadcrumb)
- [Footer](https://github.com/wri/wri-design-systems/tree/main/src/components/Navigation/Footer)
- [Mobile Tab Bar](https://github.com/wri/wri-design-systems/tree/main/src/components/Navigation/MobileTabBar)
- [Navbar](https://github.com/wri/wri-design-systems/tree/main/src/components/Navigation/Navbar)
- [Navigation Rail](https://github.com/wri/wri-design-systems/tree/main/src/components/Navigation/NavigationRail)
- [Pagination](https://github.com/wri/wri-design-systems/tree/main/src/components/Navigation/Pagination)
- [Tab Bar](https://github.com/wri/wri-design-systems/tree/main/src/components/Navigation/TabBar)

## Status

- [Avatar](https://github.com/wri/wri-design-systems/tree/main/src/components/Status/Avatar)
- [Badge](https://github.com/wri/wri-design-systems/tree/main/src/components/Status/Badge)
- [Inline Message](https://github.com/wri/wri-design-systems/tree/main/src/components/Status/InlineMessage)
- [Progress Bar](https://github.com/wri/wri-design-systems/tree/main/src/components/Status/ProgressBar)
- [Step Progress Indicator](https://github.com/wri/wri-design-systems/tree/main/src/components/Navigation/StepProgressIndicator)
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

## PR Label Rules

Use exactly one versioning label on every PR. The label drives the npm version bump when the PR is merged into `main`.

**How it works**

- Open a PR and add **one** of the labels below.
- The PR Label Guard workflow enforces that exactly one label is present.
- On merge, the Release & Publish workflow bumps `package.json`, tags, and publishes to npm for `major`, `minor`, or `patch`.
- `no-bump` skips all versioning and publishing.

**Label guide**

- `patch`: non-breaking fixes (styles, internal refactors, Storybook-only tweaks that do not change usage)
- `minor`: backwards-compatible feature or API additions (new component/prop), or behavior changes that may affect usage but are not breaking
- `major`: breaking changes (removed/renamed props, changed required behavior, incompatible defaults)
- `no-bump`: documentation-only or internal changes that should not publish

If you are unsure, choose `minor` and leave a note in the PR for review.
