/** @jsxImportSource @emotion/react */

import { Dialog, Portal } from '@chakra-ui/react'
import Draggable from 'react-draggable'
import { ModalProps } from './types'
import {
  modalCloseButtonStyles,
  modalContainerStyles,
  modalContentStyles,
  modalHeaderStyles,
  modalTitleStyles,
} from './styled'
import Button from '../../Forms/Buttons/Button'
import CloseButton from '../../Forms/Buttons/CloseButton'

const Modal = ({
  title,
  content,
  size = 'medium',
  draggable,
  blocking,
  open,
  onClose,
  showCancelButton,
  cancelLabel = 'Cancel',
  showActionButton,
  actionLabel,
  onActionClick,
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
                <Dialog.Title css={modalTitleStyles}>{title}</Dialog.Title>
                {!blocking ? (
                  <Dialog.CloseTrigger css={modalCloseButtonStyles} asChild>
                    <CloseButton />
                  </Dialog.CloseTrigger>
                ) : null}
              </Dialog.Header>
              <Dialog.Body css={modalContentStyles}>{content}</Dialog.Body>
              {showCancelButton || showActionButton ? (
                <Dialog.Footer>
                  {showCancelButton ? (
                    <Dialog.ActionTrigger asChild>
                      <Button label={cancelLabel} variant='secondary' />
                    </Dialog.ActionTrigger>
                  ) : null}
                  {showActionButton ? (
                    <Button label={actionLabel} onClick={onActionClick} />
                  ) : null}
                </Dialog.Footer>
              ) : null}
            </Dialog.Content>
          </Dialog.Positioner>
        </Draggable>
      </Portal>
    </Dialog.Root>
  )
}

export default Modal
