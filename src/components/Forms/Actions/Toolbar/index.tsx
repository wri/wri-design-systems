/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useState, useEffect, useMemo } from 'react'
import { Menu as ChakraMenu, Portal } from '@chakra-ui/react'
import { MenuDotsIcon, DoubleChevronLeftIcon } from '../../../icons'
import ToolbarButton from './ToolbarButton'
import {
  toolbarContainerStyles,
  toolbarGroupsStyles,
  toolbarAttachedGroupStyles,
  toolbarBaseStyles,
  toolbarItemSurfaceStyles,
  toolbarItemHighlightStyles,
  toolbarItemIconStyles,
  overflowMenuContentStyles,
  overflowMenuItemStyles,
  toolbarToggleIconStyles,
  toolbarMeasureStyles,
} from './styled'
import { ToolbarItem, ToolbarProps } from './types'
import { useToolbarOverflow } from './useToolbarOverflow'
import { useLabels } from '../../../../lib/i18n/useLabels'

const shouldSplitAfter = (item: ToolbarItem, defaultGaps?: boolean) =>
  (defaultGaps && item.gap !== false) || (!defaultGaps && item.gap === true)

const groupToolbarItems = (
  items: ToolbarItem[],
  defaultGaps?: boolean,
): ToolbarItem[][] => {
  const groups: ToolbarItem[][] = []
  let current: ToolbarItem[] = []

  items.forEach((item) => {
    current.push(item)
    if (shouldSplitAfter(item, defaultGaps)) {
      groups.push(current)
      current = []
    }
  })

  if (current.length) {
    groups.push(current)
  }

  return groups
}

const OverflowMeasureButton = ({
  vertical,
  expandSide,
  ariaLabel,
}: {
  vertical: boolean
  expandSide: ToolbarProps['expandSide']
  ariaLabel: string
}) => (
  <button
    type='button'
    tabIndex={-1}
    aria-hidden
    className='toolbar-item-button'
    aria-label={ariaLabel}
    css={toolbarBaseStyles(false, vertical, expandSide)}
  >
    <span
      className='toolbar-item-surface'
      css={toolbarItemSurfaceStyles(false, vertical, expandSide)}
    >
      <span css={toolbarItemHighlightStyles(false, vertical, expandSide)}>
        <span className='toolbar-item-icon' css={toolbarItemIconStyles}>
          <MenuDotsIcon />
        </span>
      </span>
    </span>
  </button>
)

const MeasureMode = ({
  mode,
  items,
  defaultGaps,
  vertical,
  expandSide,
  showExpandedToggle,
  expandLabel,
  collapseLabel,
  expandAriaLabel,
  collapseAriaLabel,
}: {
  mode: 'expanded' | 'collapsed'
  items: ToolbarItem[]
  defaultGaps?: boolean
  vertical: boolean
  expandSide: NonNullable<ToolbarProps['expandSide']>
  showExpandedToggle?: boolean
  expandLabel: React.ReactNode
  collapseLabel: React.ReactNode
  expandAriaLabel: string
  collapseAriaLabel: string
}) => {
  const showLabel = mode === 'expanded'
  const groups = groupToolbarItems(items, defaultGaps)

  return (
    <div data-toolbar-measure-mode={mode} css={toolbarMeasureStyles(vertical)}>
      {groups.map((group) => (
        <div
          key={`measure-${mode}-${group.map((item) => item.ariaLabel).join('-')}`}
          css={toolbarAttachedGroupStyles(vertical)}
        >
          {group.map((item) => (
            <span key={item.ariaLabel} data-toolbar-measure-item>
              <ToolbarButton
                isExpanded={showLabel}
                ariaLabel={item.ariaLabel}
                icon={item.icon}
                label={item.label}
                disabled={item.disabled}
                vertical={vertical}
                expandSide={expandSide}
                active={item.active}
              />
            </span>
          ))}
        </div>
      ))}

      <div
        data-toolbar-measure-overflow
        css={toolbarAttachedGroupStyles(vertical)}
      >
        <OverflowMeasureButton
          vertical={vertical}
          expandSide={expandSide}
          ariaLabel={expandAriaLabel}
        />
      </div>

      {showExpandedToggle ? (
        <div
          data-toolbar-measure-toggle
          css={toolbarAttachedGroupStyles(vertical)}
        >
          <ToolbarButton
            isExpanded={showLabel}
            ariaLabel={showLabel ? collapseAriaLabel : expandAriaLabel}
            icon={
              <span css={toolbarToggleIconStyles}>
                <DoubleChevronLeftIcon />
              </span>
            }
            label={showLabel ? collapseLabel : expandLabel}
            vertical={vertical}
            expandSide={expandSide}
          />
        </div>
      ) : null}
    </div>
  )
}

