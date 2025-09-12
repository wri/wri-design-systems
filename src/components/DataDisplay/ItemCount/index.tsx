/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import Select from '../../Forms/Inputs/Select'
import {
  itemCountContainerStyles,
  itemCountPerPageContainerStyles,
  itemCountPerPageLabelStyles,
} from './styles'
import { ItemCountProps } from './types'

const ItemCount = ({
  pageSize,
  currentPage,
  totalItems,
  onPageSizeChange,
  showItemCountText,
}: ItemCountProps) => {
  const getPageInfo = () => {
    const localPageSize = pageSize
    const startItem = (currentPage - 1) * localPageSize + 1
    const endItem = Math.min(startItem + localPageSize - 1, totalItems)

    return `Showing ${startItem}-${endItem} of ${totalItems}`
  }

  const handleSelectChange = (value: string[]) => {
    if (onPageSizeChange) {
      onPageSizeChange(parseInt(value[0], 10))
    }
  }

  return (
    <div css={itemCountContainerStyles}>
      <div css={itemCountPerPageContainerStyles}>
        <div style={{ width: '80px' }}>
          <Select
            defaultValue={[`${pageSize}`]}
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
      {showItemCountText ? (
        <p css={itemCountPerPageLabelStyles}>{getPageInfo()}</p>
      ) : null}
    </div>
  )
}

export default ItemCount
