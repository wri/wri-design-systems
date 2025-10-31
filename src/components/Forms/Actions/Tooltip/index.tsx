/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { Tooltip as ChakraTooltip, Portal } from '@chakra-ui/react'
import { TooltipProps } from './types'
import { tooltipContainerStyles } from './styles'

const Tooltip = ({
  children,
  content,
  showArrow = true,
  disabled,
  position = 'bottom',
  variant = 'pill',
  portalRef,
  openDelay,
  closeDelay,
}: TooltipProps) => {
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
    >
      <ChakraTooltip.Trigger>{children}</ChakraTooltip.Trigger>
      <Portal disabled={disabled} container={portalRef}>
        <ChakraTooltip.Positioner>
          <ChakraTooltip.Content css={tooltipContainerStyles(variant)}>
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
