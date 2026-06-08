/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import React, { useState, useRef, useEffect } from 'react'
import { Menu as ChakraMenu, Portal } from '@chakra-ui/react'
import MenuItem from './MenuItem'
import { MenuProps } from './types'
import {
  menuStyles,
  menuContentStyles,
  menuArrowStyles,
  menuItemGroupLabelStyles,
  menuSubmenuTriggerStyles,
} from './styled'
import { ChevronDownIcon } from '../../../icons'

const Menu = ({
  theme = 'light',
  label,
  hideArrow = false,
  fontSize,
  items,
  groups,
  onSelect,
  customTrigger,
  selectionMode,
  defaultSelectedValues = [],
  menuWidth = '14rem',
}: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState<Set<string>>(
    new Set(defaultSelectedValues),
  )
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  // Closes menu when trigger is out of viewport
  useEffect(() => {
    if (!isOpen || !triggerRef.current) return
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setIsOpen(false)
      },
      { threshold: 0.01 },
    )
    observer.observe(triggerRef.current)
    // eslint-disable-next-line consistent-return
    return () => {
      observer.disconnect()
    }
  }, [isOpen])

  return (
    <ChakraMenu.Root
      closeOnSelect={selectionMode !== 'multiple'}
      onSelect={({ value }) => {
        setSelectedValues((prev) => {
          const next = new Set(prev)
          if (selectionMode === 'radio') {
            next.clear()
            next.add(value)
          } else if (next.has(value)) {
            next.delete(value)
          } else {
            next.add(value)
          }
          return next
        })
        if (onSelect) onSelect(value)
      }}
      onOpenChange={({ open }) => setIsOpen(open)}
      open={isOpen}
    >
      <ChakraMenu.Trigger css={menuStyles(theme, fontSize)} asChild>
        {customTrigger || (
          <button type='button' ref={triggerRef}>
            {label}
            <ChevronDownIcon
              marginLeft='0.375rem'
              rotate={isOpen ? '180' : '0'}
              height='0.875rem'
              width='0.875rem'
            />
          </button>
        )}
      </ChakraMenu.Trigger>
      <Portal>
        <ChakraMenu.Positioner>
          <ChakraMenu.Content
            css={menuContentStyles(menuWidth)}
            role='menu'
            aria-label={label || 'Menu'}
          >
            {hideArrow ? null : <div css={menuArrowStyles} />}
            {items?.map((item, idx) => {
              if (item.submenu) {
                const [submenuOpen, setSubmenuOpen] = useState(false)
                return (
                  <ChakraMenu.Root
                    key={`${item.value}-${idx}`}
                    positioning={{ placement: 'right-start', gutter: 2 }}
                    onSelect={({ value }) => onSelect && onSelect(value)}
                    onOpenChange={({ open }) => setSubmenuOpen(open)}
                    open={submenuOpen}
                  >
                    <ChakraMenu.TriggerItem
                      css={menuSubmenuTriggerStyles}
                      role='menuitem'
                      aria-haspopup='true'
                      aria-expanded={submenuOpen ? 'true' : 'false'}
                    >
                      {item.label}
                      <ChevronDownIcon
                        rotate='270'
                        color='var(--chakra-colors-neutral-700)'
                      />
                    </ChakraMenu.TriggerItem>
                    <Portal>
                      <ChakraMenu.Positioner>
                        <ChakraMenu.Content
                          css={menuContentStyles(item.menuWidth)}
                          role='menu'
                          aria-label={`${item.label} submenu`}
                        >
                          {item.submenu.map((submenuItem, submenuIdx) => (
                            <MenuItem
                              key={submenuItem.value}
                              item={submenuItem}
                            />
                          ))}
                        </ChakraMenu.Content>
                      </ChakraMenu.Positioner>
                    </Portal>
                  </ChakraMenu.Root>
                )
              }

              return (
                <MenuItem
                  key={`${item.value}-${idx}`}
                  item={item}
                  isChecked={
                    !!selectionMode &&
                    selectedValues.has(item.value || item.label || '')
                  }
                />
              )
            })}

            {groups?.map((group, idx) => (
              <React.Fragment key={group.title}>
                <ChakraMenu.ItemGroup
                  role='group'
                  aria-labelledby={`group-${idx}`}
                >
                  <ChakraMenu.ItemGroupLabel
                    id={`group-${idx}`}
                    css={menuItemGroupLabelStyles}
                  >
                    {group.title}
                  </ChakraMenu.ItemGroupLabel>
                  {group.items?.map((groupItem) => (
                    <MenuItem
                      key={groupItem.value}
                      item={groupItem}
                      isChecked={
                        !!selectionMode &&
                        selectedValues.has(
                          groupItem.value || groupItem.label || '',
                        )
                      }
                    />
                  ))}
                </ChakraMenu.ItemGroup>
                {idx !== groups.length - 1 ? (
                  <ChakraMenu.Separator borderColor='var(--chakra-colors-neutral-300)' />
                ) : null}
              </React.Fragment>
            ))}
          </ChakraMenu.Content>
        </ChakraMenu.Positioner>
      </Portal>
    </ChakraMenu.Root>
  )
}

export default Menu
