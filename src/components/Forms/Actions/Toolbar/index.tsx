/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useState } from 'react'
import { Group, Button as ChakraButton, Box } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon, MenuDotsIcon } from '../../../icons'
import Menu from '../Menu'
import { toolbarContainerStyles, toolbarBaseStyles } from './styled'
import { ToolbarProps } from './types'

const Toolbar = ({
  items,
  vertical = false,
  expanded = false,
  showExpandedToggle,
  ariaLabel,
  defaultGaps,
  breakpoint = 370,
}: ToolbarProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded)

  if (items.length === 1) {
    const item = items[0]

    return (
      <ChakraButton
        css={toolbarBaseStyles(isExpanded)}
        aria-label={item.ariaLabel}
        disabled={item.disabled}
        onClick={item.onClick}
      >
        {item.icon}
        <Box
          as='span'
          display='inline-block'
          overflow='hidden'
          whiteSpace='nowrap'
          transition='max-width 0.3s ease, opacity 0.2s ease, margin-left 0.3s ease'
          maxWidth={isExpanded ? '150px' : '0'}
          opacity={isExpanded ? 1 : 0}
          marginLeft={isExpanded ? '8px' : '0'}
        >
          {item.label}
        </Box>
      </ChakraButton>
    )
  }

  const toggleButton = showExpandedToggle ? (
    <ChakraButton
      css={toolbarBaseStyles(isExpanded)}
      onClick={() => setIsExpanded(!isExpanded)}
      aria-label={isExpanded ? 'Collapse' : 'Expand'}
    >
      <Box
        as='span'
        overflow='hidden'
        whiteSpace='nowrap'
        transition='max-width 0.3s ease, opacity 0.2s ease, margin-left 0.3s ease'
        maxWidth={isExpanded ? '150px' : '20px'}
        marginLeft={isExpanded ? '8px' : '0'}
      >
        <Box as='span'>
          {isExpanded ? (
            <>
              <ChevronRightIcon style={{ width: '20px', height: '12px' }} />
              <ChevronRightIcon
                style={{ width: '20px', height: '12px' }}
                ml='-12px'
              />
            </>
          ) : (
            <>
              <ChevronLeftIcon
                style={{ width: '20px', height: '12px' }}
                ml='-4px'
              />
              <ChevronLeftIcon
                style={{ width: '20px', height: '12px' }}
                ml='-14px'
              />
            </>
          )}
        </Box>
        {isExpanded && <>Collapse</>}
      </Box>
    </ChakraButton>
  ) : null

  const overflowItems = items.slice(3)

  const menuItems = overflowItems.map((item) => ({
    label: item.label,
    value: item.label,
    startIcon: item.icon,
    disabled: item.disabled,
  }))

  const handleMenuSelect = (value: string) => {
    const selectedItem = overflowItems.find((item) => item.label === value)
    if (selectedItem && selectedItem.onClick) {
      selectedItem.onClick()
    }
  }

  const overflowMenuTrigger = (
    <ChakraButton
      css={toolbarBaseStyles(false)}
      style={{ width: '32px', height: '32px' }}
      mr={defaultGaps && !vertical ? '16px' : '0'}
      mb={defaultGaps && vertical ? '16px' : '0'}
    >
      <Box as='span' maxWidth='20px'>
        <Box as='span' maxWidth='20px'>
          <MenuDotsIcon style={{ width: '20px', height: '12px' }} />
        </Box>
      </Box>
    </ChakraButton>
  )

  return (
    <div
      role='toolbar'
      aria-label={ariaLabel}
      css={toolbarContainerStyles(breakpoint)}
    >
      <Group
        orientation={vertical ? 'vertical' : 'horizontal'}
        attached
        display='grid'
        borderCollapse='collapse'
        gridAutoFlow={vertical ? 'row' : 'column'}
      >
        {items.map((item) => {
          const showGap =
            (defaultGaps && item.gap !== false) ||
            (!defaultGaps && item.gap === true)
          return (
            <ChakraButton
              className='toolbar-item-button'
              key={item.ariaLabel}
              css={toolbarBaseStyles(isExpanded)}
              aria-label={item.ariaLabel}
              disabled={item.disabled}
              onClick={item.onClick}
              mr={showGap && !vertical ? '16px' : '0'}
              mb={showGap && vertical ? '16px' : '0'}
            >
              <Box
                as='span'
                overflow='hidden'
                whiteSpace='nowrap'
                transition='max-width 0.3s ease, opacity 0.2s ease, margin-left 0.3s ease'
                maxWidth={isExpanded ? '150px' : '20px'}
                marginLeft={isExpanded ? '8px' : '0'}
              >
                <Box as='span' mr={item.icon ? '8px' : '0'}>
                  {item.icon}
                </Box>
                <span aria-hidden={!isExpanded}>
                  {/*  Hide the text from screen readers when collapsed to avoid redundancy */}
                  {item.label}
                </span>
              </Box>
            </ChakraButton>
          )
        })}

        <div className='toolbar-overflow-menu'>
          <Menu
            label='test'
            items={menuItems}
            onSelect={handleMenuSelect}
            customTrigger={overflowMenuTrigger}
          />
        </div>

        {toggleButton}
      </Group>
    </div>
  )
}

export default Toolbar
