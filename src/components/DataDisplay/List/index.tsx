/** @jsxImportSource @emotion/react */
import React from 'react'
import { Box } from '@chakra-ui/react'
import ListItem from './ListItem'
import { listContainerStyles } from './styled'
import { ListProps } from './types'

const List = ({ items, noBorder, highlightedIndex }: ListProps) => {
  // React keys prefer an explicit identity — id, then searchLabel, then the
  // label text for string labels — so keyed state follows the item on
  // reorder. The array index is a last resort (e.g. ReactNode labels without
  // an id or searchLabel). Duplicates are disambiguated with the index
  // instead of colliding on the same key.
  const seenKeys = new Set<string>()

  return (
    <Box css={listContainerStyles(noBorder)}>
      {items.map((item, index) => {
        const base =
          item.id ??
          item.searchLabel ??
          (typeof item.label === 'string' || typeof item.label === 'number'
            ? String(item.label)
            : undefined)

        let key = base ?? `list-item-${index}`
        while (seenKeys.has(key)) {
          key = `${key}-${index}`
        }
        seenKeys.add(key)

        return (
          <ListItem
            key={key}
            id={item.id}
            icon={item.icon}
            label={item.label}
            searchLabel={item.searchLabel}
            caption={item.caption}
            value={item.value}
            variant={item.variant ?? 'data'}
            onItemClick={item.onItemClick}
            ariaLabel={item.ariaLabel}
            isHighlighted={index === highlightedIndex || item.isHighlighted}
          />
        )
      })}
    </Box>
  )
}

export default List
