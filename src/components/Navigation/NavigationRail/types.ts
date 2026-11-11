import { Tabs as ChakraTabs } from '@chakra-ui/react'
import type { NavigationRailLabels } from '../../../lib/i18n/types'

export type { NavigationRailLabels }

export type NavigationRailTabProps = Omit<
  ChakraTabs.TriggerProps,
  'asChild'
> & {
  /** Visible label text shown under the icon */
  label: string
  /** Unique value identifying the tab */
  value: string
  /** Optional icon node rendered above the label */
  icon?: React.ReactNode
  /** Disables the tab when true */
  disabled?: boolean
}

export type NavigationRailProps = {
  /** Tab items rendered in the rail. Defaults to `[]` */
  tabs: NavigationRailTabProps[]
  /** Initially selected tab value. Defaults to `tabs[0].value` */
  defaultValue?: string
  /** Called with the selected tab value when a tab is clicked */
  onTabClick?: (selectedValue: string) => void
  /** Sidebar content rendered next to the rail, collapsible via the show/hide toggle */
  children?: React.ReactNode
  /** Called when the sidebar visibility changes, with true when the sidebar is visible */
  onOpenChange?: (open: boolean) => void
  /** Override internal UI labels for internationalization support */
  labels?: Partial<NavigationRailLabels>
}
