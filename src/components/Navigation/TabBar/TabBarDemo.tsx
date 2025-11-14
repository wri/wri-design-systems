/* eslint-disable no-console */

import { TabBar } from '../..'
import { CheckIcon } from '../../icons'
import DemoWrapper from '../../UI/DemoWrapper'

const TabBarDemo = () => (
  <DemoWrapper title='Tab Bar'>
    <div style={{ width: '100%', maxWidth: '300px' }}>
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
      <br />
      <TabBar
        variant='panel'
        tabs={[
          { label: 'One', value: 'one' },
          { label: 'Two', value: 'two' },
          { label: 'Three', value: 'three' },
        ]}
        activationMode='automatic'
      />
    </div>
  </DemoWrapper>
)

export default TabBarDemo
