export type TableProps = {
  columns: {
    key: string
    label: string
    sortable?: boolean
  }[]
  data: any
  renderRow: any
  striped?: boolean
  stickyHeader?: boolean
  selectable?: boolean
  selectedRows?: any
  pagination?: {
    totalItems: number
    currentPage: number
    pageSize: number
    showItemCount?: boolean
  }
  onSortColumn: (sortColumn: { key: string; order: string }) => void
  onPageSizeChange: (pageSize: number) => void
  onPageChange: (page: number) => void
  onAllItemsSelected?: (checked: boolean) => void
}
