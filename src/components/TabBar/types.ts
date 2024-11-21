import { Tabs as ChakraTabs } from '@chakra-ui/react'

export type TabBarItemProps = Omit<ChakraTabs.TriggerProps, 'asChild'> & {
  label: string
  value: string
  icon?: React.ReactNode
  disabled?: boolean
}

export type TabBarProps = {
  variant: 'panel' | 'view'
  defaultValue?: string
  tabs: TabBarItemProps[]
  onTabClick?: (tabLabel: string) => void
}
