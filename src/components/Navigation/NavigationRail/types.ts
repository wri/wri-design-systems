import { Tabs as ChakraTabs } from '@chakra-ui/react'
import type { NavigationRailLabels } from '../../../lib/i18n/types'

export type { NavigationRailLabels }

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
  onOpenChange?: (open: boolean) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<NavigationRailLabels>
}
