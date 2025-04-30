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
  isDraggable,
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
      closeOnInteractOutside={!isDraggable}
      preventScroll={!isDraggable}
      defaultOpen
    >
      <Portal>
        {!isDraggable ? <Dialog.Backdrop /> : null}
        <Draggable>
          <Dialog.Positioner>
            <Dialog.Content css={modalContainerStyles(size)}>
              <Dialog.Header css={modalHeaderStyles}>
                <Dialog.Title css={modalTitleStyles}>{title}</Dialog.Title>
                <Dialog.CloseTrigger css={modalCloseButtonStyles} asChild>
                  <CloseButton />
                </Dialog.CloseTrigger>
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
