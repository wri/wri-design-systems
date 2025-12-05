# Navbar

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/story/navigation-navbar--navbar)

[NavbarDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Navigation/Navbar/NavbarDemo.tsx)

## Import

```tsx
import { Navbar } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Navbar
  logo={
    <Link to='/'>
      <WriLogoIcon height='32px' width='92px' />
    </Link>
  }
  linkRouter={Link}
  pathname={pathname}
  navigationSection={[
    {
      label: 'About',
      link: '/page1',
    },
    {
      label: 'Tools',
      items: [
        {
          label: 'Tool 1',
          link: '/page1/page2',
        },
        {
          label: 'Tool 2',
          link: '/page1/page2/page3',
        },
      ],
    },
    {
      label: 'Data',
      items: [
        {
          label: 'Data 1',
          link: '/page1/page2/page3',
        },
        {
          label: 'Data 2',
          link: '/page1/page2/page3/page4',
        },
      ],
    },
    {
      label: 'Use Cases',
      link: '/page1/page2/page3',
      items: [
        {
          label: 'Use Case 1',
          link: '/page1/page2/page3/page4',
        },
        {
          label: 'Use Case 2',
          link: '/page1/page2/page3/page4/page5',
        },
      ],
    },
    {
      label: 'News',
      items: [
        {
          label: 'News 1',
          link: '/page1/page2/page3/page4/page5/page6',
        },
      ],
    },
    {
      label: 'Help',
      link: '/page1/page2/page3/page4/page5/page6',
    },
  ]}
  utilitySection={[
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      Notifications
      <Badge notificationCount={3} hasNotification />
    </div>,
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Avatar
        name='John Doe'
        src='https://bit.ly/sage-adebayo'
        notificationCount={3}
      />
      <p>My Account</p>
    </div>,
    <Menu
      label='Language'
      items={[
        { label: 'English', value: 'en' },
        { label: 'Spanish', value: 'es' },
      ]}
    />,
    <p>WRI Apps</p>,
  ]}
  actionsSection={[
    {
      ariaLabel: 'Create account',
      children: 'Create account',
      onClick: () => {},
    },
    { ariaLabel: 'Sign in', children: 'Sign in', onClick: () => {} },
  ]}
  maxWidth={1440}
  fixed
/>
```

## Props

```ts
type NavbarNavigationItemsProps = {
  label: string
  link?: string
  onClick?: () => void
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  items?: MenuItemProps[]
}

type NavbarProps = {
  logo?: React.ReactNode
  linkRouter: any // Link from react router or next.js
  pathname: string // Pathname from react router or next.js
  navigationSection?: NavbarNavigationItemsProps[]
  utilitySection?: React.ReactNode[]
  actionsSection?: {
    ariaLabel: ButtonProps['aria-label']
    children?: ButtonProps['children']
    variant?: ButtonProps['variant']
    size?: ButtonProps['size']
    onClick?: ButtonProps['onClick']
  }[]
  maxWidth?: number
  fixed?: boolean
  onNavbarHeightChange?: (height: number) => void
  backgroundColor?: string
}
```
