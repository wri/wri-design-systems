// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

/* eslint-disable no-console */
import {
  Banner,
  LayerParameters,
  LegendItem,
  QualitativeLegend,
  ScaleLegend,
} from '../..'

export const LegendItemDemo = () => (
  <div style={{ width: '290px' }}>
    <LegendItem
      layerName='Layer Name'
      dataUnit='Data Unit'
      onDrag={() => console.log('drag')}
      onUpClick={() => console.log('up')}
      onDownClick={() => console.log('down')}
      onRemoveClick={() => console.log('remove')}
      onInfoClick={() => console.log('info')}
      onOpacityChanged={(value) => console.log('opacity changed', value)}
    >
      <ScaleLegend
        colors={['#EDF8FB', '#B2E2E2', '#66C2A4', '#2CA25F', '#006D2C']}
        values={['0%', '25%', '50%', '75%', '100%']}
      />
      <QualitativeLegend
        type='raster'
        label='Attribute'
        caption='Caption'
        color='#238B45'
        onActionClick={() => console.log('click')}
        showActionButton
      />
      <QualitativeLegend
        type='raster'
        label='Attribute'
        caption='Caption'
        color='#238B45'
      />
      <Banner
        label='Label'
        caption='caption'
        variant='info-white'
        actionLabel='Label'
        size='small'
      />
      <LayerParameters label='Adjust layer parameters'>
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
      </LayerParameters>
    </LegendItem>
  </div>
)

export const LegendItemDemo2 = () => (
  <div style={{ width: '290px' }}>
    <LegendItem
      layerName='Layer Name 2'
      dataUnit='Data Unit'
      onDrag={() => console.log('drag')}
      onUpClick={() => console.log('up')}
      onDownClick={() => console.log('down')}
      onRemoveClick={() => console.log('remove')}
      onInfoClick={() => console.log('info')}
      onOpacityChanged={(value) => console.log('opacity changed', value)}
    >
      <ScaleLegend
        colors={['#EDF8FB', '#B2E2E2', '#66C2A4', '#2CA25F', '#006D2C']}
        values={['0%', '25%', '50%', '75%', '100%']}
      />
      <QualitativeLegend
        type='raster'
        label='Attribute'
        caption='Caption'
        color='#238B45'
        onActionClick={() => console.log('click')}
        showActionButton
      />
      <QualitativeLegend
        type='raster'
        label='Attribute'
        caption='Caption'
        color='#238B45'
      />
      <Banner
        label='Label'
        caption='caption'
        variant='info-white'
        actionLabel='Label'
        size='small'
      />
      <LayerParameters label='Adjust layer parameters'>
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
      </LayerParameters>
    </LegendItem>
  </div>
)
export const LegendItemDemo3 = () => (
  <div style={{ width: '290px' }}>
    <LegendItem
      layerName='Layer Name 3'
      dataUnit='Data Unit'
      onDrag={() => console.log('drag')}
      onUpClick={() => console.log('up')}
      onDownClick={() => console.log('down')}
      onRemoveClick={() => console.log('remove')}
      onInfoClick={() => console.log('info')}
      onOpacityChanged={(value) => console.log('opacity changed', value)}
    >
      <ScaleLegend
        colors={['#EDF8FB', '#B2E2E2', '#66C2A4', '#2CA25F', '#006D2C']}
        values={['0%', '25%', '50%', '75%', '100%']}
      />
      <QualitativeLegend
        type='raster'
        label='Attribute'
        caption='Caption'
        color='#238B45'
        onActionClick={() => console.log('click')}
        showActionButton
      />
      <QualitativeLegend
        type='raster'
        label='Attribute'
        caption='Caption'
        color='#238B45'
      />
      <Banner
        label='Label'
        caption='caption'
        variant='info-white'
        actionLabel='Label'
        size='small'
      />
      <LayerParameters label='Adjust layer parameters'>
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
        <div>Component Placeholder</div>
      </LayerParameters>
    </LegendItem>
  </div>
)
