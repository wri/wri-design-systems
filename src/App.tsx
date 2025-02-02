/* eslint-disable @typescript-eslint/no-unused-vars */

import SwitchDemo from './components/Forms/Controls/Switch/SwitchDemo'
import ButtonDemo from './components/Forms/Buttons/Button/ButtonDemo'
import RadioDemo from './components/Forms/Controls/Radio/RadioDemo'
import TabBarDemo from './components/Navigation/TabBar/TabBarDemo'
import CheckboxDemo from './components/Forms/Controls/Checkbox/CheckboxDemo'
import LayerSidebar from './components/Geospatial/Layers/LayerSidebar/Demo'
import TagDemo from './components/Forms/Tag/TagDemo'
import InlineMessageDemo from './components/Status/InlineMessage/InlineMessageDemo'
import TextInputDemo from './components/Forms/Inputs/TextInput/TextInputDemo'
import TextareaDemo from './components/Forms/Inputs/Textarea/TextareaDemo'
import CloseButtonDemo from './components/Forms/Buttons/CloseButton/CloseButtonDemo'
import IconButtonDemo from './components/Forms/Buttons/IconButton/IconButtonDemo'
import SliderDemo from './components/Forms/Controls/Slider/SliderDemo'
import QualitativeAttributeDemo from './components/Geospatial/Legends/QualitativeAttribute/QualitativeAttributeDemo'
import LayerParametersDemo from './components/Geospatial/Legends/LayerParameters/LayerParametersDemo'
import ScaleBarDemo from './components/Geospatial/Legends/ScaleBar/ScaleBarDemo'
import { LegendItemDemo } from './components/Geospatial/Legends/LegendItem/LegendItemDemo'
import LegendPanelDemo from './components/Geospatial/Legends/LegendPanel/LegendPanelDemo'
import SelectDemo from './components/Forms/Inputs/Select/SelectDemo'
import MultiActionButtonDemo from './components/Forms/Buttons/MultiActionButton/MultiActionButtonDemo'
import CheckboxListDemo from './components/Forms/Inputs/CheckboxList/CheckboxListDemo'
import RadioListDemo from './components/Forms/Inputs/RadioList/RadioListDemo'
import ToastDemo from './components/Status/Toast/ToastDemo'
import { Toast } from './components'
import SliderInputDemo from './components/Forms/Inputs/SliderInput/SliderInputDemo'

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
        <SliderInputDemo />
        <ToastDemo />
        <RadioListDemo />
        <CheckboxListDemo />
        <MultiActionButtonDemo />
        <SelectDemo />
        <LegendPanelDemo />
        <LegendItemDemo />
        <ScaleBarDemo />
        <LayerParametersDemo />
        <QualitativeAttributeDemo />
        <SliderDemo />
        <IconButtonDemo />
        <CloseButtonDemo />
        <TextInputDemo />
        <TextareaDemo />
        <InlineMessageDemo />
        <TagDemo />
        <CheckboxDemo />
        <TabBarDemo />
        <RadioDemo />
        <ButtonDemo />
        <SwitchDemo />
      </div>

      <LayerSidebar />
    </div>
    <Toast />
  </div>
)

export default App
