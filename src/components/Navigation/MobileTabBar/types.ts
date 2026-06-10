import { Tabs as ChakraTabs } from '@chakra-ui/react'
import type { Ref } from 'react'
import type { MobileTabBarLabels } from '../../../lib/i18n/types'

export type { MobileTabBarLabels }

export type MobileTabBarItemProps = Omit<ChakraTabs.TriggerProps, 'asChild'> & {
  label: string
  value: string
  icon: React.ReactNode
  bagdeCount?: number
  disabled?: boolean
  ref?: Ref<HTMLButtonElement>
}

export type MobileTabBarProps = {
  defaultValue?: string
  tabs: MobileTabBarItemProps[]
  onTabClick?: (tabValue: string) => void
  hideLabels?: boolean
  activationMode?: 'automatic' | 'manual' // default: 'manual'
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<MobileTabBarLabels>
}
