/* eslint-disable no-console */

import { QualitativeAttribute } from '../../..'

const QualitativeAttributeDemo = () => (
  <div style={{ width: '238px' }}>
    <QualitativeAttribute
      type='raster'
      label='Attribute'
      caption='Caption'
      color='#238B45'
      onActionClick={() => console.log('click')}
      showActionButton
    />
    <QualitativeAttribute
      type='line'
      label='Attribute'
      color='#238B45'
      onActionClick={() => console.log('click')}
      showActionButton
    />
    <QualitativeAttribute type='point' label='Attribute' color='#C7E9C0' />
  </div>
)

export default QualitativeAttributeDemo
