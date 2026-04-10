import type { ItemCountLabels } from '../../../lib/i18n/types'

export type { ItemCountLabels }

export type ItemCountProps = {
  pageSize: number
  currentPage: number
  totalItems: number
  onPageSizeChange?: (pageSize: number) => void
  showItemCountText?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<ItemCountLabels>
}
