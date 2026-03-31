import { Alert as ChakraAlert } from '@chakra-ui/react'

export interface AlertProps
  extends Omit<ChakraAlert.RootProps, 'title' | 'variant'> {
  title?: React.ReactNode
  icon?: React.ReactElement
  onClose?: () => void
  variant?:
    | 'general-white'
    | 'general-grey'
    | 'information'
    | 'success'
    | 'warning'
    | 'error'
}
