import { useState } from 'react'
import {
  NavigationRailContainer,
  NavigationRailTab,
  NavigationRailTabIcon,
  NavigationRailTabLabel,
  NavigationRailToggle,
} from './styled'
import { NavigationRailProps } from './types'
import { HideSidebarIcon, ShowSidebarIcon } from '../icons'

const NavigationRail = ({
  tabs = [],
  isOnLeft = false,
  defaultActiveTabId,
  onTabClick,
}: NavigationRailProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultActiveTabId)
  const [hideSidebar, setHideSidebar] = useState(false)

  const handleOnTabClick = (id: string) => {
    setSelectedTab(id)

    if (onTabClick) {
      onTabClick(id)
    }
  }

  return (
    <NavigationRailContainer isOnLeft={isOnLeft}>
      <div>
        {tabs.map((tab) => (
          <NavigationRailTab
            key={tab.id}
            isSelected={selectedTab === tab.id}
            isOnLeft={isOnLeft}
            onClick={() => handleOnTabClick(tab.id)}
            aria-label={tab['aria-label'] || tab.label}
            {...tab}
          >
            {tab.icon ? (
              <NavigationRailTabIcon>{tab.icon}</NavigationRailTabIcon>
            ) : null}
            <NavigationRailTabLabel isSelected={selectedTab === tab.id}>
              {tab.label}
            </NavigationRailTabLabel>
          </NavigationRailTab>
        ))}
      </div>

      <NavigationRailToggle
        isOnLeft={isOnLeft}
        onClick={() => setHideSidebar(!hideSidebar)}
      >
        <NavigationRailTabIcon>
          {hideSidebar ? <ShowSidebarIcon /> : <HideSidebarIcon />}
        </NavigationRailTabIcon>
        <NavigationRailTabLabel>
          <p>{hideSidebar ? 'Show' : 'Hide'}</p>
          <p>Sidebar</p>
        </NavigationRailTabLabel>
      </NavigationRailToggle>
    </NavigationRailContainer>
  )
}

export default NavigationRail
