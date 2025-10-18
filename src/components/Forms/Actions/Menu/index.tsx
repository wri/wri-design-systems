/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import React, { useState } from 'react'
import { Menu as ChakraMenu, Portal } from '@chakra-ui/react'
import { MenuItemProps, MenuProps } from './types'
import {
  menuStyles,
  menuContentStyles,
  menuItemContainerStyles,
  menuItemGroupLabelStyles,
  menuItemLabelAndCaptionStyles,
  menuItemLabelContentStyles,
  menuSubmenuTriggerStyles,
} from './styled'
import { ChevronDownIcon } from '../../../icons'

const MenuItem = ({
  item,
  isLast,
}: {
  item: MenuItemProps
  isLast: boolean
}) => (
  <>
    <ChakraMenu.Item
      css={menuItemContainerStyles}
      value={item.value || item.label || ''}
      disabled={item.disabled}
      role='menuitem'
      aria-label={item.label}
    >
      {item.children ? (
        item.children
      ) : (
        <>
          {item.startIcon}
          <div
            css={menuItemLabelAndCaptionStyles(
              !!item.startIcon,
              !!item.endIcon,
            )}
          >
            <div css={menuItemLabelContentStyles}>
              <p className='menu-item-label'>{item.label}</p>
              {item.command ? (
                <ChakraMenu.ItemCommand aria-label={`Shortcut ${item.command}`}>
                  {item.command}
                </ChakraMenu.ItemCommand>
              ) : null}
            </div>
            {item.caption ? (
              <p className='menu-item-caption'>{item.caption}</p>
            ) : null}
          </div>
          {item.endIcon}
        </>
      )}
    </ChakraMenu.Item>
    {!isLast ? (
      <ChakraMenu.Separator borderColor='var(--chakra-colors-neutral-300)' />
    ) : null}
  </>
)

const Menu = ({ label, items, groups, onSelect, customTrigger }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ChakraMenu.Root
      onSelect={({ value }) => onSelect && onSelect(value)}
      onOpenChange={({ open }) => setIsOpen(open)}
      open={isOpen}
    >
      <ChakraMenu.Trigger css={menuStyles} asChild>
        {customTrigger || (
          <button type='button'>
            {label}
            <ChevronDownIcon
              marginLeft='6px'
              rotate={isOpen ? '180' : '0'}
              height='14px'
              width='14px'
            />
          </button>
        )}
      </ChakraMenu.Trigger>
      <Portal>
        <ChakraMenu.Positioner>
          <ChakraMenu.Content
            css={menuContentStyles}
            role='menu'
            aria-label={label || 'Menu'}
          >
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
                      {item.label}{' '}
                      <ChevronDownIcon
                        rotate='270'
                        color='var(--chakra-colors-neutral-700)'
                      />
                    </ChakraMenu.TriggerItem>
                    <Portal>
                      <ChakraMenu.Positioner>
                        <ChakraMenu.Content
                          css={menuContentStyles}
                          role='menu'
                          aria-label={`${item.label} submenu`}
                        >
                          {item.submenu.map((submenuItem, submenuIdx) => (
                            <MenuItem
                              key={submenuItem.value}
                              item={submenuItem}
                              isLast={
                                submenuIdx === (item.submenu?.length || 0) - 1
                              }
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
                  isLast={idx === items.length - 1}
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
                      isLast={groups.length - 1 === idx}
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
