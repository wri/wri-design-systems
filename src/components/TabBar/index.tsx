// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Box, Tabs } from '@chakra-ui/react'
import { TabBarContainer, TabBarItemPanel, TabBarItemView } from './styled'
import { TabBarProps } from './types'

const TabBar = ({
  variant = 'panel',
  defaultValue,
  tabs,
  onTabClick,
}: TabBarProps) => {
  const handleOnTabClick = (tabValue: string) => {
    if (onTabClick) {
      onTabClick(tabValue)
    }
  }

  const TabBarItem = variant === 'view' ? TabBarItemView : TabBarItemPanel

  return (
    <TabBarContainer variant={variant}>
      <Tabs.Root
        width='full'
        defaultValue={defaultValue || tabs?.[0]?.value}
        onFocusChange={({ focusedValue }) => handleOnTabClick(focusedValue)}
      >
        <Tabs.List alignItems='center' border='none'>
          {tabs.map((tab) => (
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
          ))}
        </Tabs.List>
      </Tabs.Root>
    </TabBarContainer>
  )
}

export default TabBar
