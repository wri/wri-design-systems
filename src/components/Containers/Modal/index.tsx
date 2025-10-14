/** @jsxImportSource @emotion/react */

import { Dialog, Portal } from '@chakra-ui/react'
import Draggable from 'react-draggable'
import { ModalProps } from './types'
import {
  modalCloseButtonStyles,
  modalContainerStyles,
  modalContentStyles,
  modalHeaderStyles,
} from './styled'
import CloseButton from '../../Forms/Actions/CloseButton'

const Modal = ({
  header,
  content,
  footer,
  size = 'medium',
  draggable,
  blocking,
  open,
  onClose,
}: ModalProps) => {
  if (!open) return null

  return (
    <Dialog.Root
      open={open}
      onOpenChange={onClose}
      placement='center'
      scrollBehavior='inside'
      closeOnInteractOutside={!draggable && !blocking}
      preventScroll={!draggable && !blocking}
      closeOnEscape={!blocking}
      defaultOpen
    >
      <Portal>
        {!draggable ? <Dialog.Backdrop /> : null}
        <Draggable disabled={!draggable}>
          <Dialog.Positioner>
            <Dialog.Content css={modalContainerStyles(size)}>
              <Dialog.Header css={modalHeaderStyles}>
                {header}
                {!blocking ? (
                  <Dialog.CloseTrigger css={modalCloseButtonStyles} asChild>
                    <CloseButton />
                  </Dialog.CloseTrigger>
                ) : null}
              </Dialog.Header>
              <Dialog.Body css={modalContentStyles}>{content}</Dialog.Body>
              {footer ? (
                <Dialog.Footer padding='12px'>{footer}</Dialog.Footer>
              ) : null}
            </Dialog.Content>
          </Dialog.Positioner>
        </Draggable>
      </Portal>
    </Dialog.Root>
  )
}

export default Modal
