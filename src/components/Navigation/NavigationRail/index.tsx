/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useState } from 'react'

import { Box, Collapsible, Tabs } from '@chakra-ui/react'
import {
  navigationRailChildrenContainerStyles,
  navigationRailContainerStyles,
  navigationRailTabIconStyles,
  navigationRailTabStyles,
  navigationRailTriggerStyles,
} from './styled'
import { NavigationRailProps } from './types'
import { HideSidebarIcon, ShowSidebarIcon } from '../../icons'

const NavigationRail = ({
  tabs = [],
  defaultValue,
  onTabClick,
  children,
  onOpenChange,
  customHeight,
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
      <div css={navigationRailContainerStyles(customHeight)}>
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
                  className='tab-label'
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
              <div className='tab-label'>
                <p>{hideSidebar ? 'Show' : 'Hide'}</p>
                <p>Sidebar</p>
              </div>
            </Collapsible.Trigger>
          </Collapsible.Root>
        ) : null}
      </div>
      {children ? (
        <Collapsible.Root defaultOpen open={!hideSidebar}>
          <Collapsible.Content>
            <div
              css={navigationRailChildrenContainerStyles}
              role='tabpanel'
              aria-labelledby={seletedTab}
            >
              {children}
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      ) : null}
    </>
  )
}

export default NavigationRail
