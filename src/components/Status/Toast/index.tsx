/* eslint-disable no-nested-ternary */
/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react'
import {
  Toaster as ChakraToaster,
  Toast as ChakraToast,
  Portal,
  Stack,
  Spinner,
} from '@chakra-ui/react'
import {
  toastCaptionStyles,
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
import { claimToastRenderer, toasters } from './utils'
import Button from '../../Forms/Actions/Button'
import { useLabels } from '../../../lib/i18n/useLabels'
import type { ToastComponentProps } from './types'
import CloseButton from '../../Forms/Actions/CloseButton'
import { getThemedSpacing } from '../../../lib/theme'

type ToastIconProps = {
  type?: string
  meta?: {
    icon?: React.ReactNode
    hideIcon?: boolean
  }
}

const getToastIcon = (toast: ToastIconProps) => {
  if (toast.meta?.hideIcon) return null

  switch (toast.type) {
    case 'general':
      return (
        toast.meta?.icon ?? (
          <InfoIcon color='var(--chakra-colors-neutral-700)' />
        )
      )
    case 'information':
      return (
        toast.meta?.icon ?? (
          <InfoIcon color='var(--chakra-colors-information-500)' />
        )
      )
    case 'loading':
      return (
        <Spinner
          size='lg'
          borderWidth='0.1875rem'
          color='var(--chakra-colors-primary-700)'
        />
      )
    case 'success':
      return (
        toast.meta?.icon ?? (
          <CheckCircleIcon color='var(--chakra-colors-success-500)' />
        )
      )
    case 'warning':
      return (
        toast.meta?.icon ?? (
          <WarningIcon color='var(--chakra-colors-warning-500)' />
        )
      )
    case 'error':
      return (
        toast.meta?.icon ?? <ErrorIcon color='var(--chakra-colors-error-500)' />
      )
    default:
      return null
  }
}

const Toast: React.FC<ToastComponentProps> = ({ labels }) => {
  const l = useLabels('Toast', labels)

  /**
   * The toaster stores are module-level singletons. If more than one
   * `<Toast />` is mounted at the same time (e.g. Storybook Docs renders the
   * primary story twice), each instance would render its own portal for every
   * store and a single `showToast()` would appear multiple times. Only the
   * instance that owns the render claim mounts the toaster UI.
   */
  const [rendersToaster, setRendersToaster] = useState(false)

  useEffect(() => {
    const release = claimToastRenderer(() => setRendersToaster(true))
    return () => {
      release()
      setRendersToaster(false)
    }
  }, [])

  if (!rendersToaster) return null

  return Object.keys(toasters).map((toaster) => (
    <Portal key={toaster}>
      <ChakraToaster toaster={toasters[toaster]} insetInline={{ mdDown: '4' }}>
        {(toast) => (
          <ChakraToast.Root
            css={toastContainerStyles(toast.meta?.width, !!toast.action)}
            width={{ md: 'xs' }}
            /**
             * `role='status'` supports naming from author, so the accessible
             * name belongs here — not on the generic title element. Only the
             * explicit `ariaLabel` is used: when the title is plain text the
             * live region already announces its content, and a name would
             * only duplicate it.
             */
            aria-label={toast.meta?.ariaLabel}
          >
            <Stack
              flexDirection='row'
              className='ds-toast-icon-container'
              alignItems='flex-start'
            >
              {getToastIcon(toast)}
              <Stack gap='1' flex='1' maxWidth='100%'>
                <ChakraToast.Title css={toastTitleStyles}>
                  {toast.title}
                </ChakraToast.Title>
                {toast.description ? (
                  <ChakraToast.Description
                    css={toastCaptionStyles}
                    aria-label={`${toast.description}`}
                  >
                    {toast.description}
                  </ChakraToast.Description>
                ) : null}
              </Stack>
            </Stack>
            {toast.action || toast.meta?.closable ? (
              <Stack
                flexDirection='row'
                gap={getThemedSpacing(200)}
                alignItems='center'
              >
                {toast.action ? (
                  <Button
                    label={toast.action.label}
                    size='small'
                    variant={toast.type === 'general' ? 'primary' : 'secondary'}
                    onClick={() => {
                      if (toast?.action?.onClick) {
                        toast.action.onClick()
                      }

                      toasters[toaster].dismiss(toast.id)
                    }}
                  />
                ) : null}
                {toast.meta?.closable ? (
                  toast.action ? (
                    /**
                     * The action button and the close (X) button must not be
                     * used together: when an action is present, the dismiss
                     * affordance is this labelled borderless button instead.
                     */
                    <Button
                      label={l.dismissLabel}
                      size='small'
                      variant='borderless'
                      onClick={() => {
                        if (toast.meta?.onClose) {
                          toast.meta.onClose()
                        }

                        toasters[toaster].dismiss(toast.id)
                      }}
                    />
                  ) : (
                    <CloseButton
                      aria-label={l.dismissLabel}
                      onClick={() => {
                        if (toast.meta?.onClose) {
                          toast.meta.onClose()
                        }

                        toasters[toaster].dismiss(toast.id)
                      }}
                    />
                  )
                ) : null}
              </Stack>
            ) : null}
          </ChakraToast.Root>
        )}
      </ChakraToaster>
    </Portal>
  ))
}

export default Toast
