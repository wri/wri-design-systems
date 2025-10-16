/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import ListItem from './ListItem'
import { listContainerStyles } from './styled'
import { ListProps } from './types'

const List = ({ items }: ListProps) => (
  <Box css={listContainerStyles}>
    {items.map((item) => (
      <ListItem
        id={item.id}
        key={item.id ?? item.label}
        icon={item.icon}
        label={item.label}
        caption={item.caption}
        value={item.value}
        variant={item.variant ?? 'data'}
        onItemClick={item.onItemClick}
      />
    ))}
  </Box>
)

export default List
