# Pagination

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/navigation-pagination--docs)

[PaginationDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Navigation/Pagination/PaginationDemo.tsx)

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
  variant?: 'default' | 'compact' | 'compact-with-buttons'
  onPageChange?: (page: number) => void
}
```

## Compact

```tsx
<Pagination totalItems={100} pageSize={10} currentPage={1} variant='compact' />
```

## Compact With Buttons

```tsx
<Pagination
  totalItems={100}
  pageSize={10}
  currentPage={1}
  variant='compact-with-buttons'
/>
```
