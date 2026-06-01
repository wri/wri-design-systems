import type { ReactNode } from 'react'
import type { TableLabels } from '../../../lib/i18n/types'

export type { TableLabels }

export type TableColumn = {
  key: string
  label: string
  sortable?: boolean
  /** When true, this column sticks to the left during horizontal scroll. */
  sticky?: boolean
}

export type TableRenderRowContext = {
  className?: string
  getCellProps: (columnKey: string) => Record<string, any>
}

export type TableProps = {
  columns: TableColumn[]
  data?: any
  renderRow: (row: any, context?: TableRenderRowContext) => ReactNode
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
  /** When set, the table scrolls vertically within this height and horizontally when it overflows its container (e.g. '400px', '60vh'). */
  height?: string
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<TableLabels>
}
