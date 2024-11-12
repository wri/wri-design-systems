import { useState } from 'react'
import { TabBarContainer, TabBarItem } from './styled'
import { TabBarProps } from './types'

const TabBar = ({
  variant = 'panel',
  tabs,
  defaultActiveTabLabel,
  onTabClick,
}: TabBarProps) => {
  const [selectedTab, setSelectedTab] = useState(
    defaultActiveTabLabel || tabs?.[0]?.label,
  )

  const handleOnTabClick = (label: string) => {
    setSelectedTab(label)

    if (onTabClick) {
      onTabClick(label)
    }
  }

  return (
    <TabBarContainer variant={variant}>
      {tabs.map((tab) => (
        <TabBarItem
          key={tab.label}
          variant={variant}
          isSelected={selectedTab === tab.label}
          onClick={() => handleOnTabClick(tab.label)}
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
