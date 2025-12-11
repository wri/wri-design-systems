/* eslint-disable no-console */
import { Box } from '@chakra-ui/react'
import Search from '.'
import TextResults from './TextResults'
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
    <Box display='flex' flexDirection='column' gap='20px' width='400px'>
      {/* Default Search */}
      <Search
        options={sampleOptions}
        placeholder='1. Default Search (Text Results)'
        onSelect={(option) => console.log({ selected: option })}
      />

      {/* Results as List */}
      <Search
        options={sampleOptions}
        placeholder='2. Results as List'
        displayResults='list'
        onSelect={(option) => console.log({ selected: option })}
      />

      {/* Custom Results Rendering */}
      <Search
        options={sampleOptions}
        placeholder='3. Custom Results'
        displayResults='custom'
        renderResults={({ items, query, highlightedIndex, onSelect }) => (
          <div>
            <Box padding='6px 8px'>
              **Recent searches**
              <TextResults
                highlightedIndex={highlightedIndex}
                items={items}
                query={query}
                onSelect={onSelect}
              />
            </Box>
          </div>
        )}
        onSelect={(option) => console.log({ selected: option })}
      />

      {/* Loading State */}
      <Search
        options={sampleOptions}
        placeholder='4. Loading State'
        isLoading
        onSelect={(option) => console.log({ selected: option })}
      />

      {/* Small Size */}
      <Search
        options={sampleOptions}
        placeholder='5. Small Size'
        size='small'
        onSelect={(option) => console.log({ selected: option })}
      />

      {/* Disabled */}
      <Search
        options={sampleOptions}
        placeholder='6. Disabled Search Field'
        disabled
        onSelect={(option) => console.log({ selected: option })}
      />

      {/* Max Height Results */}
      <Search
        options={sampleOptions}
        placeholder='7. Max Height Results (70px)'
        resultsMaxHeight='70px'
        onSelect={(option) => console.log({ selected: option })}
      />

      {/* No Display Results */}
      <Search
        options={sampleOptions}
        placeholder='8. Results are hidden'
        displayResults='none'
        onSelect={(option) => console.log({ selected: option })}
      />
    </Box>
  </DemoWrapper>
)

export default SearchDemo
