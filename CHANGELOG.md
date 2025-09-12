# Changelog

## [v2.133.0] - WIP

## [v2.131.1] - WIP

## Updates

[Modal] - from Overlays/Modal to Containers/Modal

## [v2.131.0] - 09-10-2025

## New Components

- [Progress Bar](https://github.com/wri/wri-design-systems/tree/main/src/components/Status/ProgressBar)

## [v2.130.1] - 09-09-2025

## Fixes

- [Sheet] - footer white background

## [v2.130.0] - 09-01-2025

## New Components

- [Sheet](https://github.com/wri/wri-design-systems/tree/main/src/components/Containers/Sheet)

## Fixes

- [Panel] - moved Panel folder structure to Containers
- [Panel] - adding README

## [v2.129.0] - 08-25-2025

## New Components

- [Panel](https://github.com/wri/wri-design-systems/tree/main/src/components/Containers/Panel)

## Fixes

- [LayerItem] - width 100%
- [LayerGroup] - width 100%
- [LayerPanel] - not a component any more, it's now a Panel demo
- [LegendItem] - width 100%
- [LegendPanel] - not a component any more, it's now a Panel demo

## [v2.128.2] - 08-23-2025

## New Features

- [Badge] - adding "label" prop + UI for mobile and tablet

## [v2.128.1] - 08-20-2025

## Fixes

- [Navbar] - updating hover for menu elements in dark background

## [v2.128.0] - 08-19-2025

## New Components

- [DS-80] - [Navbar]

## New Features

- [Menu] - adding customTrigger prop + UI improvements
- [NavigationRail] - replacing "customHeight" with "navbarHeight" and "footerHeight"

## Fixes

- [Badge] - minor UI updates

## [v2.127.1] - 08-12-2025

## Fixes

- [TextInput] - minor UI fixes
- [Table] - onSortColumn, onPageSizeChange, onPageChange props as optionals
- [NavigationRail] - onFocusChange was causing the content to be hidden on click
- [TabBar] - onFocusChange was causing the content to be hidden on click

## [v2.127.0] - 08-03-2025

## New Features

- [Pagination] - adding "compact-with-buttons" variant

## [v2.126.3] - 05-23-2025

## Fixes

- [QualitativeAttribute] - removing min-height

## [v2.126.2] - 05-23-2025

## Fixes

- [QualitativeAttribute] - centering line indicator

## [v2.126.1] - 05-08-2025

## New Components

- [SSOButtons] - finally exported - LOL

## New Features

- [DS-184] - [SSOButtons] - Microsoft Button preset

## [v2.126.0] - 05-06-2025

## New Components

- [DS-182] - [Step Bar](https://github.com/wri/wri-design-systems/tree/main/src/components/Navigation/StepBar)

## New Features

- [DS-184] - [SSOButtons] - Google, Facebook and X Button presets

## [v2.124.0] - 04-30-2025

## New Features

- Modal - blocking variant

## Renaming

- Modal - "isDraggable" prop to "draggable"

## [v2.123.0] - 04-29-2025

## New Components

- [DS-133] - [Menu](https://github.com/wri/wri-design-systems/tree/main/src/components/Overlays/Menu)
- [DS-148] - [Checkbox Option Card](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Controls/CheckboxOptionCard)
- [DS-110] - [Modal](https://github.com/wri/wri-design-systems/tree/main/src/components/Containers/Modal)

## New Features

- [DS-141] - Radio List - card variant

## Renaming

- OptionCard
  - OptionCardGroup not exported anymore
  - changed the way to implement the component

## Other

- RadioList - adding a container in storybook
- Adding CHANGELOG file

## [v2.122.0] - 04-15-2025

## New Features

- [DS-155] - Update Color palette
  - New colors
  - Accessible colors
  - getThemedColors updates
- [DS-157] - Incorporate double focus border
- [DS-156] - Change component colours
- [DS-173] - Item count - "Showing..." as optional

## Fixes

- [DS-111] - adding cursor pointer to radio, checkboxes, and switch labels

## [v2.121.0] - 04-02-2025

## Other

- Slider - onValueChange fix

## [v2.119.0] - 04-01-2025

## New Components

- [Map Control](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Buttons/MapControl)
- [Icon Marker](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/IconMarker)
- [Item Count](https://github.com/wri/wri-design-systems/tree/main/src/components/InformationDisplay/ItemCount)
- [Pagination](https://github.com/wri/wri-design-systems/tree/main/src/components/InformationDisplay/Pagination)
- [Table](https://github.com/wri/wri-design-systems/tree/main/src/components/InformationDisplay/Table)

## New Features

- export getThemedColor

## Other

- @chakra-ui/react version to 3.14.2
- Icon Button - Background color fixes
- Select - placeholder not required
- Textarea - label not required

## [v2.117.0] - 03-09-2025

## Migration

- removing @emotion/styled dependency
- updating node version to v22.14.0
- now defaultSystemStyles from @worldresources/wri-design-systems

## New Components

- [Footer](https://github.com/wri/wri-design-systems/tree/main/src/components/Navigation/Footer)
- [Password Input](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Inputs/PasswordInput)
- [Badge](https://github.com/wri/wri-design-systems/tree/main/src/components/Status/Badge)
- [Input With Units](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Inputs/InputWithUnits)

## Other

- Select - minor fixes
- Minor Storybook fixes
- Minor fixes

## [v2.0.0] - 02-05-2025

## New Components

- [Checkbox List](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Inputs/CheckboxList)
- [Radio List](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Inputs/RadioList)
- [Toast](https://github.com/wri/wri-design-systems/tree/main/src/components/Status/Toast)
- [SliderInput](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Inputs/SliderInput)
- [OptionCard](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Controls/OptionCard)

## Renaming

- RadioGroup prop "isRow" to "horizontal"
- Select props "label" not required
- Tag size='small’ not closable
- LayerItem fixing disabled status
- Slider - removed "defaultValue" prop

## Other

- Opacity Control % fixes
- LegendItem minor aria related fixes
- Slider minor fixes
- Slider value on focus
- Tag minor UI fixes
- TextInput & TextArea error handling fixes
- Minor fixes

## [v1.2.0] - 01-23-2025

## New Components

- [Legend Panel](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Legends/LegendPanel)
- [Scale Bar](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Legends/ScaleBar)
- [Select](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Inputs/Select)
- [Multi Action Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Buttons/MultiActionButton)

## Renaming

- QualitativeLegend to [Qualitative Attribute](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Legends/QualitativeAttribute)
- ScaleLegend to [Scale Bar](https://github.com/wri/wri-design-systems/tree/main/src/components/Geospatial/Legends/ScaleBar)

## Other

- Change structure Storybook <> ZeroHeight
- Minor fixes

## [v1.0.1] - 01-09-2025

### General

- [Inline Message](https://github.com/wri/wri-design-systems/tree/main/src/components/InlineMessage)
- [Navigation Rail](https://github.com/wri/wri-design-systems/tree/main/src/components/NavigationRail)
- [Slider](https://github.com/wri/wri-design-systems/tree/main/src/components/Slider)
- [Tab Bar](https://github.com/wri/wri-design-systems/tree/main/src/components/TabBar)
- [Tag](https://github.com/wri/wri-design-systems/tree/main/src/components/Tag)

### Buttons

- [Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Buttons/Button)
- [Close Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Buttons/CloseButton)
- [Icon Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Buttons/IconButton)

### Controls

- [Checkbox](https://github.com/wri/wri-design-systems/tree/main/src/components/Checkbox)
- [Radio Button](https://github.com/wri/wri-design-systems/tree/main/src/components/Radio)
- [Switch](https://github.com/wri/wri-design-systems/tree/main/src/components/Switch)

### Inputs

- [Text Input](https://github.com/wri/wri-design-systems/tree/main/src/components/TextInput)
- [Text Area](https://github.com/wri/wri-design-systems/tree/main/src/components/Textarea)

### Layers

- [Layer Group](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerGroup)
- [Layer Item](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerItem)
- [Layer Panel](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerPanel)
- [Layer Sidebar](https://github.com/wri/wri-design-systems/tree/main/src/components/Layer/LayerSidebar)

### Legend

- [Layer Parameters](https://github.com/wri/wri-design-systems/tree/main/src/components/Legend/LayerParameters)
- [Legend Item](https://github.com/wri/wri-design-systems/tree/main/src/components/Legend/LegendItem)
- [Legend Panel](https://github.com/wri/wri-design-systems/tree/main/src/components/Legend/LegendPanel)
- [Qualitative Attributes](https://github.com/wri/wri-design-systems/tree/main/src/components/Legend/QualitativeLegend)
- [Scale Legend](https://github.com/wri/wri-design-systems/tree/main/src/components/Legend/ScaleLegend)
