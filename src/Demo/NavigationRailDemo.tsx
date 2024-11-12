import { AddIcon, SettingsIcon } from '@chakra-ui/icons'
import { NavigationRail } from '../components'

const NavigationRailDemo = () => (
  <NavigationRail
    tabs={[
      {
        id: 'label-1',
        label: 'Label 1',
      },
      {
        id: 'label-2',
        label: 'Label 2',
        icon: <SettingsIcon />,
      },
      {
        id: 'label-3',
        label: 'Label 3',
        icon: <AddIcon />,
      },
    ]}
  />
)

export default NavigationRailDemo
