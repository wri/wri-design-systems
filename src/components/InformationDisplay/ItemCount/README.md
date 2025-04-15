# Item Count

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/information-display-item-count--docs)

[ItemCountDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/InformationDisplay/ItemCount/ItemCountDemo.tsx)

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
type ItemCountProps = {
  pageSize: number
  currentPage: number
  totalItems: number
  onPageSizeChange?: (pageSize: number) => void
  showItemCountText?: boolean
}
```
