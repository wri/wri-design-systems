export type PaginationProps = {
  currentPage: number
  totalItems: number
  pageSize: number
  compact?: boolean
  onPageChange?: (page: number) => void
}
