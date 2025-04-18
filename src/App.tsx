import ButtonDemo from './components/Forms/Buttons/Button/ButtonDemo'
import CloseButtonDemo from './components/Forms/Buttons/CloseButton/CloseButtonDemo'
import IconButtonDemo from './components/Forms/Buttons/IconButton/IconButtonDemo'
import MapControlDemo from './components/Forms/Buttons/MapControl/MapControlDemo'
import MultiActionButtonDemo from './components/Forms/Buttons/MultiActionButton/MultiActionButtonDemo'

import CheckboxDemo from './components/Forms/Controls/Checkbox/CheckboxDemo'
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
import LayerSidebar from './components/Geospatial/Layers/LayerSidebar/Demo'

import LayerParametersDemo from './components/Geospatial/Legends/LayerParameters/LayerParametersDemo'
import { LegendItemDemo } from './components/Geospatial/Legends/LegendItem/LegendItemDemo'
import LegendPanelDemo from './components/Geospatial/Legends/LegendPanel/LegendPanelDemo'
import QualitativeAttributeDemo from './components/Geospatial/Legends/QualitativeAttribute/QualitativeAttributeDemo'
import ScaleBarDemo from './components/Geospatial/Legends/ScaleBar/ScaleBarDemo'

import ItemCountDemo from './components/InformationDisplay/ItemCount/ItemCountDemo'
import PaginationDemo from './components/InformationDisplay/Pagination/PaginationDemo'
import TableDemo from './components/InformationDisplay/Table/TableDemo'

import BreadcrumbDemo from './components/Navigation/Breadcrumb/BreadcrumbDemo'
import FooterDemo from './components/Navigation/Footer/FooterDemo'
import TabBarDemo from './components/Navigation/TabBar/TabBarDemo'

import MenuDemo from './components/Overlays/Menu/MenuDemo'

import BadgeDemo from './components/Status/Badge/BadgeDemo'
import InlineMessageDemo from './components/Status/InlineMessage/InlineMessageDemo'
import ToastDemo from './components/Status/Toast/ToastDemo'
import { Toast } from './components'

const App = () => (
  <div className='App'>
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

        <LayerGroupDemo />
        <LayerItemDemo />
        <LayerPanelDemo />

        <LayerParametersDemo />
        <LegendItemDemo />
        <LegendPanelDemo />
        <QualitativeAttributeDemo />
        <ScaleBarDemo />

        <ItemCountDemo />
        <PaginationDemo />
        <TableDemo />

        <BreadcrumbDemo />
        <TabBarDemo />

        <MenuDemo />

        <BadgeDemo />
        <InlineMessageDemo />
        <ToastDemo />
      </div>
      <LayerSidebar />
    </div>
    <FooterDemo />
    <Toast />
  </div>
)

export default App
