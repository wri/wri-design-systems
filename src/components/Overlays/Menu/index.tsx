/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import React from 'react'
import { Menu as ChakraMenu, Portal } from '@chakra-ui/react'
import Button from '../../Forms/Buttons/Button'
import { MenuItemProps, MenuProps } from './types'
import {
  menuContentStyles,
  menuItemContainerStyles,
  menuItemGroupLabelStyles,
  menuItemLabelAndCaptionStyles,
  menuItemLabelContentStyles,
  menuSubmenuTriggerStyles,
} from './styled'
import { ChevronDownIcon } from '../../icons'

const MenuItem = ({ item }: { item: MenuItemProps }) => (
  <ChakraMenu.Item
    css={menuItemContainerStyles}
    value={item.value}
    disabled={item.disabled}
  >
    {item.children ? (
      item.children
    ) : (
      <>
        {item.startIcon}
        <div
          css={menuItemLabelAndCaptionStyles(!!item.startIcon, !!item.endIcon)}
        >
          <div css={menuItemLabelContentStyles}>
            <p className='menu-item-label'>{item.label}</p>
            {item.command ? (
              <ChakraMenu.ItemCommand>{item.command}</ChakraMenu.ItemCommand>
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
)

const Menu = ({ label, items, groups, onSelect }: MenuProps) => (
  <ChakraMenu.Root onSelect={({ value }) => onSelect && onSelect(value)}>
    <ChakraMenu.Trigger asChild>
      <Button label={label} variant='secondary' />
    </ChakraMenu.Trigger>
    <Portal>
      <ChakraMenu.Positioner>
        <ChakraMenu.Content css={menuContentStyles}>
          {items?.map((item) => {
            if (item.submenu) {
              return (
                <ChakraMenu.Root
                  key={item.value}
                  positioning={{ placement: 'right-start', gutter: 2 }}
                  onSelect={({ value }) => onSelect && onSelect(value)}
                >
                  <ChakraMenu.TriggerItem css={menuSubmenuTriggerStyles}>
                    {item.label}{' '}
                    <ChevronDownIcon
                      rotate='270'
                      color='var(--chakra-colors-neutral-700)'
                    />
                  </ChakraMenu.TriggerItem>
                  <Portal>
                    <ChakraMenu.Positioner>
                      <ChakraMenu.Content css={menuContentStyles}>
                        {item.submenu.map((submenuItem) => (
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

            return <MenuItem key={item.value} item={item} />
          })}

          {groups?.map((group, idx) => (
            <React.Fragment key={group.title}>
              <ChakraMenu.ItemGroup>
                <ChakraMenu.ItemGroupLabel css={menuItemGroupLabelStyles}>
                  {group.title}
                </ChakraMenu.ItemGroupLabel>
                {group.items?.map((groupItem) => (
                  <MenuItem key={groupItem.value} item={groupItem} />
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

export default Menu
