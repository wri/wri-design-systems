import { useState } from 'react'
import { TabBarContainer, TabBarItem } from './styled'
import { TabBarProps } from './types'

const TabBar = ({
  variant = 'panel',
  tabs,
  defaultActiveTabId,
  onTabClick,
}: TabBarProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultActiveTabId)

  const handleOnTabClick = (id: string) => {
    setSelectedTab(id)

    if (onTabClick) {
      onTabClick(id)
    }
  }

  return (
    <TabBarContainer variant={variant}>
      {tabs.map((tab) => (
        <TabBarItem
          key={tab.label}
          variant={variant}
          isSelected={selectedTab === tab.id}
          onClick={() => handleOnTabClick(tab.id)}
          aria-label={tab['aria-label'] || tab.label}
          {...tab}
        >
          {tab.label}
        </TabBarItem>
      ))}
    </TabBarContainer>
  )
}

export default TabBar
