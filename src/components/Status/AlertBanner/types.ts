import { Alert as ChakraAlert } from '@chakra-ui/react'
import type { AlertBannerLabels } from '../../../lib/i18n/types'

export type { AlertBannerLabels }

export interface AlertProps
  extends Omit<ChakraAlert.RootProps, 'title' | 'variant' | 'width'> {
  title?: React.ReactNode
  icon?: React.ReactElement
  onClose?: () => void
  isCentered?: boolean
  width?: 'full-width' | 'inline'
  variant?:
    | 'general-white'
    | 'general-grey'
    | 'information'
    | 'success'
    | 'warning'
    | 'error'
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<AlertBannerLabels>
}
