import { ButtonProps } from '@chakra-ui/react'

export type NavigationRailTabProps = {
  id: string
  label: string
  icon?: React.ReactElement | React.ReactNode
} & ButtonProps

export type NavigationRailProps = {
  tabs: NavigationRailTabProps[]
  isOnLeft?: boolean
  defaultActiveTabId?: string
  onTabClick?: (tabId: string) => void
}
