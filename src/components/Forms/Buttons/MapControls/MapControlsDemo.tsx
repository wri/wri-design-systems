import { MapControls, MapControlsPresets } from '../../..'
import { CheckIcon, InfoIcon } from '../../../icons'

const MapControlsDemo = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '20px',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
      <MapControls
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
      <MapControls
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
      <MapControls
        items={[
          {
            icon: <CheckIcon />,
            ariaLabel: 'check',
          },
        ]}
      />
      <MapControls
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
      <MapControlsPresets.Zoom
        onZoomInClick={() => {}}
        onZoomOutClick={() => {}}
      />
      <MapControlsPresets.Expand onClick={() => {}} />
      <MapControlsPresets.Share onClick={() => {}} />
      <MapControlsPresets.Print onClick={() => {}} />
      <MapControlsPresets.Settings onClick={() => {}} />
      <MapControlsPresets.Question onClick={() => {}} />
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px',
      }}
    >
      <MapControlsPresets.Zoom
        onZoomInClick={() => {}}
        onZoomOutClick={() => {}}
        vertical
      />
      <MapControlsPresets.Expand onClick={() => {}} />
      <MapControlsPresets.Share onClick={() => {}} />
      <MapControlsPresets.Print onClick={() => {}} />
      <MapControlsPresets.Settings onClick={() => {}} />
      <MapControlsPresets.Question onClick={() => {}} />
    </div>
  </div>
)

export default MapControlsDemo
