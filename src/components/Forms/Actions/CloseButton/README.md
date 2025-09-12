# CloseButton

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-actions-close-button--docs)

[CloseButtonDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Actions/CloseButton/CloseButtonDemo.tsx)

## Import

```tsx
import { CloseButton } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
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

```tsx
<CloseButton />
```

## Disabled

```tsx
<CloseButton disabled />
```
