/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useState } from 'react'
import { Group, Button as ChakraButton, Box } from '@chakra-ui/react'
import {
  MenuDotsIcon,
  DoubleChevronRight,
  DoubleChevronLeft,
} from '../../../icons'
import Menu from '../Menu'
import ToolbarButton from './ToolbarButton'
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
    <div style={{ position: 'relative', display: 'flex', width: '48px' }}>
      <ToolbarButton
        isExpanded={isExpanded}
        ariaLabel={isExpanded ? 'Collapse' : 'Expand'}
        icon={<MenuDotsIcon />}
        showGap={false}
        vertical={vertical}
      />
    </div>
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
            <ToolbarButton
              key={item.ariaLabel}
              isExpanded={isExpanded}
              ariaLabel={item.ariaLabel}
              icon={item.icon}
              label={item.label}
              tooltip={item.tooltip}
              disabled={item.disabled}
              onClick={item.onClick}
              showGap={showGap}
              vertical={vertical}
            />
          )
        })}

        <div className='toolbar-overflow-menu'>
          <Menu
            label=''
            items={menuItems}
            onSelect={handleMenuSelect}
            customTrigger={overflowMenuTrigger}
          />
        </div>

        {showExpandedToggle && (
          <ToolbarButton
            isExpanded={isExpanded}
            ariaLabel={isExpanded ? 'Collapse' : 'Expand'}
            icon={isExpanded ? <DoubleChevronRight /> : <DoubleChevronLeft />}
            label='Collapse'
            onClick={() => setIsExpanded(!isExpanded)}
            showGap={false}
            vertical={vertical}
          />
        )}
      </Group>
    </div>
  )
}

export default Toolbar
