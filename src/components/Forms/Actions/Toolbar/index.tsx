/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useState } from 'react'
import { Group, Menu as ChakraMenu, Portal } from '@chakra-ui/react'
import {
  MenuDotsIcon,
  DoubleChevronRight,
  DoubleChevronLeft,
} from '../../../icons'
import ToolbarButton from './ToolbarButton'
import { toolbarContainerStyles, overflowMenuItemStyles } from './styled'
import { ToolbarProps } from './types'
import { useToolbarOverflow } from './useToolbarOverflow'

const COLLAPSED_WIDTH = 48
const EXPANDED_LABEL_WIDTH = 100

const Toolbar = ({
  items,
  vertical = false,
  expanded = false,
  showExpandedToggle,
  ariaLabel,
  defaultGaps,
}: ToolbarProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded)
  const { containerRef, visibleNumberOfItems, shouldForceCollapse } =
    useToolbarOverflow({
      itemsCount: items.length,
      isExpanded,
      isVertical: vertical,
      collapsedWidth: COLLAPSED_WIDTH,
      expandedLabelWidth: EXPANDED_LABEL_WIDTH,
      gap: 16,
    })

  const visibleItems = items.slice(0, visibleNumberOfItems)
  const overflowItems = items.slice(visibleNumberOfItems, items.length)

  const menuItems = overflowItems.map((item) => ({
    label: item.label,
    startIcon: item.icon,
    disabled: item.disabled,
    onClick: item.onClick,
    itemAriaLabel: item.ariaLabel,
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

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      ref={containerRef}
      role='toolbar'
      aria-label={ariaLabel}
      css={toolbarContainerStyles}
    >
      <Group
        orientation={vertical ? 'vertical' : 'horizontal'}
        attached
        display='grid'
        borderCollapse='collapse'
        gridAutoFlow={vertical || items.length === 1 ? 'row' : 'column'}
      >
        {visibleItems.map((item) => {
          const showGap =
            (defaultGaps && item.gap !== false) ||
            (!defaultGaps && item.gap === true)

          return (
            <ToolbarButton
              key={item.ariaLabel}
              isExpanded={isExpanded && !shouldForceCollapse}
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

        {shouldForceCollapse && menuItems.length && (
          <ChakraMenu.Root
            onSelect={({ value }) => handleMenuSelect(value)}
            onOpenChange={({ open }) => setIsOpen(open)}
            open={isOpen}
          >
            <ChakraMenu.Trigger asChild>
              {overflowMenuTrigger}
            </ChakraMenu.Trigger>

            <Portal>
              <ChakraMenu.Positioner>
                <ChakraMenu.Content style={{ minWidth: 0, padding: 0 }}>
                  {menuItems.map(
                    ({ label, startIcon, onClick, itemAriaLabel }, index) => (
                      <ChakraMenu.Item
                        css={overflowMenuItemStyles}
                        value={label || ariaLabel || index.toString()}
                        role='menuitem'
                      >
                        <ToolbarButton
                          isExpanded={false}
                          icon={startIcon}
                          ariaLabel={itemAriaLabel}
                          label=''
                          onClick={onClick}
                          showGap={false}
                          vertical={vertical}
                        />
                      </ChakraMenu.Item>
                    ),
                  )}
                </ChakraMenu.Content>
              </ChakraMenu.Positioner>
            </Portal>
          </ChakraMenu.Root>
        )}

        {showExpandedToggle && !shouldForceCollapse && (
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
