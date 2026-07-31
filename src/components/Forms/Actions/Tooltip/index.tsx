/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { Tooltip as ChakraTooltip, Portal } from '@chakra-ui/react'
import { useState } from 'react'
import { TooltipProps } from './types'
import { tooltipContentStyles, tooltipTriggerStyles } from './styles'

const Tooltip = ({
  children,
  content,
  showArrow = true,
  disabled,
  position = 'bottom',
  variant = 'pill',
  portalRef,
  openDelay = 0,
  closeDelay = 0,
  preserveFocusOnChild = false,
}: TooltipProps) => {
  const [open, setOpen] = useState(false)

  return (
    <ChakraTooltip.Root
      positioning={{
        placement: position,
        offset:
          variant === 'pill'
            ? undefined
            : {
                mainAxis: 0,
                crossAxis: 0,
              },
      }}
      openDelay={openDelay}
      closeDelay={closeDelay}
      open={disabled ? false : open}
      onOpenChange={({ open: isOpen }) => {
        if (!disabled) setOpen(isOpen)
      }}
    >
      <ChakraTooltip.Trigger
        asChild={preserveFocusOnChild}
        tabIndex={preserveFocusOnChild ? undefined : 0}
        onClick={() => {
          if (!disabled) setOpen(true)
        }}
        css={preserveFocusOnChild ? undefined : tooltipTriggerStyles}
      >
        {children}
      </ChakraTooltip.Trigger>
      <Portal disabled={disabled} container={portalRef}>
        <ChakraTooltip.Positioner>
          <ChakraTooltip.Content css={tooltipContentStyles(variant)}>
            {showArrow && variant === 'pill' ? (
              <ChakraTooltip.Arrow>
                <ChakraTooltip.ArrowTip />
              </ChakraTooltip.Arrow>
            ) : null}
            {content}
          </ChakraTooltip.Content>
        </ChakraTooltip.Positioner>
      </Portal>
    </ChakraTooltip.Root>
  )
}

export default Tooltip
