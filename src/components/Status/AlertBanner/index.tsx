/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { Alert as ChakraAlert, CloseButton } from '@chakra-ui/react'
import { CheckCircleIcon, WarningIcon, InfoIcon } from '../../icons'
import { AlertProps } from './types'
import { alertBannerStyles } from './styled'

const AlertBanner = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ title, children, icon, variant, onClose }) => {
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
      <ChakraAlert.Root css={alertBannerStyles(variant)}>
        <ChakraAlert.Indicator>{icon || defaultIcon}</ChakraAlert.Indicator>
        {children ? (
          <ChakraAlert.Content>
            <div
              style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}
            >
              <ChakraAlert.Title>{title}</ChakraAlert.Title>
              <ChakraAlert.Description>{children}</ChakraAlert.Description>
            </div>
          </ChakraAlert.Content>
        ) : (
          <ChakraAlert.Title flex='1'>{title}</ChakraAlert.Title>
        )}

        <CloseButton
          pos='absolute'
          insetEnd='2'
          _hover={{ bg: 'gray.200' }}
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
