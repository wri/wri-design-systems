import { IconMarker } from '../..'
import { PlaceholderIcon } from '../../icons'
import DemoWrapper from '../../UI/DemoWrapper'
import { IconMarkers } from './IconMarkers'

const IconMarkerDemo = () => (
  <DemoWrapper title='Icon Marker'>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      <IconMarker
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

export default IconMarkerDemo
