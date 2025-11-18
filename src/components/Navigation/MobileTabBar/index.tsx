/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useState } from 'react'
import { Tabs, VisuallyHidden } from '@chakra-ui/react'
import { MobileTabBarItemProps, MobileTabBarProps } from './types'
import {
  mobileTabBarContainerStyles,
  mobileTabBarItemBadgeStyles,
  mobileTabBarItemIconContainerStyles,
  mobileTabBarItemStyles,
} from './styled'

const getTabIndex = (tabs: MobileTabBarItemProps[], selectedTab?: string) =>
  Math.max(
    0,
    tabs.findIndex((t) => t.value === selectedTab),
  )

const MobileTabBar = ({
  defaultValue,
  tabs,
  onTabClick,
  hideLabels,
  activationMode = 'manual',
}: MobileTabBarProps) => {
  const totalTabs = tabs.length
  const [selectedTabIndex, setSelectedTabIndex] = useState(() => {
    const initialIndex = getTabIndex(tabs, defaultValue)
    return initialIndex
  })

  const handleOnTabClick = (tabValue: string) => {
    const nextIndex = getTabIndex(tabs, tabValue)
    setSelectedTabIndex(nextIndex)

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
        activationMode={activationMode}
      >
        <Tabs.List alignItems='center' border='none'>
          {tabs.map((tab, index) => {
            const {
              label,
              icon,
              bagdeCount,
              'aria-label': ariaLabel,
              'aria-describedby': ariaDescribedBy,
              disabled,
              ...rest
            } = tab
            const strStatusId = `${tab.value}-str-status`
            const isSelected = selectedTabIndex === index
            const strStatus = [
              `tab ${index + 1} of ${totalTabs}`,
              isSelected ? 'selected' : 'not selected',
            ]

            if (disabled) {
              strStatus.push('disabled')
            }

            const describedBy =
              [ariaDescribedBy, strStatusId].filter(Boolean).join(' ') ||
              undefined

            return (
              <Tabs.Trigger
                css={mobileTabBarItemStyles}
                key={tab.value}
                aria-label={ariaLabel || label}
                aria-disabled={disabled ? true : undefined}
                aria-describedby={describedBy}
                disabled={disabled}
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
                {!hideLabels ? <p>{label}</p> : null}
                <VisuallyHidden id={strStatusId}>
                  {strStatus.join(', ')}
                </VisuallyHidden>
              </Tabs.Trigger>
            )
          })}
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}

export default MobileTabBar
