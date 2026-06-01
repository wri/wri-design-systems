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
type PaginationLabels = {
  /**
   * Visible "Previous" button text.
   * Passed directly to Button.label (string).
   * Default: "Previous"
   */
  previousLabel: string
  /**
   * Visible "Next" button text.
   * Passed directly to Button.label (string).
   * Default: "Next"
   */
  nextLabel: string
  /** aria-label on the previous icon button. Default: "Previous page" */
  previousPageLabel: string
  /** aria-label on the next icon button. Default: "Next page" */
  nextPageLabel: string
  /** aria-label on the nav container. Default: "Pagination" */
  paginationLabel: string
  /** aria-label per page button, e.g. "Page 3". Default fn provided. */
  pageLabel: (page: number) => string
}

type PaginationProps = {
  currentPage: number
  totalItems: number
  pageSize: number
  variant?: 'default' | 'compact' | 'compact-with-buttons'
  onPageChange?: (page: number) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<PaginationLabels>
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
