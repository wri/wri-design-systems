/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useState } from 'react'
import { Box, Tabs } from '@chakra-ui/react'
import { MobileTabBarItemProps, MobileTabBarProps } from './types'
import {
  mobileTabBarContainerStyles,
  mobileTabBarItemBadgeStyles,
  mobileTabBarItemIconContainerStyles,
  mobileTabBarItemStyles,
} from './styled'

const getTabIndex = (tabs: MobileTabBarItemProps[], selectedTab?: string) =>
  tabs.findIndex((t) => t.value === selectedTab)

const MobileTabBar = ({
  defaultValue,
  tabs,
  onTabClick,
}: MobileTabBarProps) => {
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
    <div css={mobileTabBarContainerStyles}>
      <Tabs.Root
        width='full'
        defaultValue={defaultValue || tabs?.[0]?.value}
        onValueChange={({ value }) => handleOnTabClick(value)}
      >
        <Tabs.List alignItems='center' border='none'>
          {tabs.map((tab) => {
            const {
              label,
              icon,
              bagdeCount,
              hideLabel,
              'aria-label': ariaLabel,
              ...rest
            } = tab

            return (
              <Tabs.Trigger
                css={mobileTabBarItemStyles}
                key={label}
                aria-label={ariaLabel || label}
                {...rest}
              >
                <div css={mobileTabBarItemIconContainerStyles}>
                  {icon}
                  {bagdeCount ? (
                    <div
                      css={mobileTabBarItemBadgeStyles}
                      className='ds-badge-count'
                    >
                      {bagdeCount}
                    </div>
                  ) : null}
                </div>
                {!hideLabel ? <p>{label}</p> : null}
              </Tabs.Trigger>
            )
          })}
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}

export default MobileTabBar
