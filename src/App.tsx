/* eslint-disable @typescript-eslint/no-unused-vars */

import SwitchDemo from './components/Switch/SwitchDemo'
import ButtonDemo from './components/Forms/Buttons/Button/ButtonDemo'
import RadioDemo from './components/Radio/RadioDemo'
import TabBarDemo from './components/TabBar/TabBarDemo'
import CheckboxDemo from './components/Checkbox/CheckboxDemo'
import LayerSidebar from './components/Layer/LayerSidebar/Demo'
import TagDemo from './components/Tag/TagDemo'
import InlineMessageDemo from './components/InlineMessage/InlineMessageDemo'
import TextInputDemo from './components/TextInput/TextInputDemo'
import TextareaDemo from './components/Textarea/TextareaDemo'
import CloseButtonDemo from './components/Forms/Buttons/CloseButton/CloseButtonDemo'
import IconButtonDemo from './components/Forms/Buttons/IconButton/IconButtonDemo'
import SliderDemo from './components/Slider/SliderDemo'
import QualitativeDemo from './components/Legend/QualitativeLegend/QualitativeLegendDemo'
import LayerParametersDemo from './components/Legend/LayerParameters/LayerParametersDemo'
import ScaleBarDemo from './components/Legend/ScaleBar/ScaleBarDemo'
import { LegendItemDemo } from './components/Legend/LegendItem/LegendItemDemo'
import LegendPanelDemo from './components/Legend/LegendPanel/LegendPanelDemo'
import SelectDemo from './components/Forms/Inputs/Select/SelectDemo'

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
        <SelectDemo />
        <LegendPanelDemo />
        <LegendItemDemo />
        <ScaleBarDemo />
        <LayerParametersDemo />
        <QualitativeDemo />
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
  </div>
)

export default App
