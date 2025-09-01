/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React, { useState } from 'react'

import { Button, Panel, TabBar } from '../../..'
import {
  LayerGroupDemo,
  LayerGroupDemo2,
  LayerGroupDemo3,
} from '../LayerGroup/LayerGroupDemo'
import {
  layerPanelContainerStyles,
  layerPanelDescriptionStyles,
  layerPanelHeaderStyles,
  layerPanelTitleStyles,
} from './styled'

const defaultTabValue = 'label-1'
const title = 'Title and more'
const description =
  'Lorem ipsum dolor sit amet consectetur. Ac lectus massa auctor ac purus aliquam enim nibh accumsan. Nunc neque suspendisse.'
const buttonTabs = [
  { label: 'Label 1', value: 'label-1' },
  { label: 'Label 2', value: 'label-2' },
  { label: 'Label 3', value: 'label-3' },
]

const LayerPanelDemo = () => {
  const [tabSelected, setTabSelected] = useState(defaultTabValue)

  return (
    <Panel
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
}

export default LayerPanelDemo
