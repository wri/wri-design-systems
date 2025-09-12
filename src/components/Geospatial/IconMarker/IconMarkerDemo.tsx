import { IconMarker } from '../..'
import { PlaceholderIcon } from '../../icons'
import { IconMarkers } from './presets/IconMarkers'

const IconMarkerDemo = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '20px',
    }}
  >
    <IconMarker
      ariaLabel='icon marker'
      icon={<PlaceholderIcon color='var(--chakra-colors-success-500)' />}
    />
    <IconMarkers.Paper />
    <IconMarkers.Drop />
    <IconMarkers.Plant />
  </div>
)

export default IconMarkerDemo
