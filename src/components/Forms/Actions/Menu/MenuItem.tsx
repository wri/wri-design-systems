/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import React from 'react'
import { Menu as ChakraMenu } from '@chakra-ui/react'
import { CheckIcon } from '../../../icons'
import { MenuItemProps } from './types'
import {
  menuItemContainerStyles,
  menuItemLabelAndCaptionStyles,
  menuItemLabelCheckedStyles,
  menuItemLabelContentStyles,
} from './styled'

const MenuItem = ({
  item,
  isLast,
  isChecked = false,
}: {
  item: MenuItemProps
  isLast: boolean
  isChecked?: boolean
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
              <p
                css={isChecked ? menuItemLabelCheckedStyles : undefined}
                className='ds-menu-item-label'
              >
                {item.label}
              </p>
              {item.command ? (
                <ChakraMenu.ItemCommand aria-label={`Shortcut ${item.command}`}>
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
      )}
    </ChakraMenu.Item>
    {!isLast ? (
      <ChakraMenu.Separator borderColor='var(--chakra-colors-neutral-300)' />
    ) : null}
  </>
)

export default MenuItem
