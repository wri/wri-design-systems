import { MapControl, MapControls } from '../../..'
import { CheckIcon, InfoIcon } from '../../../icons'

const MapControlDemo = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '20px',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
      <MapControl
        items={[
          {
            icon: <CheckIcon />,
            ariaLabel: 'check',
          },
          {
            icon: <InfoIcon />,
            ariaLabel: 'info',
          },
        ]}
      />
      <MapControl
        items={[
          {
            icon: <CheckIcon />,
            ariaLabel: 'check',
          },
          {
            icon: <InfoIcon />,
            ariaLabel: 'info',
          },
        ]}
        vertical
      />
      <MapControl
        items={[
          {
            icon: <CheckIcon />,
            ariaLabel: 'check',
          },
        ]}
      />
      <MapControl
        items={[
          {
            icon: <CheckIcon />,
            ariaLabel: 'check',
            disabled: true,
          },
        ]}
      />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <MapControls.Zoom onZoomInClick={() => {}} onZoomOutClick={() => {}} />
      <MapControls.Expand onClick={() => {}} />
      <MapControls.Share onClick={() => {}} />
      <MapControls.Print onClick={() => {}} />
      <MapControls.Settings onClick={() => {}} />
      <MapControls.Question onClick={() => {}} />
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px',
      }}
    >
      <MapControls.Zoom
        onZoomInClick={() => {}}
        onZoomOutClick={() => {}}
        vertical
      />
      <MapControls.Expand onClick={() => {}} />
      <MapControls.Share onClick={() => {}} />
      <MapControls.Print onClick={() => {}} />
      <MapControls.Settings onClick={() => {}} />
      <MapControls.Question onClick={() => {}} />
    </div>
  </div>
)

export default MapControlDemo
