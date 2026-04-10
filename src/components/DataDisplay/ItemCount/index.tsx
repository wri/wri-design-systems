/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import Select from '../../Forms/Inputs/Select'
import {
  itemCountContainerStyles,
  itemCountPerPageContainerStyles,
  itemCountPerPageLabelStyles,
} from './styles'
import { ItemCountProps } from './types'
import { useLabels } from '../../../lib/i18n/useLabels'

const ItemCount = ({
  pageSize,
  currentPage,
  totalItems,
  onPageSizeChange,
  showItemCountText,
  labels,
}: ItemCountProps) => {
  const l = useLabels('ItemCount', labels)
  const startItem = (currentPage - 1) * pageSize + 1
  const endItem = Math.min(startItem + pageSize - 1, totalItems)

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
        <p css={itemCountPerPageLabelStyles}>{l.perPageLabel}</p>
      </div>
      {showItemCountText ? (
        <p css={itemCountPerPageLabelStyles}>
          {l.showingLabel(startItem, endItem, totalItems)}
        </p>
      ) : null}
    </div>
  )
}

export default ItemCount
