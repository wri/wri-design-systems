import { TabBarItemProps } from '../../TabBar/types'

export type LayerPanelProps = {
  title: string
  description: string
  tabBarVariant?: 'panel' | 'view'
  buttonTabs?: TabBarItemProps[]
  defaultActiveTabLabel?: string
  onTabClick?: (tabLabel: string) => void
  children: React.ReactNode
}