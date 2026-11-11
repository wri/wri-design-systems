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

### Navbar

| Prop                   | Type                           | Default     | Description                                                                                                                    |
| ---------------------- | ------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `actionsSection`       | `NavbarAction[]`               | —           | Action buttons rendered at the far right of the navbar, each rendered as a Button                                              |
| `backgroundColor`      | `string`                       | —           | Custom background color of the navbar, overrides the theme default                                                             |
| `fixed`                | `boolean`                      | —           | Sticks the navbar to the top of the viewport when true, otherwise it is absolutely positioned at the top of the page           |
| `labels`               | `Partial<NavbarLabels>`        | —           | Override internal UI labels for internationalization support                                                                   |
| `linkRouter`           | `any`                          | —           | Link component from react router or next.js used to render navigation links                                                    |
| `logo`                 | `React.ReactNode`              | —           | Logo node rendered at the left of the navbar                                                                                   |
| `maxWidth`             | `number \| string`             | `'100%'`    | Maximum width of the navbar content container, numbers resolve to spacing-scale rem values                                     |
| `navigationSection`    | `NavbarNavigationItemsProps[]` | —           | Navigation items rendered after the logo, items with a link render as links and items with menu items render as dropdown menus |
| `onNavbarHeightChange` | `(height: number) => void`     | —           | Called with the navbar height whenever it changes between single and double bar layouts                                        |
| `pathname`             | `string`                       | —           | Current pathname from react router or next.js used to highlight the active link                                                |
| `theme`                | `'light' \| 'dark'`            | `'light'`   | Color theme of the navbar                                                                                                      |
| `utilitySection`       | `React.ReactNode[]`            | —           | Custom nodes rendered in the right side of the navbar, hidden on mobile                                                        |
| `variant`              | `'default' \| 'condensed'`     | `'default'` | Navbar height variant, 'condensed' renders a shorter bar                                                                       |

### NavbarNavigationItems

| Prop        | Type              | Default | Description                                                                         |
| ----------- | ----------------- | ------- | ----------------------------------------------------------------------------------- |
| `items`     | `MenuItemProps[]` | —       | Menu items rendered in the dropdown when no link is provided                        |
| `label`     | `string`          | —       | Visible label for the navigation item                                               |
| `leftIcon`  | `React.ReactNode` | —       | Icon rendered before the label                                                      |
| `link`      | `string`          | —       | Target link, when provided the item renders as a link, otherwise as a dropdown menu |
| `onClick`   | `() => void`      | —       | Click handler for the navigation item                                               |
| `rightIcon` | `React.ReactNode` | —       | Icon rendered after the label                                                       |

### Supporting types

```ts
type NavbarLabels = {
  /** aria-label on the hamburger/open-menu button. Default: "Open menu" */
  openMenuLabel: string
  /** Visible button text for the close state of the hamburger toggle. Default: "Close" */
  closeLabel: ReactNodeLabel
  /** Visible button text for the menu state of the hamburger toggle. Default: "Menu" */
  menuLabel: ReactNodeLabel
  /** aria-label on the back button in NavbarMobile. Default: "Go back" */
  goBackLabel: string
  /** aria-label on the close button in NavbarMobile submenu. Default: "Close menu" */
  closeMenuLabel: string
  /** Visible "Close" text inside the mobile close button. Default: "Close" */
  closeButtonText: ReactNodeLabel
}

type NavbarAction = {
  ariaLabel: string
  children?: React.ReactNode
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  onClick?: () => void
}
```
