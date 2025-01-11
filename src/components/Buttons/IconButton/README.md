# IconButton

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-buttons-icon-button--docs)

[IconButtonDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Buttons/IconButton/IconButtonDemo.tsx)

## Import

```js
import { IconButton } from '@worldresources/wri-design-systems'
```

## Usage

```html
<IconButton
  icon={<MenuDotsIcon />}
  aria-label='Menu'
/>
```

## Props

```ts
type IconButtonProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorPalette' | 'children' | '_loading'
> & {
  icon: React.ReactNode
  disabled?: boolean
}
```

## Default

```html
<IconButton
  icon={<MenuDotsIcon />}
  aria-label='Menu'
/>
```

## Disabled

```html
<IconButton
  icon={<InfoIcon />}
  aria-label='Info'
  disabled
/>
```
