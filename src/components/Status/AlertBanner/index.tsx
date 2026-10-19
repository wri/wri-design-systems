/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { Alert as ChakraAlert } from '@chakra-ui/react'
import { CheckCircleIcon, WarningIcon, InfoIcon, ErrorIcon } from '../../icons'
import CloseButton from '../../Forms/Actions/CloseButton'
import { AlertProps } from './types'
import { alertBannerIconStyles, alertBannerStyles } from './styled'
import { useLabels } from '../../../lib/i18n/useLabels'

const AlertBanner = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
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
      ) : variant === 'error' ? (
        <ErrorIcon />
      ) : (
        <InfoIcon />
      )

    if (!visible) return null

    return (
      <ChakraAlert.Root css={alertBannerStyles(variant, width, isCentered)}>
        <ChakraAlert.Indicator css={alertBannerIconStyles(variant)}>
          {icon || defaultIcon}
        </ChakraAlert.Indicator>
        <ChakraAlert.Content flex={isCentered ? 'initial' : '1'}>
          {children}
        </ChakraAlert.Content>

        <CloseButton
          aria-label={l.closeAlertLabel}
          pos='absolute'
          top='0.75rem'
          insetEnd='0.75rem'
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
