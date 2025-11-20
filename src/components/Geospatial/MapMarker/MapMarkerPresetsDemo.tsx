import { MapMarker } from '../..'
import { PlaceholderIcon } from '../../icons'
import DemoWrapper from '../../UI/DemoWrapper'
import { IconMarkers } from './Presets'

const MapMarkerPresetsDemo = () => (
  <DemoWrapper title='Map Marker'>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      <MapMarker
        ariaLabel='icon marker'
        icon={<PlaceholderIcon color='var(--chakra-colors-success-500)' />}
      />
      <IconMarkers.Paper />
      <IconMarkers.Drop />
      <IconMarkers.Plant />
      <IconMarkers.Point />
    </div>
  </DemoWrapper>
)

export default MapMarkerPresetsDemo
