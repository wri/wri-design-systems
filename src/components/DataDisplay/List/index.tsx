/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import ListItem from './ListItem'
import { listContainerStyles } from './styled'
import { ListProps } from './types'

const List = ({ items }: ListProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    )
  }

  return (
    <Box css={listContainerStyles}>
      {items.map((item) => (
        <ListItem
          key={item.id ?? item.label}
          icon={item.icon}
          label={item.label}
          caption={item.caption}
          value={item.data}
          variant={item.variant ?? 'data'}
          onItemClick={
            item.variant === 'navigation'
              ? () => toggleItem(String(item.id))
              : undefined
          }
          isExpanded={item.id ? expandedItems.includes(String(item.id)) : false}
          id={item.id}
        />
      ))}
    </Box>
  )
}

export default List
