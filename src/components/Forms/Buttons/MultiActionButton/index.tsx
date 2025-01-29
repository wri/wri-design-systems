// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import { Group, Menu as ChakraMenu, Portal } from '@chakra-ui/react'
import { MultiActionButtonProps } from './types'
import Button from '../Button'
import { ChevronDownIcon } from '../../../icons'
import { StyledMenuContent, StyledMenuItem, StyledMenuTrigger } from './styled'

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
          <StyledMenuContent ref={ref} {...rest} />
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
        <StyledMenuTrigger asChild data-group-item data-last variant={variant}>
          <Button
            variant={variant}
            size={size}
            leftIcon={<ChevronDownIcon rotate={isOpen ? '180' : '0'} />}
            disabled={rest.disabled}
          />
        </StyledMenuTrigger>
        <MenuContent>
          {otherActions.map(({ label, value, onClick }) => (
            <StyledMenuItem
              key={value}
              onClick={onClick}
              value={value}
              size={size}
            >
              {label}
            </StyledMenuItem>
          ))}
        </MenuContent>
      </ChakraMenu.Root>
    </Group>
  )
}

export default MultiActionButton
