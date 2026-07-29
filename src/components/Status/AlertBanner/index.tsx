/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { Alert as ChakraAlert } from '@chakra-ui/react'
import { CheckCircleIcon, WarningIcon, InfoIcon } from '../../icons'
import CloseButton from '../../Forms/Actions/CloseButton'
import { AlertProps } from './types'
import { alertBannerIconStyles, alertBannerStyles } from './styled'
import { useLabels } from '../../../lib/i18n/useLabels'

const AlertBanner = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      title,
      children,
      icon,
      variant,
      onClose,
      labels,
      isCentered = false,
      width = 'full-width',
    },
    _ref,
  ) => {
    const l = useLabels('AlertBanner', labels)
    const [visible, setVisible] = React.useState(true)

    const defaultIcon =
      variant === 'success' ? (
        <CheckCircleIcon />
      ) : variant === 'warning' ? (
        <WarningIcon />
      ) : (
        <InfoIcon />
      )

    if (!visible) return null

    return (
      <ChakraAlert.Root css={alertBannerStyles(variant, width, isCentered)}>
        <ChakraAlert.Indicator css={alertBannerIconStyles(variant)}>
          {icon || defaultIcon}
        </ChakraAlert.Indicator>
        {children ? (
          <ChakraAlert.Content flex={isCentered ? 'initial' : undefined}>
            <div
              style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}
            >
              <ChakraAlert.Title>{title}</ChakraAlert.Title>
              <ChakraAlert.Description>{children}</ChakraAlert.Description>
            </div>
          </ChakraAlert.Content>
        ) : (
          <ChakraAlert.Title flex={isCentered ? 'initial' : '1'}>
            {title}
          </ChakraAlert.Title>
        )}

        <CloseButton
          aria-label={l.closeAlertLabel}
          pos='absolute'
          insetEnd='2'
          onClick={() => {
            setVisible(false)
            onClose?.()
          }}
        />
      </ChakraAlert.Root>
    )
  },
)

export default AlertBanner
