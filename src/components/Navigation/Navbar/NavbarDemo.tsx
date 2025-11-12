import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Avatar, Badge, Menu, Navbar } from '../..'
import { WriLogoIcon } from '../../icons'

const languages = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
]

const NavbarDemo = () => {
  const [language, setLanguage] = useState('')
  const location = useLocation()

  return (
    <Navbar
      logo={
        <Link to='/'>
          <WriLogoIcon height='32px' width='92px' />
        </Link>
      }
      linkRouter={Link}
      pathname={location.pathname}
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
          <Badge label='Notifications' notificationCount={3} />
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
          label={
            languages?.find((l) => l.value === language)?.label || 'Language'
          }
          items={languages}
          onSelect={setLanguage}
        />,
        <p>WRI Apps</p>,
      ]}
      actionsSection={[{ label: 'Sign in', onClick: () => {} }]}
      maxWidth={1440}
      fixed
    />
  )
}

export default NavbarDemo
