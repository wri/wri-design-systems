# Pagination

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/information-display-pagination--docs)

[PaginationDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/InformationDisplay/Pagination/PaginationDemo.tsx)

## Import

```tsx
import { Pagination } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Pagination totalItems={50} pageSize={10} currentPage={1} />
```

## Props

```ts
type PaginationProps = {
  currentPage: number
  totalItems: number
  pageSize: number
  compact?: boolean
  onPageChange?: (page: number) => void
}
```

## Compact Pagination

```tsx
<Pagination totalItems={100} pageSize={10} currentPage={1} compact />
```
