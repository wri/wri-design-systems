import type { TableLabels } from '../../../lib/i18n/types'

export type { TableLabels }

export type TableProps = {
  columns: {
    key: string
    label: string
    sortable?: boolean
  }[]
  data?: any
  renderRow: any
  striped?: boolean
  stickyHeader?: boolean
  selectable?: boolean
  selectedRows?: any
  variant?: 'default' | 'full-width'
  pagination?: {
    totalItems: number
    currentPage: number
    pageSize: number
    showItemCount?: boolean
    showItemCountText?: boolean
  }
  onSortColumn?: (sortColumn: { key: string; order: string }) => void
  onPageSizeChange?: (pageSize: number) => void
  onPageChange?: (page: number) => void
  onAllItemsSelected?: (checked: boolean) => void
  loading?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<TableLabels>
}
