import { Alert as ChakraAlert } from '@chakra-ui/react'
import type { AlertBannerLabels } from '../../../lib/i18n/types'

export type { AlertBannerLabels }

export interface AlertProps
  extends Omit<
    ChakraAlert.RootProps,
    'title' | 'variant' | 'width' | 'children'
  > {
  /** Alert content */
  children: React.ReactNode
  /** Custom icon; defaults to an icon matching the variant */
  icon?: React.ReactElement
  /** Called when the banner is closed; the banner hides itself */
  onClose?: () => void
  /** Whether to center the alert content. Defaults to `false` */
  isCentered?: boolean
  /** Whether the banner spans the full width or fits its content. Defaults to `'full-width'` */
  width?: 'full-width' | 'inline'
  /** Color scheme of the banner. Defaults to `'general-white'` */
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
