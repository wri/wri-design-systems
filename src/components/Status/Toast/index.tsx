/* eslint-disable no-nested-ternary */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import {
  Toaster as ChakraToaster,
  Portal,
  Stack,
  createToaster,
  CreateToasterReturn,
  Spinner,
} from '@chakra-ui/react'
import {
  ChakraToastActionTrigger,
  ChakraToastCaption,
  ChakraToastCloseTrigger,
  ChakraToastContainer,
  ChakraToastTitle,
} from './styled'
import {
  CheckCircleIcon,
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  WarningIcon,
} from '../../icons'
import { ToastProps } from './types'

const commonProps = {
  pauseOnPageIdle: true,
  offsets: '24px',
}

const topStartToast = createToaster({
  placement: 'top-start',
  ...commonProps,
})

const topEndToast = createToaster({
  placement: 'top-end',
  ...commonProps,
})

const bottomStartToast = createToaster({
  placement: 'bottom-start',
  ...commonProps,
})

const bottomEndToast = createToaster({
  placement: 'bottom-end',
  ...commonProps,
})

const toasters: { [key: string]: CreateToasterReturn } = {
  'top-start': topStartToast,
  'top-end': topEndToast,
  'bottom-start': bottomStartToast,
  'bottom-end': bottomEndToast,
}

export const showToast = (props: ToastProps) => {
  const toaster = toasters[props.placement]

  toaster.create({
    title: props.label,
    description: props.caption,
    duration: props.duration || 5000,
    meta: {
      closable: props.closable,
      icon: props.icon,
      closableLabel: props.closableLabel,
    },
    ...props,
  })
}

const Toast = () =>
  Object.keys(toasters).map((toaster) => (
    <Portal key={toaster}>
      <ChakraToaster toaster={toasters[toaster]} insetInline={{ mdDown: '4' }}>
        {(toast) => (
          <ChakraToastContainer width={{ md: 'sm' }}>
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
                <ChakraToastTitle aria-label={`${toast.title}`}>
                  {toast.title}
                </ChakraToastTitle>
                {toast.description ? (
                  <ChakraToastCaption aria-label={`${toast.description}`}>
                    {toast.description}
                  </ChakraToastCaption>
                ) : null}
              </Stack>
            </Stack>
            {toast.action || toast.meta?.closable ? (
              <Stack flexDirection='row'>
                {toast.action ? (
                  <ChakraToastActionTrigger
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
                  <ChakraToastCloseTrigger
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
          </ChakraToastContainer>
        )}
      </ChakraToaster>
    </Portal>
  ))

export default Toast
