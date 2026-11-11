import { Tabs as ChakraTabs } from '@chakra-ui/react'
import type { Ref } from 'react'

export type TabBarItemProps = Omit<ChakraTabs.TriggerProps, 'asChild'> & {
  /** Visible label text rendered inside the tab */
  label: string
  /** Unique value identifying the tab */
  value: string
  /** Optional icon node rendered before the label */
  icon?: React.ReactNode
  /** Disables the tab when true */
  disabled?: boolean
  /** Ref forwarded to the tab trigger button */
  ref?: Ref<HTMLButtonElement>
}

export type TabBarProps = {
  /** Visual style of the tab bar. Defaults to `'panel'` */
  variant?: 'panel' | 'view' | 'transparent'
  /** Initially selected tab value. Defaults to `tabs[0].value` */
  defaultValue?: string
  /** Tab items to render */
  tabs: TabBarItemProps[]
  /** Called with the selected tab value when a tab is clicked */
  onTabClick?: (tabValue: string) => void
  /** Tab activation mode. Defaults to `'manual'` */
  activationMode?: 'automatic' | 'manual'
}
