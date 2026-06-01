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

  const {
    totalItems = data.length,
    currentPage = 1,
    pageSize = 10,
    showItemCount,
    showItemCountText,
  } = pagination || {}

  const onSort = (columnKey: string, order: string) => {
    setSortColumn({ key: columnKey, order })

    if (onSortColumn) {
      onSortColumn({ key: columnKey, order })
    }
  }

  const allChecked = selectedRows?.length === data?.length
  const indeterminate = selectedRows && selectedRows.length > 0 && !allChecked
  const columnsByKey = useMemo(
    () =>
      columns.reduce<Record<string, TableColumn>>((acc, column) => {
        acc[column.key] = column
        return acc
      }, {}),
    [columns],
  )
  const stickyColumnKeys = columns
    .filter((column) => column.sticky)
    .map((column) => column.key)
  const lastStickyColumnKey =
    stickyColumnKeys.length > 0
      ? stickyColumnKeys[stickyColumnKeys.length - 1]
      : undefined

  const calculateStickyPositions = useCallback(() => {
    const nextOffsets: Record<string, number> = {}
    let offset = 0
    columns
      .filter((column) => column.sticky)
      .forEach((column) => {
        nextOffsets[column.key] = offset
        offset += headerCellRefs.current[column.key]?.offsetWidth || 0
      })
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

  const getColumnWidthProps = (columnKey: string) => {
    const width = columnsByKey[columnKey]?.width

    if (!width) {
      return {}
    }

    return {
      width,
      minWidth: width,
    }
  }

  const getStickyProps = (column: TableColumn) => {
    const offset = stickyOffsets[column.key]
    if (offset === undefined) return {}
    return {
      'data-sticky': 'start',
      'data-sticky-last':
        column.key === lastStickyColumnKey ? 'true' : undefined,
      left: `${offset}px`,
    }
  }

  const getCellProps = (columnKey: string) => {
    const widthProps = getColumnWidthProps(columnKey)
    const offset = stickyOffsets[columnKey]
    if (offset === undefined) return widthProps
    return {
      ...widthProps,
      'data-sticky': 'start',
      'data-sticky-last':
        columnKey === lastStickyColumnKey ? 'true' : undefined,
      left: `${offset}px`,
    }
  }

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
                    aria-label='Select all rows'
                    checked={allChecked}
                    indeterminate={indeterminate}
                    onCheckedChange={({ checked }: any) => {
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
            {data.map((item: any) => (
              <React.Fragment key={item.id}>
                {renderRow(item, {
                  className: selectedRows?.some(
                    (row: any) => row.id === item.id,
                  )
                    ? 'selected'
                    : undefined,
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
