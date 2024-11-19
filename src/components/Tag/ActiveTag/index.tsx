// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { ActiveTagContainer } from './styled'

const ActiveTag = ({ count = 0 }: { count: number }) => (
  <ActiveTagContainer count={count}>{count} Active</ActiveTagContainer>
)

export default ActiveTag
