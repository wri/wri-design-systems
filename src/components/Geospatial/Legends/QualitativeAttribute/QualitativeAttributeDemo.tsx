/* eslint-disable no-console */

import { QualitativeAttribute } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'

const QualitativeAttributeDemo = () => (
  <DemoWrapper title='Qualitative Attribute'>
    <div
      style={{
        width: '100%',
        maxWidth: '250px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
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
  </DemoWrapper>
)

export default QualitativeAttributeDemo
