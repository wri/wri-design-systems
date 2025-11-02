/* eslint-disable no-console */

import { MobileTabBar } from '../..'
import { PlaceholderIcon } from '../../icons'
import DemoWrapper from '../../UI/DemoWrapper'

const MobileTabBarDemo = () => (
  <DemoWrapper title='Mobile Tab Bar'>
    <div style={{ width: '100%', maxWidth: '450px' }}>
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
    <div style={{ width: '100%', maxWidth: '450px', margin: '25px 0' }}>
      <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>Default Active</p>
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
    <div style={{ width: '100%', maxWidth: '450px', margin: '25px 0' }}>
      <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>Disabled</p>
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
    <div style={{ width: '100%', maxWidth: '450px', margin: '25px 0' }}>
      <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
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
  </DemoWrapper>
)

export default MobileTabBarDemo
