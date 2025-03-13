import MapControls from '../Forms/Buttons/MapControls'
import {
  PlusIcon,
  MinusIcon,
  ExpandIcon,
  ShareIcon,
  PrintIcon,
  SettingsIcon,
  QuestionIcon,
} from '../icons'

type ZoomProps = {
  onZoomInClick: () => void
  onZoomOutClick: () => void
  vertical?: boolean
}

const Zoom = ({ onZoomInClick, onZoomOutClick, vertical }: ZoomProps) => (
  <MapControls
    items={[
      {
        icon: <PlusIcon />,
        ariaLabel: 'zoom in',
        onClick: onZoomInClick,
      },
      {
        icon: <MinusIcon />,
        ariaLabel: 'zoom out',
        onClick: onZoomOutClick,
      },
    ]}
    vertical={vertical}
  />
)

type GenericControlProps = {
  onClick: () => void
}

const Expand = ({ onClick }: GenericControlProps) => (
  <MapControls
    items={[
      {
        icon: <ExpandIcon />,
        ariaLabel: 'expand',
        onClick,
      },
    ]}
  />
)

const Share = ({ onClick }: GenericControlProps) => (
  <MapControls
    items={[
      {
        icon: <ShareIcon />,
        ariaLabel: 'share',
        onClick,
      },
    ]}
  />
)

const Print = ({ onClick }: GenericControlProps) => (
  <MapControls
    items={[
      {
        icon: <PrintIcon />,
        ariaLabel: 'print',
        onClick,
      },
    ]}
  />
)

const Settings = ({ onClick }: GenericControlProps) => (
  <MapControls
    items={[
      {
        icon: <SettingsIcon />,
        ariaLabel: 'settings',
        onClick,
      },
    ]}
  />
)

const Question = ({ onClick }: GenericControlProps) => (
  <MapControls
    items={[
      {
        icon: <QuestionIcon />,
        ariaLabel: 'question',
        onClick,
      },
    ]}
  />
)

export const MapControlsPresets = {
  Zoom,
  Expand,
  Share,
  Print,
  Settings,
  Question,
}
