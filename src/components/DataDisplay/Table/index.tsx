/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import React, { useState } from 'react'
import { Table as ChakraTable } from '@chakra-ui/react'
import { TableProps } from './types'
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
} from './styles'
import ItemCount from '../ItemCount'
import { ChevronDownIcon } from '../../icons'
import IconButton from '../../Forms/Actions/IconButton'
import Checkbox from '../../Forms/Controls/Checkbox'

const Table = ({
  columns,
  data,
  renderRow,
  striped,
  stickyHeader,
  pagination,
  selectable,
  selectedRows,
  variant = 'full-width',
  onSortColumn,
  onPageSizeChange,
  onPageChange,
  onAllItemsSelected,
}: TableProps) => {
  const [sortColumn, setSortColumn] = useState<{ key: string; order: string }>({
    key: '',
    order: '',
  })

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

  return (
    <div>
      <ChakraTable.Root
        css={tableContainerStyles(variant)}
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
                role={column.sortable ? 'columnheader' : undefined}
                aria-sort={
                  // eslint-disable-next-line no-nested-ternary
                  column.sortable && sortColumn.order === 'asc'
                    ? 'ascending'
                    : column.sortable && sortColumn.order === 'desc'
                      ? 'descending'
                      : undefined
                }
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
                        aria-label='Ascending'
                      />
                      <IconButton
                        css={tableHeaderSortButtonStyles(
                          sortColumn.key === column.key &&
                            sortColumn.order === 'desc',
                        )}
                        icon={<ChevronDownIcon />}
                        onClick={() => onSort(column.key, 'desc')}
                        aria-label='Descending'
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
            <React.Fragment key={item.id}>{renderRow(item)}</React.Fragment>
          ))}
        </ChakraTable.Body>
      </ChakraTable.Root>

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
