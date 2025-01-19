// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import TabBar from '../../../Navigation/TabBar'
import {
  LayerPanelDescription,
  LayerPanelContainer,
  LayerPanelHeader,
  LayerPanelTitle,
} from './styled'
import { LayerPanelProps } from './types'

const LayerPanel = ({
  title,
  description,
  tabBarVariant = 'panel',
  buttonTabs,
  defaultValue,
  onTabClick,
  children,
}: LayerPanelProps) => (
  <LayerPanelContainer>
    <LayerPanelHeader role='complementary'>
      <LayerPanelTitle aria-label={title}>{title}</LayerPanelTitle>
      <LayerPanelDescription aria-label={description}>
        {description}
      </LayerPanelDescription>
    </LayerPanelHeader>
    {buttonTabs && buttonTabs.length > 0 ? (
      <TabBar
        variant={tabBarVariant}
        defaultValue={defaultValue}
        tabs={buttonTabs}
        onTabClick={onTabClick}
      />
    ) : null}
    {children}
  </LayerPanelContainer>
)

export default LayerPanel
