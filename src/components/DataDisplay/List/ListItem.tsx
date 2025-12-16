/** @jsxImportSource @emotion/react */
import React from 'react'
import { Box, chakra, Flex, Icon, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '../../icons'
import {
  listItemLabelStyles,
  listItemValueStyles,
  listItemIconStyles,
  listItemCaptionStyles,
  listItemDataStyles,
  listItemNavigationStyles,
} from './styled'
import { ListItemProps } from './types'
import { getThemedColor } from '../../../lib/theme'

const ListItem = ({
  id,
  label,
  caption,
  icon,
  value,
  variant = 'data',
  onItemClick,
  isExpanded = false,
  ariaLabel,
  disabled = false,
  isHighlighted = false,
}: ListItemProps) => {
  const isClickable =
    (variant === 'navigation' || variant === 'select') && !!onItemClick

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isClickable) return
    if (e.key === 'Enter' || e.key === ' ') {
      onItemClick?.()
    }
  }

  const Container = isClickable ? chakra.button : chakra.div
  const computedAriaLabel =
    ariaLabel || (variant === 'data' && value ? `${label}, ${value}` : label)

  return (
    <Container
      id={id}
      css={[
        variant === 'data' ? listItemDataStyles : listItemNavigationStyles,
        isHighlighted && {
          backgroundColor: getThemedColor('neutral', 200),
        },
      ]}
      onClick={isClickable ? onItemClick : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={handleKeyDown}
      role={isClickable ? 'button' : undefined}
      aria-expanded={isClickable ? isExpanded : undefined}
      aria-label={computedAriaLabel}
      disabled={disabled}
      aria-selected={isHighlighted}
    >
      <Flex gap={3} flex='1' overflow='hidden'>
        {icon}
        <Box flex='1' minWidth={0}>
          <Text
            fontWeight={variant === 'data' ? '400' : '700'}
            css={listItemLabelStyles(disabled)}
          >
            {label}
          </Text>
          {caption && <Text css={listItemCaptionStyles}>{caption}</Text>}
        </Box>
      </Flex>

      {variant === 'data' && value && (
        <Text css={listItemValueStyles}>{value}</Text>
      )}

      {variant === 'navigation' && (
        <Icon
          as={ChevronRightIcon}
          boxSize={4}
          aria-hidden='true'
          css={listItemIconStyles(disabled)}
        />
      )}
    </Container>
  )
}

export default ListItem
