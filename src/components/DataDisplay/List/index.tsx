/** @jsxImportSource @emotion/react */
import React from 'react'
import { Box } from '@chakra-ui/react'
import ListItem from './ListItem'
import { listContainerStyles } from './styled'
import { ListProps } from './types'

const List = ({ items, noBorder, highlightedIndex }: ListProps) => (
  <Box css={listContainerStyles(noBorder)}>
    {items.map((item, index) => (
      <ListItem
        id={item.id}
        key={item.id ?? (item.label as string)}
        icon={item.icon}
        label={item.label}
        caption={item.caption}
        value={item.value}
        variant={item.variant ?? 'data'}
        onItemClick={item.onItemClick}
        isHighlighted={index === highlightedIndex || item.isHighlighted}
      />
    ))}
  </Box>
)

export default List
