import type { ItemCountLabels } from '../../../lib/i18n/types'

export type { ItemCountLabels }

export type ItemCountProps = {
  /** Number of items per page, shown as the selected page size */
  pageSize: number
  /** Current 1-based page number used to compute the visible range */
  currentPage: number
  /** Total number of items across all pages */
  totalItems: number
  /** Called when a new page size is selected */
  onPageSizeChange?: (pageSize: number) => void
  /** Whether to show the "Showing X-Y of Z" text */
  showItemCountText?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<ItemCountLabels>
}
