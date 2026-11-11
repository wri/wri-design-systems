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

| Prop                | Type                         | Default | Description                                                   |
| ------------------- | ---------------------------- | ------- | ------------------------------------------------------------- |
| `currentPage`       | `number`                     | —       | Current 1-based page number used to compute the visible range |
| `labels`            | `Partial<ItemCountLabels>`   | —       | Override internal UI labels for internationalization support  |
| `onPageSizeChange`  | `(pageSize: number) => void` | —       | Called when a new page size is selected                       |
| `pageSize`          | `number`                     | —       | Number of items per page, shown as the selected page size     |
| `showItemCountText` | `boolean`                    | —       | Whether to show the "Showing X-Y of Z" text                   |
| `totalItems`        | `number`                     | —       | Total number of items across all pages                        |

### Supporting types

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
```
