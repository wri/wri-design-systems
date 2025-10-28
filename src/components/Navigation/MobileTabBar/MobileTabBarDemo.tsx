import { MobileTabBar } from '../..'
import { PlaceholderIcon } from '../../icons'

const MobileTabBarDemo = () => (
  <div style={{ width: '450px' }}>
    <MobileTabBar
      tabs={[
        { label: 'One', value: 'one', icon: <PlaceholderIcon /> },
        { label: 'Two', value: 'two', icon: <PlaceholderIcon /> },
        {
          label: 'Three',
          value: 'three',
          icon: <PlaceholderIcon />,
          bagdeCount: 3,
        },
        {
          label: 'Four',
          value: 'four',
          icon: <PlaceholderIcon />,
          disabled: true,
        },
        {
          label: 'Five',
          value: 'five',
          icon: <PlaceholderIcon />,
          hideLabel: true,
        },
      ]}
      onTabClick={console.log}
    />
  </div>
)

export default MobileTabBarDemo