const Toolbar = ({
  items,
  vertical = false,
  expanded = false,
  showExpandedToggle,
  autoCollapse = false,
  expandSide = 'right',
  ariaLabel,
  defaultGaps,
  labels,
}: ToolbarProps) => {
  const l = useLabels('Toolbar', labels)
  const [isExpanded, setIsExpanded] = useState(expanded)

  const endsGroupKey = items
    .map((item) => `${item.ariaLabel}:${shouldSplitAfter(item, defaultGaps)}`)
    .join('|')
  const endsGroup = useMemo(
    () =>
      endsGroupKey.split('|').map((entry) => {
        const separator = entry.lastIndexOf(':')
        return entry.slice(separator + 1) === 'true'
      }),
    [endsGroupKey],
  )

  const {
    containerRef,
    measureRef,
    visibleNumberOfItems,
    shouldForceCollapse,
  } = useToolbarOverflow({
    itemsCount: items.length,
    isExpanded,
    isVertical: vertical,
    endsGroup,
    showExpandedToggle,
    autoCollapse,
  })

  useEffect(() => {
    setIsExpanded(expanded)
  }, [expanded])

  const visibleItems = items.slice(0, visibleNumberOfItems)
  const overflowItems = items.slice(visibleNumberOfItems, items.length)
  const itemGroups = groupToolbarItems(visibleItems, defaultGaps)
  const showLabels = isExpanded && !shouldForceCollapse

  const menuItems = overflowItems.map((item) => ({
    label: item.label,
    startIcon: item.icon,
    disabled: item.disabled,
    onClick: item.onClick,
    itemAriaLabel: item.ariaLabel,
    active: item.active,
  }))

  const handleMenuSelect = (value: string) => {
    const selectedItem = overflowItems.find((item) => item.ariaLabel === value)
    if (selectedItem && selectedItem.onClick) {
      selectedItem.onClick()
    }
  }

  const toggleRotation =
    (expandSide === 'left' ? 180 : 0) + (isExpanded ? 180 : 0)

  const overflowPlacement = (() => {
    if (!vertical) return 'bottom-end'
    return expandSide === 'left' ? 'left-start' : 'right-start'
  })()

  return (
    <div
      role='toolbar'
      aria-label={ariaLabel}
      css={toolbarContainerStyles(expandSide, autoCollapse, vertical)}
    >
      {autoCollapse ? (
        <div ref={measureRef} aria-hidden>
          <MeasureMode
            mode='expanded'
            items={items}
            defaultGaps={defaultGaps}
            vertical={vertical}
            expandSide={expandSide}
            showExpandedToggle={showExpandedToggle}
            expandLabel={l.expandLabel}
            collapseLabel={l.collapseLabel}
            expandAriaLabel={l.expandAriaLabel}
            collapseAriaLabel={l.collapseAriaLabel}
          />
          <MeasureMode
            mode='collapsed'
            items={items}
            defaultGaps={defaultGaps}
            vertical={vertical}
            expandSide={expandSide}
            showExpandedToggle={showExpandedToggle}
            expandLabel={l.expandLabel}
            collapseLabel={l.collapseLabel}
            expandAriaLabel={l.expandAriaLabel}
            collapseAriaLabel={l.collapseAriaLabel}
          />
        </div>
      ) : null}

      <div
        ref={containerRef}
        css={toolbarGroupsStyles(vertical, expandSide, autoCollapse)}
      >
        {itemGroups.map((group) => (
          <div
            key={group.map((item) => item.ariaLabel).join('-')}
            css={toolbarAttachedGroupStyles(vertical)}
          >
            {group.map((item) => (
              <ToolbarButton
                key={item.ariaLabel}
                isExpanded={showLabels}
                ariaLabel={item.ariaLabel}
                icon={item.icon}
                label={item.label}
                tooltip={item.tooltip}
                disabled={item.disabled}
                onClick={item.onClick}
                vertical={vertical}
                expandSide={expandSide}
                active={item.active}
              />
            ))}
          </div>
        ))}

        {overflowItems.length > 0 && (
          <div css={toolbarAttachedGroupStyles(vertical)}>
            <ChakraMenu.Root
              loopFocus
              positioning={{
                placement: overflowPlacement,
                gutter: 0,
              }}
              onSelect={({ value }) => handleMenuSelect(value)}
            >
              <ChakraMenu.Trigger asChild>
                <button
                  type='button'
                  className='toolbar-item-button'
                  aria-label={l.expandAriaLabel}
                  aria-haspopup='menu'
                  css={toolbarBaseStyles(false, vertical, expandSide)}
                >
                  <span
                    className='toolbar-item-surface'
                    css={toolbarItemSurfaceStyles(false, vertical, expandSide)}
                  >
                    <span
                      css={toolbarItemHighlightStyles(
                        false,
                        vertical,
                        expandSide,
                      )}
                    >
                      <span
                        className='toolbar-item-icon'
                        css={toolbarItemIconStyles}
                      >
                        <MenuDotsIcon />
                      </span>
                    </span>
                  </span>
                </button>
              </ChakraMenu.Trigger>

              <Portal>
                <ChakraMenu.Positioner>
                  <ChakraMenu.Content
                    css={overflowMenuContentStyles}
                    role='menu'
                    aria-label={l.expandAriaLabel}
                  >
                    {menuItems.map(
                      ({
                        label,
                        startIcon,
                        onClick,
                        itemAriaLabel,
                        disabled,
                        active,
                      }) => (
                        <ChakraMenu.Item
                          key={itemAriaLabel}
                          css={overflowMenuItemStyles}
                          value={itemAriaLabel}
                          disabled={disabled}
                          role={
                            typeof active === 'boolean'
                              ? 'menuitemcheckbox'
                              : 'menuitem'
                          }
                          aria-label={itemAriaLabel}
                          aria-checked={
                            typeof active === 'boolean' ? active : undefined
                          }
                          data-active={active || undefined}
                          onClick={onClick}
                        >
                          {startIcon}
                          <span>{label ?? itemAriaLabel}</span>
                        </ChakraMenu.Item>
                      ),
                    )}
                  </ChakraMenu.Content>
                </ChakraMenu.Positioner>
              </Portal>
            </ChakraMenu.Root>
          </div>
        )}

        {showExpandedToggle && (
          <div css={toolbarAttachedGroupStyles(vertical)}>
            <ToolbarButton
              isExpanded={showLabels}
              ariaLabel={isExpanded ? l.collapseAriaLabel : l.expandAriaLabel}
              icon={
                <span
                  css={toolbarToggleIconStyles}
                  style={{ transform: `rotate(${toggleRotation}deg)` }}
                >
                  <DoubleChevronLeftIcon />
                </span>
              }
              label={isExpanded ? l.collapseLabel : l.expandLabel}
              onClick={() => setIsExpanded(!isExpanded)}
              vertical={vertical}
              expandSide={expandSide}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Toolbar
