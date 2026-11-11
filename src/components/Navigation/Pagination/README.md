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

| Prop           | Type                                               | Default     | Description                                                          |
| -------------- | -------------------------------------------------- | ----------- | -------------------------------------------------------------------- |
| `currentPage`  | `number`                                           | —           | Currently active page, applied as the initial page of the pagination |
| `labels`       | `Partial<PaginationLabels>`                        | —           | Override internal UI labels for internationalization support         |
| `onPageChange` | `(page: number) => void`                           | —           | Called with the selected page when it changes                        |
| `pageSize`     | `number`                                           | —           | Number of items per page                                             |
| `totalItems`   | `number`                                           | —           | Total number of items across all pages                               |
| `variant`      | `'default' \| 'compact' \| 'compact-with-buttons'` | `'default'` | Layout variant, compact variants show only the current page text     |

### Supporting types

```ts
type PaginationLabels = {
  /** Visible "Previous" button text. Default: "Previous" */
  previousLabel: string
  /** Visible "Next" button text. Default: "Next" */
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
