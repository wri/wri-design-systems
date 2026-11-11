import type { ReactNode } from 'react'
import type { TableLabels } from '../../../lib/i18n/types'

export type { TableLabels }

export type TableColumn = {
  /** Unique key of the column, matching the row data field */
  key: string
  /** Header text of the column */
  label: string
  /** Whether the column shows ascending and descending sort buttons */
  sortable?: boolean
  /** Fixed width of the column, e.g. '12rem' */
  width?: string
  /** Optional custom renderer for this column cell */
  cell?: (row: any) => ReactNode
  /** When true, this column sticks to the left during horizontal scroll. */
  sticky?: boolean
}

export type TableRenderRowContext = {
  /** Class applied to the rendered row, e.g. 'selected' */
  className?: string
  /** Returns sticky and width props for the cells of a column key */
  getCellProps: (columnKey: string) => Record<string, any>
}

export type TableProps = {
  /** Column definitions that drive the header and default row rendering */
  columns: TableColumn[]
  /** Row data rendered in the table body. Defaults to `[]` */
  data?: any
  /** Custom row renderer for full control of the row markup */
  renderRow?: (row: any, context?: TableRenderRowContext) => ReactNode
  /** Whether to render rows with striped backgrounds */
  striped?: boolean
  /** Whether the header row sticks to the top while scrolling */
  stickyHeader?: boolean
  /** Whether to show a row selection checkbox column */
  selectable?: boolean
  /** Externally controlled selected rows; omit to use internal selection state */
  selectedRows?: any
  /** Table layout variant; full-width removes the outer border and shadow. Defaults to `'default'` */
  variant?: 'default' | 'full-width'
  /**
   * Pagination options for the footer; enables the pagination controls when set.
   * totalItems defaults to the data length, currentPage to 1, pageSize to 10
   */
  pagination?: {
    totalItems: number
    currentPage: number
    pageSize: number
    showItemCount?: boolean
    showItemCountText?: boolean
  }
  /** Called when a column sort changes; if omitted, Table sorts internally */
  onSortColumn?: (sortColumn: { key: string; order: string }) => void
  /** Called when a new page size is selected in the item count */
  onPageSizeChange?: (pageSize: number) => void
  /** Called when the page changes */
  onPageChange?: (page: number) => void
  /** Called when the select-all checkbox is toggled */
  onAllItemsSelected?: (checked: boolean) => void
  /** Called when a row checkbox is toggled */
  onRowSelected?: (row: any, checked: boolean) => void
  /** Whether to show a loading spinner below the table */
  loading?: boolean
  /** When set, the table scrolls vertically within this height and horizontally when it overflows its container (e.g. '400px', '60vh') */
  height?: string
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<TableLabels>
}
