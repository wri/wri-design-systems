import TabBar from '../../TabBar'
import { LayerPanelDescription, LayerPanelContainer, LayerPanelHeader, LayerPanelTitle } from './styled'
import { LayerPanelProps } from './types'

const LayerPanel = ({
  title,
  description,
  tabBarVariant = 'panel',
  buttonTabs,
  defaultActiveTabLabel,
  onTabClick,
  children,
}: LayerPanelProps) => (
  <LayerPanelContainer>
    <LayerPanelHeader>
      <LayerPanelTitle>{title}</LayerPanelTitle>
      <LayerPanelDescription>{description}</LayerPanelDescription>
    </LayerPanelHeader>
    {buttonTabs && buttonTabs.length > 0 ? (
      <TabBar
        variant={tabBarVariant}
        defaultActiveTabLabel={defaultActiveTabLabel}
        tabs={buttonTabs}
        onTabClick={onTabClick}
      />
    ) : null}
    {children}
  </LayerPanelContainer>
)

export default LayerPanel
