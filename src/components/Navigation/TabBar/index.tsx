/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { Fragment, useState } from 'react'

import { Box, Tabs } from '@chakra-ui/react'
import {
  defaultTabStyles,
  tabBarContainerStyles,
  tabBarItemPanelStyles,
  tabBarItemTransparentStyles,
  tabBarItemViewDividerStyles,
  tabBarItemViewStyles,
} from './styled'
import { TabBarItemProps, TabBarProps } from './types'

const getTabIndex = (tabs: TabBarItemProps[], selectedTab?: string) =>
  Math.max(
    0,
    tabs.findIndex((t) => t.value === selectedTab),
  )

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
  activationMode = 'manual',
}: TabBarProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(
    getTabIndex(tabs, defaultValue) || 0,
  )

  const handleOnTabClick = (tabValue: string) => {
    setSelectedTabIndex(getTabIndex(tabs, tabValue))

    if (onTabClick) {
      onTabClick(tabValue)
    }
  }

  return (
    <div css={tabBarContainerStyles(variant)}>
      <Tabs.Root
        width='full'
        defaultValue={defaultValue || tabs?.[0]?.value}
        onValueChange={({ value }) => handleOnTabClick(value)}
        activationMode={activationMode}
      >
        <Tabs.List alignItems='center' border='none'>
          {tabs.map((tab, idx) => (
            <Fragment key={tab.label}>
              {variant === 'view' &&
              idx === 1 &&
              getBorderSide(selectedTabIndex) === 'left' ? (
                <div css={tabBarItemViewDividerStyles} />
              ) : null}
              <Tabs.Trigger
                css={[
                  defaultTabStyles,
                  variant === 'view' && tabBarItemViewStyles,
                  variant === 'panel' && tabBarItemPanelStyles,
                  variant === 'transparent' && tabBarItemTransparentStyles,
                ]}
                key={tab.label}
                aria-label={tab['aria-label'] || tab.label}
                {...tab}
              >
                <Box display='flex' alignItems='center' gap='5px'>
                  {tab.icon}
                  {tab.label}
                </Box>
              </Tabs.Trigger>
              {variant === 'view' &&
              idx === 1 &&
              getBorderSide(selectedTabIndex) === 'right' ? (
                <div css={tabBarItemViewDividerStyles} />
              ) : null}
            </Fragment>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}

export default TabBar
