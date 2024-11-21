// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import { Box, Tabs } from '@chakra-ui/react'
import {
  NavigationRailContainer,
  NavigationRailTab,
  NavigationRailTabIcon,
  NavigationRailToggle,
} from './styled'
import { NavigationRailProps } from './types'
import { HideSidebarIcon, ShowSidebarIcon } from '../icons'

const NavigationRail = ({
  tabs = [],
  defaultValue,
  onTabClick,
  children,
}: NavigationRailProps) => {
  const [hideSidebar, setHideSidebar] = useState(false)

  const handleOnTabClick = (selectedValue: string) => {
    if (onTabClick) {
      onTabClick(selectedValue)
    }
  }

  return (
    <>
      <NavigationRailContainer>
        <Tabs.Root
          defaultValue={defaultValue || tabs?.[0]?.value}
          orientation='vertical'
          width='full'
          onFocusChange={({ focusedValue }) => handleOnTabClick(focusedValue)}
        >
          <Tabs.List alignItems='center' border='none'>
            {tabs.map((tab) => (
              <NavigationRailTab
                key={tab.label}
                aria-label={tab['aria-label'] || tab.label}
                {...tab}
              >
                <Box
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  gap='5px'
                  className='tab-label'
                >
                  {tab.icon ? (
                    <NavigationRailTabIcon>{tab.icon}</NavigationRailTabIcon>
                  ) : null}
                  <p>{tab.label}</p>
                </Box>
              </NavigationRailTab>
            ))}
          </Tabs.List>
        </Tabs.Root>

        {children ? (
          <NavigationRailToggle onClick={() => setHideSidebar(!hideSidebar)}>
            <NavigationRailTabIcon>
              {hideSidebar ? <ShowSidebarIcon /> : <HideSidebarIcon />}
            </NavigationRailTabIcon>
            <div className='tab-label'>
              <p>{hideSidebar ? 'Show' : 'Hide'}</p>
              <p>Sidebar</p>
            </div>
          </NavigationRailToggle>
        ) : null}
      </NavigationRailContainer>
      {children ? <div>aaa</div> : null}
    </>
  )
}

export default NavigationRail
