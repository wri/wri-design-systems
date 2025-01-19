import { TabBarItemProps } from '../../../Navigation/TabBar/types'

export type LayerPanelProps = {
  title: string
  description: string
  tabBarVariant?: 'panel' | 'view'
  buttonTabs?: TabBarItemProps[]
  defaultValue?: string
  onTabClick?: (tabLabel: string) => void
  children: React.ReactNode
}
