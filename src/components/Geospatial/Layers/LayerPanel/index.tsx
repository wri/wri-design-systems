/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import TabBar from '../../../Navigation/TabBar'
import {
  layerPanelContainerStyles,
  layerPanelDescriptionStyles,
  layerPanelHeaderStyles,
  layerPanelTitleStyles,
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
        variant={tabBarVariant}
        defaultValue={defaultValue}
        tabs={buttonTabs}
        onTabClick={onTabClick}
      />
    ) : null}
    {children}
  </div>
)

export default LayerPanel
