import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

export type TabBarItemProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorScheme' | 'id'
> & {
  label: string
}

export type TabBarProps = {
  variant: 'panel' | 'view'
  tabs: TabBarItemProps[]
  defaultActiveTabLabel?: string
  onTabClick?: (tabLabel: string) => void
}
