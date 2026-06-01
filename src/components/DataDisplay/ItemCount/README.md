# Item Count

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/data-display-item-count--docs)

[ItemCountDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/DataDisplay/ItemCount/ItemCountDemo.tsx)

## Import

```tsx
import { ItemCount } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<ItemCount
  currentPage={1}
  totalItems={100}
  onPageSizeChange={(pageSize) => console.log(pageSize)}
/>
```

## Props

```ts
type ReactNodeLabel = ReactNode

type ItemCountLabels = {
  /**
   * Visible "Per Page" label text.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Per Page"
   */
  perPageLabel: ReactNodeLabel
  /**
   * Visible "Showing X-Y of Z" text.
   * Rendered as JSX child — accepts ReactNode.
   * Default fn provided.
   */
  showingLabel: (start: number, end: number, total: number) => ReactNode
}

type ItemCountProps = {
  pageSize: number
  currentPage: number
  totalItems: number
  onPageSizeChange?: (pageSize: number) => void
  showItemCountText?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<ItemCountLabels>
}
```
