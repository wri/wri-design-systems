import { useState } from 'react'
import { ItemCount } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'

const ItemCountDemo = () => {
  const [pageSize, setPageSize] = useState(10)

  return (
    <DemoWrapper title='Item Count'>
      <ItemCount
        pageSize={pageSize}
        currentPage={1}
        totalItems={100}
        onPageSizeChange={setPageSize}
      />
    </DemoWrapper>
  )
}

export default ItemCountDemo
