/** @jsxImportSource @emotion/react */

import React, { useState } from 'react'

import { Group, Menu as ChakraMenu, Portal } from '@chakra-ui/react'
import { MultiActionButtonProps } from './types'
import Button from '../Button'
import { ChevronDownIcon } from '../../../icons'
import {
  menuContentStyles,
  menuTriggerStyles,
  menuItemStyles,
  disabledGroupStyles,
  triggerMenuButtonStyles,
  getMenuTriggerIconColor,
} from './styled'

interface MenuContentProps extends ChakraMenu.ContentProps {
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
}

const MenuContent = React.forwardRef<HTMLDivElement, MenuContentProps>(
  (props, ref) => {
    const { portalled = true, portalRef, ...rest } = props
    return (
      <Portal disabled={!portalled} container={portalRef}>
        <ChakraMenu.Positioner>
          <ChakraMenu.Content css={menuContentStyles} ref={ref} {...rest} />
        </ChakraMenu.Positioner>
      </Portal>
    )
  },
)

const MultiActionButton = ({
  variant = 'primary',
  size = 'default',
  mainActionLabel,
  mainActionOnClick = () => {},
  otherActions = [],
  disabled: isDisabledProp,
  mainActionLeftIcon,
  mainActionRightIcon,
  ...rest
}: MultiActionButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const totalAriaLabel = isDisabledProp
    ? `${mainActionLabel} action button with menu, disabled`
    : undefined

  return (
    <Group
      css={disabledGroupStyles}
      attached
      tabIndex={isDisabledProp ? 0 : undefined}
      aria-disabled={isDisabledProp}
      aria-label={totalAriaLabel}
      role='group'
    >
      <Button
        {...rest}
        label={mainActionLabel}
        variant={variant}
        size={size}
        onClick={mainActionOnClick}
        disabled={isDisabledProp}
        leftIcon={mainActionLeftIcon}
        rightIcon={mainActionRightIcon}
      />

      <ChakraMenu.Root
        onOpenChange={({ open }) => setIsOpen(open)}
        positioning={{ placement: 'bottom-end' }}
        onSelect={({ value }) => {
          const action = otherActions.find((item) => item.value === value)
          if (action && !action.disabled) {
            action.onClick()
          }
        }}
      >
        <ChakraMenu.Trigger
          css={menuTriggerStyles(variant)}
          data-group-item
          data-last
          asChild
        >
          <Button
            style={triggerMenuButtonStyles}
            aria-label={`Open ${mainActionLabel} options`}
            aria-haspopup='menu'
            aria-expanded={isOpen}
            variant={variant}
            size={size}
            leftIcon={
              <ChevronDownIcon
                aria-hidden='true'
                rotate={isOpen ? '180' : '0'}
                color={getMenuTriggerIconColor(variant, isDisabledProp)}
              />
            }
            disabled={isDisabledProp}
          />
        </ChakraMenu.Trigger>
        <MenuContent>
          {otherActions.map(({ label, value, disabled }) => (
            <ChakraMenu.Item
              css={menuItemStyles(size)}
              key={value}
              value={value}
              disabled={disabled}
            >
              {label}
            </ChakraMenu.Item>
          ))}
        </MenuContent>
      </ChakraMenu.Root>
    </Group>
  )
}

export default MultiActionButton
