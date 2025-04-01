/* eslint-disable no-console */
import { useState } from 'react'
import { ItemCount } from '../..'

const ItemCountDemo = () => {
  const [pageSize, setPageSize] = useState(10)

  return (
    <ItemCount
      pageSize={pageSize}
      currentPage={1}
      totalItems={100}
      onPageSizeChange={setPageSize}
    />
  )
}

export default ItemCountDemo
