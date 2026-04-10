import type { PaginationLabels } from '../../../lib/i18n/types'

export type { PaginationLabels }

export type PaginationProps = {
  currentPage: number
  totalItems: number
  pageSize: number
  variant?: 'default' | 'compact' | 'compact-with-buttons'
  onPageChange?: (page: number) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<PaginationLabels>
}
