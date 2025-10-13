
import List from '.';
import { UserIcon, InfoIcon  } from '../../icons'

const ListDemo = () => {
  const items = [
      {
        id: 0,
        label: 'Username',
        value: 'John Doe',
        variant: "data" as const,
        icon: <UserIcon />,
      },
      {
        id: 1,
        label: 'Connection Status',
        value: 'Active',
        variant: "data" as const,
        icon: <InfoIcon />,
      },
      {
        id: 2,
        label: 'Account Settings',
        caption: 'Manage your profile and security',
        icon: <UserIcon />,
        variant: "navigation" as const,
        onClick: () => alert('Navigating to Settings'),
      },
      {
        id: 3,
        label: 'Home Page',
        caption: 'Go back to the main dashboard of your application',
        icon: <InfoIcon />,
        variant: "navigation" as const,
        onClick: () => alert('Navigating to Home'),
      },
      {
        id: 4,
        label: 'Current Balance',
        value: '$1,500.00',
        variant: "data" as const,
      },
  ];

  return <List items={items} />;
};
export default ListDemo
