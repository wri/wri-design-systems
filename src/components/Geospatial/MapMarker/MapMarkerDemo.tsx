import { SimpleMapPin, ClusterPoint } from './MapMarkers'
import DemoWrapper from '../../UI/DemoWrapper'

const MapMarkerDemo = () => (
  <DemoWrapper title='Map Marker'>
    <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
      <ClusterPoint count={10} mode='dark' />
      <ClusterPoint count={123123} mode='light' />
      <SimpleMapPin />
    </div>
  </DemoWrapper>
)

export default MapMarkerDemo
