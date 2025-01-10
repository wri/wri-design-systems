// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { LegendPanel } from '../..'
import {
  LegendItemDemo,
  LegendItemDemo2,
  LegendItemDemo3,
} from '../LegendItem/LegendItemDemo'

const LegendPanelDemo = () => (
  <LegendPanel
    legendContent={[
      <LegendItemDemo />,
      <LegendItemDemo2 />,
      <LegendItemDemo3 />,
    ]}
    analysisContent={<div />}
  />
)

export default LegendPanelDemo
