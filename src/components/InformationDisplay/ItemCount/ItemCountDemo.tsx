/* eslint-disable no-console */
import { ItemCount } from '../..'

const ItemCountDemo = () => (
  <ItemCount
    currentPage={1}
    totalItems={100}
    onPageSizeChange={(pageSize) => console.log(pageSize)}
  />
)

export default ItemCountDemo
