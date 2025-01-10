# CloseButton

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/buttons-close-button--docs)

[CloseButtonDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Buttons/CloseButton/CloseButtonDemo.tsx)

## Import

```js
import { CloseButton } from '@worldresources/wri-design-systems'
```

## Usage

```html
<CloseButton />
```

## Props

```ts
type CloseButtonProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorPalette' | 'children' | '_loading'
> & {
  disabled?: boolean
}
```

## Default

```html
<CloseButton />
```

## Disabled

```html
<CloseButton disabled />
```
