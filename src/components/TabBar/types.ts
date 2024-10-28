import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

export type TabBarItemProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorScheme'
> & {
  id: string
  label?: string
}

export type TabBarProps = {
  variant: 'panel' | 'view'
  tabs: TabBarItemProps[]
  defaultActiveTabId?: string
  onTabClick?: (tabId: string) => void
}
