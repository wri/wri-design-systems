export type ItemCountProps = {
  pageSize: number
  currentPage: number
  totalItems: number
  onPageSizeChange?: (pageSize: number) => void
}
