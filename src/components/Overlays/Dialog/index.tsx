/** @jsxImportSource @emotion/react */

import { Dialog as ChakraDialog, Portal } from '@chakra-ui/react'
import { DialogProps } from './types'
import {
  dialogBackdropStyles,
  dialogBodyStyles,
  dialogCloseButtonStyles,
  dialogContainerStyles,
  dialogFooterStyles,
  dialogHeaderStyles,
  dialogTitleStyles,
} from './styled'
import CloseButton from '../../Forms/Actions/CloseButton'
import { useLabels } from '../../../lib/i18n/useLabels'

const Dialog = ({
  title,
  children,
  footer,
  hideCloseButton = false,
  open,
  onClose,
  width,
  closeOnEscape = true,
  closeOnInteractOutside = true,
  initialFocusEl,
  scrollBehavior = 'inside',
  placement = 'top',
  labels,
}: DialogProps) => {
  const l = useLabels('Dialog', labels)

  if (!open) return null

  return (
    <ChakraDialog.Root
      open={open}
      onOpenChange={onClose}
      placement={placement}
      scrollBehavior={scrollBehavior}
      closeOnEscape={closeOnEscape}
      closeOnInteractOutside={closeOnInteractOutside}
      preventScroll
      initialFocusEl={initialFocusEl}
    >
      <Portal>
        <ChakraDialog.Backdrop css={dialogBackdropStyles} />
        <ChakraDialog.Positioner>
          <ChakraDialog.Content
            aria-label={l.dialogAriaLabel}
            css={dialogContainerStyles(width, scrollBehavior === 'outside')}
          >
            <ChakraDialog.Header css={dialogHeaderStyles}>
              <ChakraDialog.Title css={dialogTitleStyles}>
                {title}
              </ChakraDialog.Title>
              {!hideCloseButton ? (
                <ChakraDialog.CloseTrigger
                  css={dialogCloseButtonStyles}
                  asChild
                >
                  <CloseButton labels={{ closeLabel: l.closeLabel }} />
                </ChakraDialog.CloseTrigger>
              ) : null}
            </ChakraDialog.Header>
            {children ? (
              <ChakraDialog.Body css={dialogBodyStyles}>
                {children}
              </ChakraDialog.Body>
            ) : null}
            {footer ? (
              <ChakraDialog.Footer css={dialogFooterStyles}>
                {footer}
              </ChakraDialog.Footer>
            ) : null}
          </ChakraDialog.Content>
        </ChakraDialog.Positioner>
      </Portal>
    </ChakraDialog.Root>
  )
}

export default Dialog
