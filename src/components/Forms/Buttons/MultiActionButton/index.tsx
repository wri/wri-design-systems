/** @jsxImportSource @emotion/react */

import React, { useState } from 'react'

import { Group, Menu as ChakraMenu, Portal } from '@chakra-ui/react'
import { MultiActionButtonProps } from './types'
import Button from '../Button'
import { ChevronDownIcon } from '../../../icons'
import { menuContentStyles, menuTriggerStyles, menuItemStyles } from './styled'
import { getThemedColor } from '../../../../lib/theme'

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
  ...rest
}: MultiActionButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Group attached aria-disabled={rest.disabled}>
      <Button
        css={{}}
        label={mainActionLabel}
        variant={variant}
        size={size}
        onClick={mainActionOnClick}
        {...rest}
      />
      <ChakraMenu.Root
        onOpenChange={({ open }) => setIsOpen(open)}
        positioning={{ placement: 'bottom-end' }}
      >
        <ChakraMenu.Trigger
          css={menuTriggerStyles(variant)}
          data-group-item
          data-last
          asChild
        >
          <Button
            variant={variant}
            size={size}
            leftIcon={
              <ChevronDownIcon
                rotate={isOpen ? '180' : '0'}
                color={
                  getThemedColor('accessible', 'text-on-primary-mids') ||
                  getThemedColor('primary', 900)
                }
              />
            }
            disabled={rest.disabled}
          />
        </ChakraMenu.Trigger>
        <MenuContent>
          {otherActions.map(({ label, value, onClick }) => (
            <ChakraMenu.Item
              css={menuItemStyles(size)}
              key={value}
              onClick={onClick}
              value={value}
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
