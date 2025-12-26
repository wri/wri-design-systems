import { Tabs as ChakraTabs } from '@chakra-ui/react'
import type { Ref } from 'react'

export type TabBarItemProps = Omit<ChakraTabs.TriggerProps, 'asChild'> & {
  label: string
  value: string
  icon?: React.ReactNode
  disabled?: boolean
  ref?: Ref<HTMLButtonElement>
}

export type TabBarProps = {
  variant?: 'panel' | 'view' | 'transparent'
  defaultValue?: string
  tabs: TabBarItemProps[]
  onTabClick?: (tabValue: string) => void
  activationMode?: 'automatic' | 'manual' // default: 'manual'
}
