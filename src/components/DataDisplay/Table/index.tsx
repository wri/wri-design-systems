/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Table as ChakraTable, Spinner } from '@chakra-ui/react'
import { TableColumn, TableProps } from './types'
import Pagination from '../../Navigation/Pagination'
import {
  tableContainerStyles,
  tableFooterContainerStyles,
  tableHeaderContainerStyles,
  tableHeaderLabelStyles,
  tableHeaderSortButtonStyles,
  tableHeaderSortContainerStyles,
  tablePaginationContainerStyles,
  tableBodyStyles,
  tableLoaderStyles,
  tableScrollContainerStyles,
} from './styles'
import ItemCount from '../ItemCount'
import { ChevronDownIcon } from '../../icons'
import IconButton from '../../Forms/Actions/IconButton'
import Checkbox from '../../Forms/Controls/Checkbox'
import { getThemedColor } from '../../../lib/theme'
import { useLabels } from '../../../lib/i18n/useLabels'
import {
  calculateStickyOffsets,
  createColumnsByKey,
  getCellProps as getCellPropsHelper,
  getColumnWidthProps as getColumnWidthPropsHelper,
  getLastStickyColumnKey,
  getSortedDisplayData,
  getStickyColumnKeys,
  getStickyProps as getStickyPropsHelper,
  isRowSelected as isRowSelectedHelper,
  keepSelectedRowsInCurrentData,
  toggleSelectedRow,
} from './utils'
import { createDefaultRowRenderer } from './defaultRenderRow'

