/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import React from 'react'
import { Menu as ChakraMenu } from '@chakra-ui/react'
import { CheckIcon } from '../../../icons'
import { MenuItemProps } from './types'
import type { MenuLabels } from '../../../../lib/i18n/types'
import {
  menuItemContainerStyles,
  menuItemLabelAndCaptionStyles,
  menuItemLabelContentStyles,
} from './menuItemStyled'

const MenuItemContent = ({
  item,
  isChecked,
  labels,
}: {
  item: MenuItemProps
  isChecked: boolean
  labels: MenuLabels
}) => (
  <>
    {item.startIcon}
    <div css={menuItemLabelAndCaptionStyles(!!item.startIcon, !!item.endIcon)}>
      <div css={menuItemLabelContentStyles(isChecked)}>
        <p className='ds-menu-item-label'>{item.label}</p>
        {item.command ? (
          <ChakraMenu.ItemCommand
            aria-label={`${labels.shortcutPrefix} ${item.command}`}
          >
            {item.command}
          </ChakraMenu.ItemCommand>
        ) : null}
      </div>
      {item.caption ? (
        <p className='ds-menu-item-caption'>{item.caption}</p>
      ) : null}
    </div>
    {isChecked ? <CheckIcon /> : item.endIcon}
  </>
)

const renderMenuItemBody = (
  item: MenuItemProps,
  isChecked: boolean,
  labels: MenuLabels,
) => {
  if (item.children) return item.children
  if (item.link)
    return (
      <a
        href={item.disabled ? undefined : item.link}
        aria-disabled={item.disabled || undefined}
        tabIndex={item.disabled ? -1 : undefined}
        onClick={(e) => {
          if (item.disabled) e.preventDefault()
        }}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <MenuItemContent item={item} isChecked={isChecked} labels={labels} />
      </a>
    )
  return <MenuItemContent item={item} isChecked={isChecked} labels={labels} />
}

const MenuItem = ({
  item,
  isChecked = false,
  labels,
}: {
  item: MenuItemProps
  isChecked?: boolean
  labels: MenuLabels
}) => (
  <ChakraMenu.Item
    css={menuItemContainerStyles}
    value={item.value || item.label || ''}
    disabled={item.disabled}
    role='menuitem'
    aria-label={item.label}
    asChild={!!item.link}
  >
    {renderMenuItemBody(item, isChecked, labels)}
  </ChakraMenu.Item>
)

export default MenuItem
