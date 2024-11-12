import { TabBar } from '../components'

const TabBarDemo = () => (
  <div style={{ width: '300px' }}>
    <TabBar
      variant='panel'
      tabs={[
        { label: 'One' },
        { label: 'Two' },
        { label: 'Three', isDisabled: false },
      ]}
    />
    <br />
    <TabBar
      variant='view'
      tabs={[
        { label: 'One' },
        { label: 'Two' },
        { label: 'Three', isDisabled: false },
      ]}
    />
  </div>
)

export default TabBarDemo
