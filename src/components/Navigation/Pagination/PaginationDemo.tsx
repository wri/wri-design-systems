/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { Pagination } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'

const PaginationDemo = () => (
  <DemoWrapper title='Pagination'>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
  </DemoWrapper>
)

export default PaginationDemo
