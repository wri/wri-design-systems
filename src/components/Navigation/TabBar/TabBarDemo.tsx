/* eslint-disable no-console */

import { TabBar } from '../..'
import { CheckIcon } from '../../icons'

const TabBarDemo = () => (
  <div style={{ width: '300px' }}>
    <TabBar
      variant='panel'
      tabs={[
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'Three', value: 'three' },
      ]}
      onTabClick={console.log}
    />
    <br />
    <TabBar
      variant='panel'
      defaultValue='two'
      tabs={[
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two', icon: <CheckIcon /> },
        { label: 'Three', value: 'three' },
      ]}
    />
    <br />
    <TabBar
      variant='panel'
      defaultValue='two'
      tabs={[
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two', disabled: true },
        { label: 'Three', value: 'three' },
      ]}
    />
    <br />
    <TabBar
      variant='view'
      defaultValue='two'
      tabs={[
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'Three', value: 'three' },
      ]}
    />
  </div>
)

export default TabBarDemo
