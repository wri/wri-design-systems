/* eslint-disable no-nested-ternary */
/** @jsxImportSource @emotion/react */

import React from 'react'
import {
  Toaster as ChakraToaster,
  Toast as ChakraToast,
  Portal,
  Stack,
  Spinner,
} from '@chakra-ui/react'
import {
  toastActionTriggerStyles,
  toastCaptionStyles,
  toastCloseTriggerStyles,
  toastContainerStyles,
  toastTitleStyles,
} from './styled'
import {
  CheckCircleIcon,
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  WarningIcon,
} from '../../icons'
import { toasters } from './utils'
import Button from '../../Forms/Buttons/Button'

const Toast: React.FC = () =>
  Object.keys(toasters).map((toaster) => (
    <Portal key={toaster}>
      <ChakraToaster toaster={toasters[toaster]} insetInline={{ mdDown: '4' }}>
        {(toast) => (
          <ChakraToast.Root css={toastContainerStyles} width={{ md: 'sm' }}>
            <Stack flexDirection='row' className='icon-container'>
              {toast.type === 'info' ? (
                toast.meta?.icon ? (
                  toast.meta.icon
                ) : (
                  <InfoIcon color='var(--chakra-colors-neutral-700)' />
                )
              ) : null}
              {toast.type === 'loading' ? (
                <Spinner
                  size='lg'
                  borderWidth='3px'
                  color='var(--chakra-colors-primary-500)'
                />
              ) : null}
              {toast.type === 'success' ? (
                toast.meta?.icon ? (
                  toast.meta.icon
                ) : (
                  <CheckCircleIcon color='var(--chakra-colors-success-500)' />
                )
              ) : null}
              {toast.type === 'warning' ? (
                toast.meta?.icon ? (
                  toast.meta.icon
                ) : (
                  <WarningIcon color='var(--chakra-colors-warning-500)' />
                )
              ) : null}
              {toast.type === 'error' ? (
                toast.meta?.icon ? (
                  toast.meta.icon
                ) : (
                  <ErrorIcon color='var(--chakra-colors-error-500)' />
                )
              ) : null}
              <Stack gap='1' flex='1' maxWidth='100%'>
                <ChakraToast.Title
                  css={toastTitleStyles}
                  aria-label={`${toast.title}`}
                >
                  {toast.title}
                </ChakraToast.Title>
                {toast.description ? (
                  <ChakraToast.Title
                    css={toastCaptionStyles}
                    aria-label={`${toast.description}`}
                  >
                    {toast.description}
                  </ChakraToast.Title>
                ) : null}
              </Stack>
            </Stack>
            {toast.action || toast.meta?.closable ? (
              <Stack flexDirection='row'>
                {toast.action ? (
                  <Button
                    css={toastActionTriggerStyles}
                    label={toast.action.label}
                    size='small'
                    variant={toast.type === 'info' ? 'primary' : 'secondary'}
                    onClick={() => {
                      if (toast?.action?.onClick) {
                        toast.action.onClick()
                      }

                      toasters[toaster].dismiss()
                    }}
                  />
                ) : null}
                {toast.meta?.closable ? (
                  <Button
                    css={toastCloseTriggerStyles}
                    label={toast.meta.closableLabel}
                    aria-label={toast.meta?.closableLabel || 'Dismiss'}
                    leftIcon={<CloseIcon height='10px!' width='10px!' />}
                    size='small'
                    variant='secondary'
                    onClick={() => toasters[toaster].dismiss()}
                  />
                ) : null}
              </Stack>
            ) : null}
          </ChakraToast.Root>
        )}
      </ChakraToaster>
    </Portal>
  ))

export default Toast
