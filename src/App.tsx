import ButtonDemo from './components/Forms/Actions/Button/ButtonDemo'
import CloseButtonDemo from './components/Forms/Actions/CloseButton/CloseButtonDemo'
import IconButtonDemo from './components/Forms/Actions/IconButton/IconButtonDemo'
import MapControlDemo from './components/Forms/Actions/MapControl/MapControlDemo'
import MenuDemo from './components/Forms/Actions/Menu/MenuDemo'
import MultiActionButtonDemo from './components/Forms/Actions/MultiActionButton/MultiActionButtonDemo'

import CheckboxDemo from './components/Forms/Controls/Checkbox/CheckboxDemo'
import CheckboxOptionCardDemo from './components/Forms/Controls/CheckboxOptionCard/CheckboxOptionCardDemo'
import OptionCardDemo from './components/Forms/Controls/OptionCard/OptionCardDemo'
import RadioDemo from './components/Forms/Controls/Radio/RadioDemo'
import SliderDemo from './components/Forms/Controls/Slider/SliderDemo'
import SwitchDemo from './components/Forms/Controls/Switch/SwitchDemo'

import CheckboxListDemo from './components/Forms/Inputs/CheckboxList/CheckboxListDemo'
import InputWithUnitsDemo from './components/Forms/Inputs/InputWithUnits/InputWithUnitsDemo'
import PasswordDemo from './components/Forms/Inputs/Password/PasswordDemo'
import RadioListDemo from './components/Forms/Inputs/RadioList/RadioListDemo'
import SelectDemo from './components/Forms/Inputs/Select/SelectDemo'
import SliderInputDemo from './components/Forms/Inputs/SliderInput/SliderInputDemo'
import TextareaDemo from './components/Forms/Inputs/Textarea/TextareaDemo'
import TextInputDemo from './components/Forms/Inputs/TextInput/TextInputDemo'

import TagDemo from './components/Forms/Tag/TagDemo'

import IconMarkerDemo from './components/Geospatial/IconMarker/IconMarkerDemo'

import { LayerGroupDemo } from './components/Geospatial/Layers/LayerGroup/LayerGroupDemo'
import LayerItemDemo from './components/Geospatial/Layers/LayerItem/LayerItemDemo'
import LayerPanelDemo from './components/Geospatial/Layers/LayerPanel/LayerPanelDemo'

import LayerParametersDemo from './components/Geospatial/Legends/LayerParameters/LayerParametersDemo'
import { LegendItemDemo } from './components/Geospatial/Legends/LegendItem/LegendItemDemo'
import LegendPanelDemo from './components/Geospatial/Legends/LegendPanel/LegendPanelDemo'
import QualitativeAttributeDemo from './components/Geospatial/Legends/QualitativeAttribute/QualitativeAttributeDemo'
import ScaleBarDemo from './components/Geospatial/Legends/ScaleBar/ScaleBarDemo'

import ItemCountDemo from './components/DataDisplay/ItemCount/ItemCountDemo'
import TableDemo from './components/DataDisplay/Table/TableDemo'

import ModalDemo from './components/Containers/Modal/ModalDemo'
import PanelDemo from './components/Containers/Panel/PanelDemo'
import SheetDemo from './components/Containers/Sheet/SheetDemo'

import BreadcrumbDemo from './components/Navigation/Breadcrumb/BreadcrumbDemo'
import FooterDemo from './components/Navigation/Footer/FooterDemo'
import NavbarDemo from './components/Navigation/Navbar/NavbarDemo'
import LayerSidebarDemo from './components/Navigation/NavigationRail/LayerSidebar/LayerSidebarDemo'
import PaginationDemo from './components/Navigation/Pagination/PaginationDemo'
import TabBarDemo from './components/Navigation/TabBar/TabBarDemo'

import BadgeDemo from './components/Status/Badge/BadgeDemo'
import InlineMessageDemo from './components/Status/InlineMessage/InlineMessageDemo'
import ProgressBarDemo from './components/Status/ProgressBar/ProgressBarDemo'
import StepProgressIndicatorDemo from './components/Status/StepProgressIndicator/StepProgressIndicatorDemo'
import ToastDemo from './components/Status/Toast/ToastDemo'
import { Toast } from './components'

const App = () => (
  <div className='App'>
    <NavbarDemo />
    <div className='app-container'>
      <h1 style={{ marginBottom: '20px' }}>Welcome to WRI OS</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 25,
        }}
      >
        <ButtonDemo />
        <CloseButtonDemo />
        <IconButtonDemo />
        <MapControlDemo />
        <MultiActionButtonDemo />

        <CheckboxDemo />
        <CheckboxOptionCardDemo />
        <OptionCardDemo />
        <RadioDemo />
        <SliderDemo />
        <SwitchDemo />

        <CheckboxListDemo />
        <InputWithUnitsDemo />
        <PasswordDemo />
        <RadioListDemo />
        <SelectDemo />
        <SliderInputDemo />
        <TextareaDemo />
        <TextInputDemo />

        <TagDemo />

        <IconMarkerDemo />

        <div
          style={{
            width: '320px',
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
          }}
        >
          <LayerGroupDemo />
          <LayerItemDemo />
          <div style={{ height: '600px' }}>
            <LayerPanelDemo />
          </div>
        </div>

        <LayerParametersDemo />
        <div style={{ width: '320px' }}>
          <LegendItemDemo />
        </div>
        <LegendPanelDemo />
        <QualitativeAttributeDemo />
        <ScaleBarDemo />

        <ItemCountDemo />
        <PaginationDemo />
        <TableDemo />

        <PanelDemo />
        <SheetDemo />

        <BreadcrumbDemo />
        <TabBarDemo />

        <MenuDemo />
        <ModalDemo />

        <BadgeDemo />
        <InlineMessageDemo />
        <ProgressBarDemo />
        <StepProgressIndicatorDemo />
        <ToastDemo />
      </div>
      <LayerSidebarDemo />
    </div>
    <FooterDemo />
    <Toast />
  </div>
)

export default App
