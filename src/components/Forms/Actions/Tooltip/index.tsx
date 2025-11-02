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
}: TooltipProps) => {
  const [open, setOpen] = useState(false)

  if (disabled) return children

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
      open={open}
      onOpenChange={({ open: isOpen }) => setOpen(isOpen)}
    >
      <ChakraTooltip.Trigger
        tabIndex={0}
        onClick={() => setOpen(true)}
        css={tooltipTriggerStyles}
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
