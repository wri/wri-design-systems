import Search from '.'
import DemoWrapper from '../../UI/DemoWrapper'
import { MapIcon } from '../../icons'

const sampleOptions = [
  {
    id: '1',
    label: 'Location Name 1',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
  {
    id: '2',
    label: 'Location Name 2',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
  {
    id: '3',
    label: 'Location Name 3',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
  {
    id: '4',
    label: 'Location Name 4',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
  {
    id: '5',
    label: 'Location Name 5',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
]

const SearchDemo = () => (
  <DemoWrapper title='Search'>
    <div style={{ width: '290px' }}>
      <Search options={sampleOptions} placeholder='Search' />
    </div>
  </DemoWrapper>
)

export default SearchDemo
