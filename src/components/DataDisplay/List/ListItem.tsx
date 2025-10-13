/** @jsxImportSource @emotion/react */

import React from 'react'
import { Box, DataListItemValue, Flex, Icon, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '../../icons'
import IconButton from '../../Forms/Actions/IconButton'
import {
  listItemLabelStyles,
  listItemValueStyles,
  listItemNavigationButtonStyles,
  listItemIconStyles,
  listItemCaptionStyles,
} from './styled'
import { ListItemProps } from './types'

const ListItem = ({
  label,
  caption,
  icon,
  value,
  variant = 'data',
  onItemClick,
  isExpanded = false,
  id,
}: ListItemProps) => {
  const isClickable = variant === 'navigation' && !!onItemClick

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isClickable) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onItemClick?.()
    }
  }

  return (
    <Flex
      align='center'
      justify='space-between'
      px={4}
      py={3}
      bg='white'

      borderBottom='1px solid'
      borderColor='gray.200'
      cursor={isClickable ? 'pointer' : 'default'}
      _hover={isClickable ? { bg: '#f9f9f9' } : undefined}
      _active={isClickable ? { bg: '#f1f1f1' } : undefined}
      onClick={isClickable ? onItemClick : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={handleKeyDown}
      role={isClickable ? 'button' : undefined}
      aria-expanded={isClickable ? isExpanded : undefined}
      aria-controls={isClickable && id ? `item-content-${id}` : undefined}
    >
      <Flex gap={3} flex='1' overflow="hidden">
        {icon && (
          <Icon
            css={listItemIconStyles}
            as={icon.type as React.ElementType}
            boxSize={4}
          />
        )}
        <Box flex="1" minWidth={0}>
          <Text
            fontWeight={variant === 'navigation' ? '700' : '400'}
            css={listItemLabelStyles}
          >
            {label}
          </Text>

          {caption && (
            <Text css={listItemCaptionStyles}>
              {caption}
            </Text>
          )}
        </Box>
      </Flex>

      {variant === 'data' && value && (
        <Text css={listItemValueStyles}>{value}</Text>
      )}

      {variant === 'navigation' && isClickable && (
        <IconButton
          css={listItemNavigationButtonStyles}
          icon={<ChevronRightIcon />}
          onClick={onItemClick}
          aria-label={`Expand ${label}`}
          aria-expanded={isExpanded}
          aria-controls={id ? `item-content-${id}` : undefined}
        />
      )}
    </Flex>
  )
}

export default ListItem
