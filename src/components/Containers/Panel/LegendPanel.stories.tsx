/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React, { Children, cloneElement, ReactElement, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Panel from '.'
import { legendPanelContainerStyles } from '../../Geospatial/Legends/LegendPanel/styled'
import TabBar from '../../Navigation/TabBar'
import {
  LegendItemDemo,
  LegendItemDemo2,
  LegendItemDemo3,
} from '../../Geospatial/Legends/LegendItem/LegendItemDemo'

const meta = {
  title: 'Containers/Panel/Templates/Legend Panel',
  component: Panel,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          "Side panel container with fixed or floating variants. Use `variant='fixed'` for persistent sidebars and `variant='floating'` for overlays.",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    header: { description: '`header` content', control: false },
    content: { description: '`content` content', control: false },
    footer: { description: '`footer` content', control: false },
    width: { description: '`width` value', control: false },
    variant: {
      description: '`variant` variant',
      control: { type: 'select' },
      options: ['fixed', 'floating'],
    },
  },
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

const defaultTabValue = 'legend-tab'

export const LegendPanel: Story = {
  args: {
    content: <div>content</div>,
  },
  render: function Render(args) {
    const [selectedTabValue, setSelectedTabValue] = useState(defaultTabValue)
    const [legentItems, setLegentItems] = useState([
      <LegendItemDemo />,
      <LegendItemDemo2 />,
      <LegendItemDemo3 />,
    ])

    const handleOnTabClick = (tabValue: string) => {
      setSelectedTabValue(tabValue)
    }

    const reorder = (list: any[], startIndex: number, endIndex: number) => {
      const result = Array.from(list)
      const [removed] = result.splice(startIndex, 1)
      result.splice(endIndex, 0, removed)

      return result
    }

    return (
      <Panel
        {...args}
        content={
          <div css={legendPanelContainerStyles}>
            <TabBar
              tabs={[
                { label: 'Legend', value: 'legend-tab' },
                {
                  label: 'Analysis',
                  value: 'analysis-tab',
                },
              ]}
              onTabClick={handleOnTabClick}
            />
            {selectedTabValue === 'legend-tab' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                }}
              >
                {Children.map(legentItems, (child, idx) =>
                  cloneElement(
                    child as ReactElement,
                    {
                      onUpClick: () => {
                        const items = reorder(legentItems, idx, idx - 1)
                        setLegentItems(items)
                      },
                      onDownClick: () => {
                        const items = reorder(legentItems, idx, idx + 1)
                        setLegentItems(items)
                      },
                    } as any,
                  ),
                )}
              </div>
            ) : null}
            {selectedTabValue === 'analysis-tab' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                }}
              >
                <div>analysisContent</div>
              </div>
            ) : null}
          </div>
        }
      />
    )
  },
}
