import { SimpleMapPin, ClusterPoint } from './MapMarkers'
import DemoWrapper from '../../UI/DemoWrapper'

const IconMarkerDemo = () => (
  <DemoWrapper title='Map Marker Presets'>
    <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
      <ClusterPoint count={10} mode='dark' />
      <ClusterPoint count={123123} mode='light' />
      <SimpleMapPin />
    </div>
  </DemoWrapper>
)

export default IconMarkerDemo
