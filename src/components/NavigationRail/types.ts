import { Tabs as ChakraTabs } from '@chakra-ui/react'

export type NavigationRailTabProps = Omit<
  ChakraTabs.TriggerProps,
  'asChild'
> & {
  label: string
  value: string
  icon?: React.ReactNode
  disabled?: boolean
}

export type NavigationRailProps = {
  tabs: NavigationRailTabProps[]
  defaultValue?: string
  onTabClick?: (selectedValue: string) => void
  children?: React.ReactNode
}
