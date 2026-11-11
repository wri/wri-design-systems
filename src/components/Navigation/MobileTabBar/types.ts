import { Tabs as ChakraTabs } from '@chakra-ui/react'
import type { Ref } from 'react'
import type { MobileTabBarLabels } from '../../../lib/i18n/types'

export type { MobileTabBarLabels }

export type MobileTabBarItemProps = Omit<ChakraTabs.TriggerProps, 'asChild'> & {
  /** Visible label text shown under the icon */
  label: string
  /** Unique value identifying the tab */
  value: string
  /** Icon node rendered above the label */
  icon: React.ReactNode
  /** Optional count rendered as a badge on the icon */
  bagdeCount?: number
  /** Disables the tab when true */
  disabled?: boolean
  /** Ref forwarded to the tab trigger button */
  ref?: Ref<HTMLButtonElement>
}

export type MobileTabBarProps = {
  /** Initially selected tab value. Defaults to `tabs[0].value` */
  defaultValue?: string
  /** Tab items to render */
  tabs: MobileTabBarItemProps[]
  /** Called with the selected tab value when a tab is clicked */
  onTabClick?: (tabValue: string) => void
  /** Hides the tab labels, rendering icons only, when true */
  hideLabels?: boolean
  /** Tab activation mode. Defaults to `'manual'` */
  activationMode?: 'automatic' | 'manual'
  /** Override internal UI labels for internationalization support */
  labels?: Partial<MobileTabBarLabels>
}
