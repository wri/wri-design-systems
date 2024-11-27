import { NavigationRail } from '..'
import { CheckIcon } from '../icons'

const NavigationRailDemo = () => (
  <NavigationRail
    tabs={[
      {
        label: 'Label 1',
        value: 'label-1',
        icon: <CheckIcon />,
        // disabled: true,
      },
      {
        label: 'Label 2',
        value: 'label-2',
        icon: <CheckIcon />,
      },
      {
        label: 'Label 3',
        value: 'label-3',
        icon: <CheckIcon />,
      },
    ]}
  >
    <div>Children</div>
  </NavigationRail>
)

export default NavigationRailDemo
