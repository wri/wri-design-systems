// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Link } from 'react-router-dom'
import NavbarStory from '.'
import { WriLogoIcon } from '../../icons'
import Badge from '../../Status/Badge'
import Menu from '../../Overlays/Menu'

const meta = {
  title: 'Navigation/Navbar',
  component: NavbarStory,
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        iframeHeight: 600,
      },
    },
  },
  decorators: [
    (Story: any) => (
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          height: '300px',
          margin: '0 auto',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NavbarStory>

export default meta
type Story = StoryObj<typeof meta>

export const Navbar: Story = {
  args: {
    linkRouter: Link,
  },
  render: function Render() {
    const [language, setLanguage] = useState('')

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

    return (
      <NavbarStory
        logo={
          <Link to='/'>
            <WriLogoIcon height='32px' width='92px' />
          </Link>
        }
        linkRouter={Link}
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
          <p>Account</p>,
          <Menu
            label={
              languages?.find((l) => l.value === language)?.label || 'Language'
            }
            items={languages}
            onSelect={setLanguage}
          />,
          <p>WRI Apps</p>,
        ]}
        actionsSection={[
          { label: 'Create account', onClick: () => {} },
          { label: 'Sign in', onClick: () => {} },
        ]}
        maxWidth={1440}
        fixed
      />
    )
  },
}
