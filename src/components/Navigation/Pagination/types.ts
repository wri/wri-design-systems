import type { PaginationLabels } from '../../../lib/i18n/types'

export type { PaginationLabels }

export type PaginationProps = {
  /** Currently active page, applied as the initial page of the pagination */
  currentPage: number
  /** Total number of items across all pages */
  totalItems: number
  /** Number of items per page */
  pageSize: number
  /** Layout variant, compact variants show only the current page text. Defaults to `'default'` */
  variant?: 'default' | 'compact' | 'compact-with-buttons'
  /** Called with the selected page when it changes */
  onPageChange?: (page: number) => void
  /** Override internal UI labels for internationalization support */
  labels?: Partial<PaginationLabels>
}
