/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { Popover as ChakraPopover, Portal } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { PopoverProps } from './types'
import { POPOVER_ARROW_GUTTER, popoverContentStyles } from './styled'
import { pxToRem } from '../../../lib/sizing'

/** Default content width from the Figma design */
const DEFAULT_WIDTH = pxToRem(366)

const Popover = ({
  children,
  content,
  width = DEFAULT_WIDTH,
  hideArrow = false,
  arrowAlignment = 'left',
  placement = 'bottom-start',
  open,
  onClose,
  closeOnEscape = true,
  closeOnInteractOutside = true,
  disabled,
  portalRef,
}: PopoverProps) => {
  const [openState, setOpenState] = useState(false)
  const isControlled = open !== undefined

  // Disabling force-closes the popover and resets the internal state so an
  // uncontrolled popover stays closed once it is enabled again.
  useEffect(() => {
    if (disabled) {
      setOpenState(false)
    }
  }, [disabled])

  let currentOpen = openState
  if (disabled) {
    currentOpen = false
  } else if (isControlled) {
    currentOpen = open
  }

  const handleOpenChange = ({ open: nextOpen }: { open: boolean }) => {
    if (disabled) return

    if (isControlled) {
      if (!nextOpen) onClose?.()
      return
    }

    setOpenState(nextOpen)
    if (!nextOpen) onClose?.()
  }

  return (
    <ChakraPopover.Root
      open={currentOpen}
      onOpenChange={handleOpenChange}
      closeOnEscape={closeOnEscape}
      closeOnInteractOutside={closeOnInteractOutside}
      positioning={{
        placement,
        // Compensates zag's added arrow half-height so the arrow tip touches
        // the trigger; the default gutter applies when the arrow is hidden.
        ...(hideArrow ? {} : { gutter: POPOVER_ARROW_GUTTER }),
      }}
    >
      <ChakraPopover.Trigger asChild disabled={disabled}>
        {children}
      </ChakraPopover.Trigger>
      <Portal container={portalRef}>
        <ChakraPopover.Positioner>
          <ChakraPopover.Content
            css={popoverContentStyles(width, arrowAlignment, placement)}
          >
            {!hideArrow && (
              <ChakraPopover.Arrow>
                <ChakraPopover.ArrowTip />
              </ChakraPopover.Arrow>
            )}
            {content}
          </ChakraPopover.Content>
        </ChakraPopover.Positioner>
      </Portal>
    </ChakraPopover.Root>
  )
}

export default Popover
