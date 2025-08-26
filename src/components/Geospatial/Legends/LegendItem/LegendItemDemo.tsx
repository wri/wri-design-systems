// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

/* eslint-disable no-console */
import {
  InlineMessage,
  LayerParameters,
  LegendItem,
  QualitativeAttribute,
  ScaleBar,
} from '../../..'

export const LegendItemDemo = ({
  onDrag = () => {},
  onUpClick = () => {},
  onDownClick = () => {},
}: {
  onDrag?: VoidFunction
  onUpClick?: VoidFunction
  onDownClick?: VoidFunction
}) => (
  <div style={{ width: '100%' }}>
    <LegendItem
      layerName='Layer Name'
      dataUnit='Data Unit'
      onDrag={onDrag}
      onUpClick={onUpClick}
      onDownClick={onDownClick}
      onRemoveClick={() => console.log('remove')}
      onInfoClick={() => console.log('info')}
      onOpacityChanged={(value) => console.log('opacity changed', value)}
    >
      <ScaleBar
        colors={['#EDF8FB', '#B2E2E2', '#66C2A4', '#2CA25F', '#006D2C']}
        values={['0%', '25%', '50%', '75%', '100%']}
      />
      <QualitativeAttribute
        type='raster'
        label='Attribute'
        caption='Caption'
        color='#238B45'
        onActionClick={() => console.log('click')}
        showActionButton
      />
      <QualitativeAttribute
        type='raster'
        label='Attribute'
        caption='Caption'
        color='#238B45'
      />
      <InlineMessage
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

export const LegendItemDemo2 = ({
  onDrag = () => {},
  onUpClick = () => {},
  onDownClick = () => {},
}: {
  onDrag?: VoidFunction
  onUpClick?: VoidFunction
  onDownClick?: VoidFunction
}) => (
  <div style={{ width: '100%' }}>
    <LegendItem
      layerName='Layer Name 2'
      dataUnit='Data Unit'
      onDrag={onDrag}
      onUpClick={onUpClick}
      onDownClick={onDownClick}
      onRemoveClick={() => console.log('remove')}
      onInfoClick={() => console.log('info')}
      onOpacityChanged={(value) => console.log('opacity changed', value)}
    >
      <ScaleBar
        colors={['#EDF8FB', '#B2E2E2', '#66C2A4', '#2CA25F', '#006D2C']}
        values={['0%', '25%', '50%', '75%', '100%']}
      />
      <QualitativeAttribute
        type='raster'
        label='Attribute'
        caption='Caption'
        color='#238B45'
        onActionClick={() => console.log('click')}
        showActionButton
      />
      <QualitativeAttribute
        type='raster'
        label='Attribute'
        caption='Caption'
        color='#238B45'
      />
      <InlineMessage
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
export const LegendItemDemo3 = ({
  onDrag = () => {},
  onUpClick = () => {},
  onDownClick = () => {},
}: {
  onDrag?: VoidFunction
  onUpClick?: VoidFunction
  onDownClick?: VoidFunction
}) => (
  <div style={{ width: '100%' }}>
    <LegendItem
      layerName='Layer Name 3'
      dataUnit='Data Unit'
      onDrag={onDrag}
      onUpClick={onUpClick}
      onDownClick={onDownClick}
      onRemoveClick={() => console.log('remove')}
      onInfoClick={() => console.log('info')}
      onOpacityChanged={(value) => console.log('opacity changed', value)}
    >
      <ScaleBar
        colors={['#EDF8FB', '#B2E2E2', '#66C2A4', '#2CA25F', '#006D2C']}
        values={['0%', '25%', '50%', '75%', '100%']}
      />
      <QualitativeAttribute
        type='raster'
        label='Attribute'
        caption='Caption'
        color='#238B45'
        onActionClick={() => console.log('click')}
        showActionButton
      />
      <QualitativeAttribute
        type='raster'
        label='Attribute'
        caption='Caption'
        color='#238B45'
      />
      <InlineMessage
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
