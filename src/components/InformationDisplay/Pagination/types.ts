export type PaginationProps = {
  currentPage: number
  totalItems: number
  pageSize: number
  variant?: 'default' | 'compact' | 'compact-with-buttons'
  onPageChange?: (page: number) => void
}
