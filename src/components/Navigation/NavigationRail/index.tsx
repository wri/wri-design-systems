/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useState } from 'react'

import { Box, Collapsible, Tabs, useMediaQuery } from '@chakra-ui/react'
import {
  navigationRailChildrenContainerStyles,
  navigationRailContainerStyles,
  navigationRailTabIconStyles,
  navigationRailTabStyles,
  navigationRailTriggerStyles,
} from './styled'
import { NavigationRailProps } from './types'
import { HideSidebarIcon, ShowSidebarIcon } from '../../icons'
import { getThemedColor } from '../../../lib/theme'

const NavigationRail = ({
  tabs = [],
  defaultValue,
  onTabClick,
  children,
  onOpenChange,
}: NavigationRailProps) => {
  const [hideSidebar, setHideSidebar] = useState(false)
  const [selectedTab, setSelectedTab] = useState(
    defaultValue || tabs?.[0]?.value,
  )

  const handleOnTabClick = (selectedValue: string) => {
    setSelectedTab(selectedValue)
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
  const [isMobile] = useMediaQuery(['(max-width: 768px)'])
  if (isMobile) {
    return (
      <Tabs.Root
        defaultValue={selectedTab}
        onValueChange={({ value }) => handleOnTabClick(value)}
      >
        <Tabs.List
          style={{
            display: 'flex',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            padding: '8px',
            gap: '8px',
          }}
        >
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              css={{
                '--indicator-color': getThemedColor('primary', 500),
                flexShrink: 0,
                padding: '10px 16px',
                color: getThemedColor('neutral', 600),
                '&[data-selected]': {
                  color: getThemedColor('neutral', 800),
                  fontWeight: 600,
                },
              }}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {tabs.map((tab) => (
          <Tabs.Content key={tab.value} value={tab.value}>
            {children}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    )
  }

  return (
    <div
      style={{
        height: 'calc(100vh - 48px - 56px)',
        position: 'fixed',
        top: '48px',
        left: 0,
        display: 'flex',
      }}
    >
      <div css={navigationRailContainerStyles}>
        <Tabs.Root
          defaultValue={defaultValue || tabs?.[0]?.value}
          orientation='horizontal'
          width='full'
          onValueChange={({ value }) => {
            handleOnTabClick(value)
          }}
          role='tablist'
        >
          <Tabs.List
            alignItems='center'
            border='none'
            style={{ flexDirection: 'column' }}
          >
            {tabs.map((tab) => (
              <Tabs.Trigger
                css={navigationRailTabStyles}
                key={tab.label}
                aria-label={tab['aria-label'] || tab.label}
                {...tab}
              >
                <Box
                  display='flex'
                  alignItems='center'
                  flexDirection='column'
                  gap='5px'
                  className='ds-tab-label'
                >
                  {tab.icon ? (
                    <div css={navigationRailTabIconStyles}>{tab.icon}</div>
                  ) : null}
                  <p>{tab.label}</p>
                </Box>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>

        {children ? (
          <Collapsible.Root onOpenChange={handleOnOpenChange}>
            <Collapsible.Trigger css={navigationRailTriggerStyles}>
              <div css={navigationRailTabIconStyles}>
                {hideSidebar ? <ShowSidebarIcon /> : <HideSidebarIcon />}
              </div>
              <div className='ds-tab-label'>
                <p>{hideSidebar ? 'Show' : 'Hide'}</p>
                <p>Sidebar</p>
              </div>
            </Collapsible.Trigger>
          </Collapsible.Root>
        ) : null}
      </div>
      {children ? (
        <Collapsible.Root defaultOpen open={!hideSidebar}>
          <Collapsible.Content height='100%'>
            <div
              css={navigationRailChildrenContainerStyles}
              role='tabpanel'
              aria-labelledby={selectedTab}
            >
              {children}
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      ) : null}
    </div>
  )
}

export default NavigationRail
