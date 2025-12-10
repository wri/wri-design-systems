import Search from '.'
import DemoWrapper from '../../UI/DemoWrapper'

const sampleOptions = [
  { id: 'apple', label: 'Apple' },
  { id: 'banana', label: 'Banana' },
  { id: 'cherry', label: 'Cherry' },
  { id: 'date', label: 'Date' },
]

const SearchDemo = () => (
  <DemoWrapper title='Search'>
    <div style={{ width: '290px' }}>
      <Search options={sampleOptions} placeholder='Search' />
    </div>
  </DemoWrapper>
)

export default SearchDemo
