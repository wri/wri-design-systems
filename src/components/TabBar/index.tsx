// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import { Box, Tabs } from '@chakra-ui/react'
import {
  TabBarContainer,
  TabBarItemPanel,
  TabBarItemView,
  TabBarItemViewDivider,
} from './styled'
import { TabBarItemProps, TabBarProps } from './types'

const getTabIndex = (tabs: TabBarItemProps[], selectedTab?: string) =>
  tabs.findIndex((t) => t.value === selectedTab)

const getBorderSide = (selectedTabIndex: number) => {
  if (selectedTabIndex === 1) {
    return 'none'
  }

  if (selectedTabIndex === 2) {
    return 'left'
  }

  return 'right'
}

const TabBar = ({
  variant = 'panel',
  defaultValue,
  tabs,
  onTabClick,
}: TabBarProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(
    getTabIndex(tabs, defaultValue) || 0,
  )

  const isView = variant === 'view'

  const handleOnTabClick = (tabValue: string) => {
    setSelectedTabIndex(getTabIndex(tabs, tabValue))

    if (onTabClick) {
      onTabClick(tabValue)
    }
  }

  const TabBarItem = isView ? TabBarItemView : TabBarItemPanel

  return (
    <TabBarContainer variant={variant}>
      <Tabs.Root
        width='full'
        defaultValue={defaultValue || tabs?.[0]?.value}
        onFocusChange={({ focusedValue }) => handleOnTabClick(focusedValue)}
      >
        <Tabs.List alignItems='center' border='none'>
          {tabs.map((tab, idx) => (
            <>
              {isView &&
              idx === 1 &&
              getBorderSide(selectedTabIndex) === 'left' ? (
                <TabBarItemViewDivider />
              ) : null}
              <TabBarItem
                key={tab.label}
                aria-label={tab['aria-label'] || tab.label}
                {...tab}
              >
                <Box display='flex' alignItems='center' gap='5px'>
                  {tab.icon}
                  {tab.label}
                </Box>
              </TabBarItem>
              {isView &&
              idx === 1 &&
              getBorderSide(selectedTabIndex) === 'right' ? (
                <TabBarItemViewDivider />
              ) : null}
            </>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </TabBarContainer>
  )
}

export default TabBar
