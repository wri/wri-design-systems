import React from 'react'
import AnalysisWidget from '.'
import DemoWrapper from '../../UI/DemoWrapper'
import Tag from '../../Forms/Tag'
import { InfoIcon, RefreshIcon } from '../../icons'
import { getThemedColor } from '../../../lib/theme'

const AnalysisWidgetDemo = () => (
  <DemoWrapper title='Analysis Widget'>
    <div style={{ maxWidth: '400px' }}>
      <AnalysisWidget
        header={
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flex: '1',
              overflow: 'hidden',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                flex: '1',
                minWidth: '0',
              }}
            >
              <div style={{ fontWeight: '700' }}>Title</div>
              <div
                style={{
                  color: getThemedColor('neutral', 700),
                  fontWeight: 400,
                }}
              >
                caption
              </div>
            </div>
          </div>
        }
        footer={
          <div style={{ display: 'flex', padding: '0.5rem' }}>
            <Tag
              label='Label'
              variant='info-grey'
              icon={<RefreshIcon />}
              style={{ marginRight: '0.5rem' }}
            />
            <Tag
              label='Label'
              variant='info-grey'
              icon={<RefreshIcon />}
              style={{ marginRight: '0.5rem' }}
            />
            <Tag
              label='Label'
              variant='info-grey'
              icon={<RefreshIcon />}
              style={{ marginRight: '0.5rem' }}
            />
          </div>
        }
        actions={[
          {
            label: 'About',
            onClick: () => console.log('About Action clicked'),
            icon: <InfoIcon />,
          },
        ]}
      >
        <div style={{ padding: '1rem' }}>
          <div style={{ fontWeight: '700', fontSize: 24 }}>
            Component Placeholder
          </div>
          <div
            style={{ color: getThemedColor('neutral', 700), fontWeight: 400 }}
          >
            Substitute for another component
          </div>
        </div>
      </AnalysisWidget>
    </div>
  </DemoWrapper>
)

export default AnalysisWidgetDemo
