/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { useState } from 'react'
import Select from '../../Forms/Inputs/Select'
import {
  itemCountContainerStyles,
  itemCountPerPageContainerStyles,
  itemCountPerPageLabelStyles,
} from './styles'
import { ItemCountProps } from './types'

const ItemCount = ({
  currentPage,
  totalItems,
  onPageSizeChange,
}: ItemCountProps) => {
  const [pageSize, setPageSize] = useState(['10'])

  const getPageInfo = () => {
    const localPageSize = parseInt(pageSize[0], 10)
    const startItem = (currentPage - 1) * localPageSize + 1
    const endItem = Math.min(startItem + localPageSize - 1, totalItems)

    return `Showing ${startItem}-${endItem} of ${totalItems}`
  }

  const handleSelectChange = (value: string[]) => {
    setPageSize(value)

    if (onPageSizeChange) {
      onPageSizeChange(parseInt(value[0], 10))
    }
  }

  return (
    <div css={itemCountContainerStyles}>
      <div css={itemCountPerPageContainerStyles}>
        <div style={{ width: '80px' }}>
          <Select
            defaultValue={pageSize}
            items={[
              {
                label: '10',
                value: '10',
              },
              {
                label: '20',
                value: '20',
              },
              {
                label: '50',
                value: '50',
              },
              {
                label: '100',
                value: '100',
              },
            ]}
            onChange={handleSelectChange}
            required
          />
        </div>
        <p css={itemCountPerPageLabelStyles}>Per Page</p>
      </div>
      <p css={itemCountPerPageLabelStyles}>{getPageInfo()}</p>
    </div>
  )
}

export default ItemCount
