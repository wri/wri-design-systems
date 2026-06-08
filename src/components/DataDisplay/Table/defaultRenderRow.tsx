import React from 'react'
import { Table as ChakraTable } from '@chakra-ui/react'
import Checkbox from '../../Forms/Controls/Checkbox'
import { TableColumn, TableRenderRowContext } from './types'

type CreateDefaultRowRendererParams = {
  columns: TableColumn[]
  selectable?: boolean
  isRowSelected: (rowData: any) => boolean
  onRowSelected: (rowData: any, checked: boolean) => void
  getSelectRowLabel: (name: string, id: string) => string
}

export const createDefaultRowRenderer = ({
  columns,
  selectable,
  isRowSelected,
  onRowSelected,
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
          <ChakraTable.Cell>
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
