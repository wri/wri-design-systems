import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { ItemCount } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'

const ItemCountDemo = () => {
  const [pageSize, setPageSize] = useState(10)

  return (
    <DemoWrapper title='Item Count'>
      <Flex direction='column' gap='1rem'>
        <ItemCount
          pageSize={pageSize}
          currentPage={1}
          totalItems={100}
          onPageSizeChange={setPageSize}
          showItemCountText
        />
      </Flex>
    </DemoWrapper>
  )
}

export default ItemCountDemo
