import List from '.'
import { MapIcon, SettingsIcon } from '../../icons'

const ListDemo = () => {
  const items = [
    {
      id: 'data-1',
      label: 'Status',
      value: 'Active',
      variant: 'data' as const,
      icon: <MapIcon />,
    },
    {
      id: 'nav-1',
      label: 'Settings',
      caption: 'Configure options',
      variant: 'navigation' as const,
      icon: <SettingsIcon />,
      onItemClick: () => alert('Settings clicked'),
    },
    {
      id: 'data-2',
      label: 'Version',
      value: '2.0',
      variant: 'data' as const,
    },
    {
      id: 'nav-2',
      label: 'Profile',
      variant: 'navigation' as const,
      onItemClick: () => alert('Profile clicked'),
    },
  ]

  return <List items={items} />
}
export default ListDemo