const Table = ({
  columns,
  data = [],
  renderRow,
  striped,
  stickyHeader,
  pagination,
  selectable,
  selectedRows,
  variant = 'default',
  onSortColumn,
  onPageSizeChange,
  onPageChange,
  onAllItemsSelected,
  onRowSelected,
  loading,
  height,
  labels,
}: TableProps) => {
  const l = useLabels('Table', labels)
  const [sortColumn, setSortColumn] = useState<{ key: string; order: string }>({
    key: '',
    order: '',
  })
  const headerCellRefs = useRef<Record<string, HTMLTableCellElement | null>>({})
  const [stickyOffsets, setStickyOffsets] = useState<Record<string, number>>({})
  const [internalSelectedRows, setInternalSelectedRows] = useState<any[]>([])

  const {
    totalItems = data.length,
    currentPage = 1,
    pageSize = 10,
    showItemCount,
    showItemCountText,
  } = pagination || {}
  const hasExternalSortHandler = Boolean(onSortColumn)

  const displayData = useMemo(
    () => getSortedDisplayData(data, sortColumn, hasExternalSortHandler),
    [data, hasExternalSortHandler, sortColumn],
  )

  const onSort = (columnKey: string, order: string) => {
    setSortColumn({ key: columnKey, order })

    if (onSortColumn) {
      onSortColumn({ key: columnKey, order })
    }
  }

  const effectiveSelectedRows = selectedRows ?? internalSelectedRows
  const allChecked =
    displayData.length > 0 &&
    effectiveSelectedRows.length === displayData.length
  const indeterminate =
    effectiveSelectedRows.length > 0 &&
    effectiveSelectedRows.length < displayData.length
  const columnsByKey = useMemo(() => createColumnsByKey(columns), [columns])
  const stickyColumnKeys = useMemo(
    () => getStickyColumnKeys(columns),
    [columns],
  )
  const lastStickyColumnKey = getLastStickyColumnKey(stickyColumnKeys)

  const calculateStickyPositions = useCallback(() => {
    const nextOffsets = calculateStickyOffsets(columns, headerCellRefs.current)
    setStickyOffsets(nextOffsets)
  }, [columns])

  useEffect(() => {
    calculateStickyPositions()
  }, [calculateStickyPositions, data.length])

  useEffect(() => {
    const onResize = () => {
      calculateStickyPositions()
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [calculateStickyPositions])

  useEffect(() => {
    if (selectedRows !== undefined) {
      return
    }

    setInternalSelectedRows((current) =>
      keepSelectedRowsInCurrentData(current, data),
    )
  }, [data, selectedRows])

  const getColumnWidthProps = (columnKey: string) =>
    getColumnWidthPropsHelper(columnsByKey, columnKey)

  const getStickyProps = (column: TableColumn) =>
    getStickyPropsHelper(stickyOffsets, column.key, lastStickyColumnKey)

  const getCellProps = (columnKey: string) =>
    getCellPropsHelper(
      columnsByKey,
      stickyOffsets,
      columnKey,
      lastStickyColumnKey,
    )

  const isRowSelected = (rowData: any) =>
    isRowSelectedHelper(effectiveSelectedRows, rowData)

  const handleRowSelected = (rowData: any, checked: boolean) => {
    if (selectedRows === undefined) {
      setInternalSelectedRows((current) =>
        toggleSelectedRow(current, rowData, checked),
      )
    }

    if (onRowSelected) {
      onRowSelected(rowData, checked)
    }
  }

  const defaultRenderRow = createDefaultRowRenderer({
    columns,
    selectable,
    isRowSelected,
    onRowSelected: handleRowSelected,
    getSelectRowLabel: (name?: string, id?: string | number) =>
      l.selectRowLabel(name, id),
  })

  const rowRenderer = renderRow || defaultRenderRow

  return (
    <div>
      <div css={height ? tableScrollContainerStyles(height) : undefined}>
        <ChakraTable.Root
          css={tableContainerStyles(variant, stickyHeader)}
          striped={striped}
          stickyHeader={stickyHeader}
          interactive
        >
          <ChakraTable.Header css={tableHeaderContainerStyles(variant)}>
            <ChakraTable.Row>
              {selectable ? (
                <ChakraTable.ColumnHeader>
                  <Checkbox
                    name='header-checkbox'
                    aria-label={l.selectAllRowsLabel}
                    checked={allChecked}
                    indeterminate={indeterminate}
                    onCheckedChange={({ checked }: any) => {
                      if (selectedRows === undefined) {
                        setInternalSelectedRows(checked ? displayData : [])
                      }

                      if (onAllItemsSelected) {
                        onAllItemsSelected(checked)
                      }
                    }}
                  />
                </ChakraTable.ColumnHeader>
              ) : null}
              {columns.map((column) => (
                <ChakraTable.ColumnHeader
                  key={column.key}
                  ref={(node: HTMLTableCellElement | null) => {
                    headerCellRefs.current[column.key] = node
                  }}
                  {...getColumnWidthProps(column.key)}
                  role={column.sortable ? 'columnheader' : undefined}
                  aria-sort={
                    // eslint-disable-next-line no-nested-ternary
                    column.sortable && sortColumn.order === 'asc'
                      ? 'ascending'
                      : column.sortable && sortColumn.order === 'desc'
                        ? 'descending'
                        : undefined
                  }
                  {...getStickyProps(column)}
                >
                  <div css={tableHeaderLabelStyles}>
                    {column.label}
                    {column.sortable ? (
                      <div css={tableHeaderSortContainerStyles}>
                        <IconButton
                          css={tableHeaderSortButtonStyles(
                            sortColumn.key === column.key &&
                              sortColumn.order === 'asc',
                          )}
                          icon={
                            <ChevronDownIcon
                              style={{ transform: 'rotate(180deg)' }}
                            />
                          }
                          onClick={() => onSort(column.key, 'asc')}
                          aria-label={l.ascendingLabel}
                        />
                        <IconButton
                          css={tableHeaderSortButtonStyles(
                            sortColumn.key === column.key &&
                              sortColumn.order === 'desc',
                          )}
                          icon={<ChevronDownIcon />}
                          onClick={() => onSort(column.key, 'desc')}
                          aria-label={l.descendingLabel}
                        />
                      </div>
                    ) : null}
                  </div>
                </ChakraTable.ColumnHeader>
              ))}
            </ChakraTable.Row>
          </ChakraTable.Header>
          <ChakraTable.Body css={tableBodyStyles}>
            {displayData.map((item: any) => (
              <React.Fragment key={item.id}>
                {rowRenderer(item, {
                  className: isRowSelected(item) ? 'selected' : undefined,
                  getCellProps,
                })}
              </React.Fragment>
            ))}
          </ChakraTable.Body>
        </ChakraTable.Root>
      </div>
      {loading ? (
        <div css={tableLoaderStyles}>
          <Spinner size='lg' color={getThemedColor('primary', 500)} />
        </div>
      ) : null}

      <div css={tableFooterContainerStyles}>
        <div>
          {showItemCount ? (
            <ItemCount
              pageSize={pageSize}
              currentPage={currentPage}
              totalItems={totalItems}
              onPageSizeChange={onPageSizeChange}
              showItemCountText={showItemCountText}
            />
          ) : null}
        </div>
        {pagination ? (
          <div css={tablePaginationContainerStyles}>
            <Pagination
              totalItems={totalItems}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Table

export const TableRow = ChakraTable.Row

export const TableCell = ChakraTable.Cell
