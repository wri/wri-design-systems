/* eslint-disable no-console */

import { QualitativeAttribute } from '../../..'
import { InfoIcon } from '../../../icons'

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
    <QualitativeAttribute
      type='point'
      label='Attribute'
      color='#F3FFF2'
      pointIcon={<InfoIcon />}
    />
  </div>
)

export default QualitativeAttributeDemo
