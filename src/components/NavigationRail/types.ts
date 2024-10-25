import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

export type NavigationRailTabProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorScheme'
> & {
  id: string
  label: string
  icon?: React.ReactElement | React.ReactNode
}

export type NavigationRailProps = {
  tabs: NavigationRailTabProps[]
  isOnLeft?: boolean
  defaultActiveTabId?: string
  onTabClick?: (tabId: string) => void
}
