import React from 'react'
import { Table as ChakraTable } from '@chakra-ui/react'
import Checkbox from '../../Forms/Controls/Checkbox'
import { TableColumn, TableRenderRowContext } from './types'
import { CHECKBOX_COLUMN_KEY, getStickyProps } from './utils'

type CreateDefaultRowRendererParams = {
  columns: TableColumn[]
  selectable?: boolean
  isRowSelected: (rowData: any) => boolean
  onRowSelected: (rowData: any, checked: boolean) => void
  stickyOffsets?: Record<string, number>
  lastStickyColumnKey?: string
  getSelectRowLabel: (name?: string, id?: string | number) => string
}

export const createDefaultRowRenderer = ({
  columns,
  selectable,
  isRowSelected,
  onRowSelected,
  stickyOffsets = {},
  lastStickyColumnKey,
  getSelectRowLabel,
}: CreateDefaultRowRendererParams) => {
  const defaultRowRenderer = (
    rowData: any,
    rowContext?: TableRenderRowContext,
  ) => {
    const { id, name } = rowData

    return (
      <ChakraTable.Row className={rowContext?.className}>
        {selectable ? (
          <ChakraTable.Cell
            {...getStickyProps(
              stickyOffsets,
              CHECKBOX_COLUMN_KEY,
              lastStickyColumnKey,
            )}
          >
            <Checkbox
              name={`checkbox-${id}`}
              aria-label={getSelectRowLabel(name, id)}
              checked={isRowSelected(rowData)}
              onCheckedChange={({ checked }: any) => {
                onRowSelected(rowData, checked)
              }}
            />
          </ChakraTable.Cell>
        ) : null}
        {columns.map((column) => (
          <ChakraTable.Cell
            key={column.key}
            {...rowContext?.getCellProps(column.key)}
          >
            {column.cell ? column.cell(rowData) : rowData?.[column.key]}
          </ChakraTable.Cell>
        ))}
      </ChakraTable.Row>
    )
  }

  return defaultRowRenderer
}
