import { TableColumn } from './types'

type SortColumnState = {
  key: string
  order: string
}

export const createColumnsByKey = (columns: TableColumn[]) =>
  columns.reduce<Record<string, TableColumn>>((acc, column) => {
    acc[column.key] = column
    return acc
  }, {})

export const getStickyColumnKeys = (columns: TableColumn[]) =>
  columns.filter((column) => column.sticky).map((column) => column.key)

export const getLastStickyColumnKey = (stickyColumnKeys: string[]) =>
  stickyColumnKeys.length > 0
    ? stickyColumnKeys[stickyColumnKeys.length - 1]
    : undefined

export const CHECKBOX_COLUMN_KEY = '__checkbox__'

export const calculateStickyOffsets = (
  columns: TableColumn[],
  headerCellRefs: Record<string, HTMLTableCellElement | null>,
  checkboxCellRef?: HTMLTableCellElement | null, // 👈
) => {
  const nextOffsets: Record<string, number> = {}
  let offset = 0

  const stickyColumns = columns.filter((column) => column.sticky)

  // only add the checkbox column offset if there are sticky columns
  if (checkboxCellRef && stickyColumns.length > 0) {
    nextOffsets[CHECKBOX_COLUMN_KEY] = 0
    offset += checkboxCellRef.offsetWidth
  }

  stickyColumns.forEach((column) => {
    nextOffsets[column.key] = offset
    offset += headerCellRefs[column.key]?.offsetWidth || 0
  })

  return nextOffsets
}

export const getColumnWidthProps = (
  columnsByKey: Record<string, TableColumn>,
  columnKey: string,
) => {
  const width = columnsByKey[columnKey]?.width

  if (!width) {
    return {}
  }

  return {
    width,
    minWidth: width,
  }
}

export const getStickyProps = (
  stickyOffsets: Record<string, number>,
  columnKey: string,
  lastStickyColumnKey?: string,
) => {
  const offset = stickyOffsets[columnKey]

  if (offset === undefined) {
    return {}
  }

  return {
    'data-sticky': 'start',
    'data-sticky-last': columnKey === lastStickyColumnKey ? 'true' : undefined,
    left: `${offset}px`,
  }
}

export const getCellProps = (
  columnsByKey: Record<string, TableColumn>,
  stickyOffsets: Record<string, number>,
  columnKey: string,
  lastStickyColumnKey?: string,
) => {
  const widthProps = getColumnWidthProps(columnsByKey, columnKey)
  const stickyProps = getStickyProps(
    stickyOffsets,
    columnKey,
    lastStickyColumnKey,
  )

  return {
    ...widthProps,
    ...stickyProps,
  }
}

export const keepSelectedRowsInCurrentData = (selected: any[], data: any[]) => {
  const filtered = selected.filter((row) =>
    data.some((item) => item.id === row.id),
  )

  const unchanged =
    filtered.length === selected.length &&
    filtered.every((row, index) => row.id === selected[index]?.id)

  return unchanged ? selected : filtered
}
export const toggleSelectedRow = (
  current: any[],
  rowData: any,
  checked: boolean,
) => {
  if (checked) {
    if (current.some((row) => row.id === rowData.id)) {
      return current
    }

    return [...current, rowData]
  }

  return current.filter((row) => row.id !== rowData.id)
}

export const isRowSelected = (selectedRows: any[], rowData: any) =>
  selectedRows.some((row) => row.id === rowData.id)

const compareBySortOrder = (valueA: any, valueB: any, isAscending: boolean) => {
  if (valueA == null && valueB == null) return 0
  if (valueA == null) return 1
  if (valueB == null) return -1

  if (typeof valueA === 'string' && typeof valueB === 'string') {
    return isAscending
      ? valueA.localeCompare(valueB)
      : valueB.localeCompare(valueA)
  }

  if (typeof valueA === 'number' && typeof valueB === 'number') {
    return isAscending ? valueA - valueB : valueB - valueA
  }

  const stringA = String(valueA)
  const stringB = String(valueB)

  return isAscending
    ? stringA.localeCompare(stringB)
    : stringB.localeCompare(stringA)
}

export const getSortedDisplayData = (
  data: any[],
  sortColumn: SortColumnState,
  hasExternalSortHandler: boolean,
) => {
  if (hasExternalSortHandler || !sortColumn.key) {
    return data
  }

  const { key, order } = sortColumn
  const isAscending = order === 'asc'

  return [...data].sort((a: any, b: any) =>
    compareBySortOrder(a?.[key], b?.[key], isAscending),
  )
}
