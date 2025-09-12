/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Panel from '.'
import {
  layerPanelContainerStyles,
  layerPanelDescriptionStyles,
  layerPanelHeaderStyles,
  layerPanelTitleStyles,
} from '../../Geospatial/Layers/LayerPanel/styled'
import TabBar from '../../Navigation/TabBar'
import {
  LayerGroupDemo,
  LayerGroupDemo2,
  LayerGroupDemo3,
} from '../../Geospatial/Layers/LayerGroup/LayerGroupDemo'
import Button from '../../Forms/Actions/Button'

const meta = {
  title: 'Containers/Panel/Layer Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ height: '800px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

const defaultTabValue = 'label-1'
const title = 'Title and more'
const description =
  'Lorem ipsum dolor sit amet consectetur. Ac lectus massa auctor ac purus aliquam enim nibh accumsan. Nunc neque suspendisse.'
const buttonTabs = [
  { label: 'Label 1', value: 'label-1' },
  { label: 'Label 2', value: 'label-2' },
  { label: 'Label 3', value: 'label-3' },
]

export const LayerPanel: Story = {
  args: {
    content: <div>content</div>,
  },
  render: function Render(args) {
    const [tabSelected, setTabSelected] = useState('label-1')

    return (
      <Panel
        {...args}
        header={
          <div css={layerPanelContainerStyles}>
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <aside css={layerPanelHeaderStyles} role='complementary'>
              <h2 css={layerPanelTitleStyles} aria-label={title}>
                {title}
              </h2>
              <p css={layerPanelDescriptionStyles} aria-label={description}>
                {description}
              </p>
            </aside>
            {buttonTabs && buttonTabs.length > 0 ? (
              <TabBar
                variant='panel'
                defaultValue={defaultTabValue}
                tabs={buttonTabs}
                onTabClick={setTabSelected}
              />
            ) : null}
          </div>
        }
        content={
          <>
            {tabSelected === 'label-1' ? <LayerGroupDemo /> : null}
            {tabSelected === 'label-2' ? <LayerGroupDemo2 /> : null}
            {tabSelected === 'label-3' ? <LayerGroupDemo3 /> : null}
          </>
        }
        footer={
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button label='Do something' />
          </div>
        }
      />
    )
  },
}
