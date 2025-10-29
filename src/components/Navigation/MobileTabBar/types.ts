import { Tabs as ChakraTabs } from '@chakra-ui/react'
import type { Ref } from 'react'

export type MobileTabBarItemProps = Omit<ChakraTabs.TriggerProps, 'asChild'> & {
  label: string
  value: string
  icon: React.ReactNode
  bagdeCount?: number
  disabled?: boolean
  ref?: Ref<HTMLButtonElement>
  hideLabel?: boolean
}

export type MobileTabBarProps = {
  defaultValue?: string
  tabs: MobileTabBarItemProps[]
  onTabClick?: (tabValue: string) => void
}
