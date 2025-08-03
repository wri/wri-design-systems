/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { Pagination } from '../..'

const PaginationDemo = () => (
  <div>
    <Pagination totalItems={50} pageSize={10} currentPage={1} />
    <Pagination
      totalItems={50}
      pageSize={10}
      currentPage={1}
      variant='compact'
    />
    <Pagination
      totalItems={50}
      pageSize={10}
      currentPage={1}
      variant='compact-with-buttons'
    />
  </div>
)

export default PaginationDemo
