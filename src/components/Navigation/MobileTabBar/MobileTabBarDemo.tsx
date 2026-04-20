/* eslint-disable no-console */

import { MobileTabBar } from '../..'
import { PlaceholderIcon } from '../../icons'
import DemoWrapper from '../../UI/DemoWrapper'

const MobileTabBarDemo = () => (
  <DemoWrapper title='Mobile Tab Bar'>
    <div style={{ width: '100%', maxWidth: '28.125rem' }}>
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
          },
          {
            label: 'Five',
            value: 'five',
            icon: <PlaceholderIcon />,
          },
        ]}
        onTabClick={console.log}
      />
    </div>
    <div style={{ width: '100%', maxWidth: '28.125rem', margin: '1.5625rem 0' }}>
      <p style={{ marginBottom: '0.625rem', fontWeight: 'bold' }}>Default Active</p>
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
          },
          {
            label: 'Five',
            value: 'five',
            icon: <PlaceholderIcon />,
          },
        ]}
        onTabClick={console.log}
        defaultValue='two'
      />
    </div>
    <div style={{ width: '100%', maxWidth: '28.125rem', margin: '1.5625rem 0' }}>
      <p style={{ marginBottom: '0.625rem', fontWeight: 'bold' }}>Disabled</p>
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
          },
        ]}
        onTabClick={console.log}
      />
    </div>
    <div style={{ width: '100%', maxWidth: '28.125rem', margin: '1.5625rem 0' }}>
      <p style={{ marginBottom: '0.625rem', fontWeight: 'bold' }}>
        With Hidden Labels
      </p>
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
          },
          {
            label: 'Five',
            value: 'five',
            icon: <PlaceholderIcon />,
          },
        ]}
        onTabClick={console.log}
        hideLabels
      />
    </div>
    <div style={{ width: '100%', maxWidth: '28.125rem', margin: '1.5625rem 0' }}>
      <p style={{ marginBottom: '0.625rem', fontWeight: 'bold' }}>
        Automatic activation mode
      </p>
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
          },
          {
            label: 'Five',
            value: 'five',
            icon: <PlaceholderIcon />,
          },
        ]}
        onTabClick={console.log}
        activationMode='automatic'
      />
    </div>
  </DemoWrapper>
)

export default MobileTabBarDemo
