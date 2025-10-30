/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { Panel } from '../..'

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
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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

    <div
      style={{
        height: '400px',
        padding: '20px',
        bottom: '320px',
        right: 0,
        zIndex: 1000,
      }}
    >
      <Panel
        header={<div>Header</div>}
        content={<div>{content}</div>}
        footer={<div>Footer</div>}
        variant='floating'
      />
    </div>
  </div>
)

export default PanelDemo
