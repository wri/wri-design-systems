import { MapMarker } from '../..'
import { PlaceholderIcon } from '../../icons'
import DemoWrapper from '../../UI/DemoWrapper'
import { MapMarkers } from './Presets'

const MapMarkerPresetsDemo = () => (
  <DemoWrapper title='Map Marker Presets'>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      <MapMarker
        ariaLabel='map marker'
        icon={<PlaceholderIcon color='var(--chakra-colors-success-500)' />}
      />
      <MapMarkers.Paper />
      <MapMarkers.Drop />
      <MapMarkers.Plant />
      <MapMarkers.Point />
    </div>
  </DemoWrapper>
)

export default MapMarkerPresetsDemo
