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
type CloseButtonLabels = {
  /** Fallback aria-label when none is provided via props. Default: "Close" */
  closeLabel: string
}

export type CloseButtonProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorPalette' | 'children' | '_loading'
> & {
  disabled?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<CloseButtonLabels>
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
