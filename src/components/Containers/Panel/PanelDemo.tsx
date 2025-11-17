/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { Panel } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'

const content = (
  <div>
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
  </div>
)

const PanelDemo = () => (
  <DemoWrapper title='Panel'>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div style={{ height: '300px' }}>
        <Panel
          header={<div>Header</div>}
          content={<div>{content}</div>}
          footer={<div>Footer</div>}
        />
      </div>

      <div style={{ height: '300px' }}>
        <Panel content={<div>{content}</div>} footer={<div>Footer</div>} />
      </div>

      <div style={{ height: '300px' }}>
        <Panel header={<div>Header</div>} content={<div>{content}</div>} />
      </div>

      <div style={{ height: '300px' }}>
        <Panel
          header={<div>Header</div>}
          content={<div>{content}</div>}
          footer={<div>Footer</div>}
          variant='floating'
        />
      </div>
    </div>
  </DemoWrapper>
)

export default PanelDemo
