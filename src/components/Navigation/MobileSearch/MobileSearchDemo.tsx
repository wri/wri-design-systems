import { MobileSearch } from '../..'
import { HistoryIcon } from '../../icons'
import DemoWrapper from '../../UI/DemoWrapper'

const demoItems = [
  {
    id: 'location-1',
    label: 'Location name',
    caption: 'City • Address',
    icon: <HistoryIcon width='1.5rem' height='1.5rem' />,
  },
  {
    id: 'location-2',
    label: 'Location name',
    caption: 'City • Address',
    icon: <HistoryIcon width='1.5rem' height='1.5rem' />,
  },
  {
    id: 'location-3',
    label: 'Location name',
    caption: 'City • Address',
    icon: <HistoryIcon width='1.5rem' height='1.5rem' />,
  },
  {
    id: 'location-4',
    label: 'Location name',
    caption: 'City • Address',
    icon: <HistoryIcon width='1.5rem' height='1.5rem' />,
  },
  {
    id: 'location-5',
    label: 'Location name',
    caption: 'City • Address',
    icon: <HistoryIcon width='1.5rem' height='1.5rem' />,
  },
]

const MobileSearchDemo = () => (
  <DemoWrapper title='Mobile Search'>
    <div style={{ width: '320px' }}>
      <MobileSearch items={demoItems} />
    </div>
  </DemoWrapper>
)

export default MobileSearchDemo
