/* eslint-disable no-console */

import { QualitativeLegend } from '../../..'
import { InfoIcon } from '../../../icons'

const QualitativeLegendDemo = () => (
  <div style={{ width: '238px' }}>
    <QualitativeLegend
      type='raster'
      label='Attribute'
      caption='Caption'
      color='#238B45'
      onActionClick={() => console.log('click')}
      showActionButton
    />
    <QualitativeLegend
      type='line'
      label='Attribute'
      color='#238B45'
      onActionClick={() => console.log('click')}
      showActionButton
    />
    <QualitativeLegend
      type='point'
      label='Attribute'
      color='#F3FFF2'
      pointIcon={<InfoIcon />}
    />
  </div>
)

export default QualitativeLegendDemo
