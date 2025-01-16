// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import { Box, Collapsible, Tabs } from '@chakra-ui/react'
import {
  NavigationRailChildrenContainer,
  NavigationRailContainer,
  NavigationRailTab,
  NavigationRailTabIcon,
  NavigationRailTrigger,
} from './styled'
import { NavigationRailProps } from './types'
import { HideSidebarIcon, ShowSidebarIcon } from '../../icons'

const NavigationRail = ({
  tabs = [],
  defaultValue,
  onTabClick,
  children,
  onOpenChange,
}: NavigationRailProps) => {
  const [hideSidebar, setHideSidebar] = useState(false)
  const [seletedTab, setSeletedTab] = useState(defaultValue || tabs?.[0]?.value)

  const handleOnTabClick = (selectedValue: string) => {
    setSeletedTab(selectedValue)
    if (onTabClick) {
      onTabClick(selectedValue)
    }
  }

  const handleOnOpenChange = ({ open }: { open: boolean }) => {
    setHideSidebar(open)

    if (onOpenChange) {
      onOpenChange(!open)
    }
  }

  return (
    <>
      <NavigationRailContainer>
        <Tabs.Root
          defaultValue={defaultValue || tabs?.[0]?.value}
          orientation='horizontal'
          width='full'
          onFocusChange={({ focusedValue }) => handleOnTabClick(focusedValue)}
          role='tablist'
        >
          <Tabs.List
            alignItems='center'
            border='none'
            style={{ flexDirection: 'column' }}
          >
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
          <Collapsible.Root onOpenChange={handleOnOpenChange}>
            <NavigationRailTrigger>
              <NavigationRailTabIcon>
                {hideSidebar ? <ShowSidebarIcon /> : <HideSidebarIcon />}
              </NavigationRailTabIcon>
              <div className='tab-label'>
                <p>{hideSidebar ? 'Show' : 'Hide'}</p>
                <p>Sidebar</p>
              </div>
            </NavigationRailTrigger>
          </Collapsible.Root>
        ) : null}
      </NavigationRailContainer>
      {children ? (
        <Collapsible.Root defaultOpen open={!hideSidebar}>
          <Collapsible.Content>
            <NavigationRailChildrenContainer
              role='tabpanel'
              aria-labelledby={seletedTab}
            >
              {children}
            </NavigationRailChildrenContainer>
          </Collapsible.Content>
        </Collapsible.Root>
      ) : null}
    </>
  )
}

export default NavigationRail
