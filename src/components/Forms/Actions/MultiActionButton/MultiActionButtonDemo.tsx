/* eslint-disable no-console */
import { MultiActionButton } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'

const MultiActionButtonDemo = () => (
  <DemoWrapper title='Multi Action Button'>
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <MultiActionButton
          variant='primary'
          mainActionLabel='First Action'
          mainActionOnClick={() => console.log('first action')}
          otherActions={[
            {
              label: 'Second Action',
              value: 'second-action',
              onClick: () => console.log('second action'),
            },
            {
              label: 'Third Action',
              value: 'third-action',
              onClick: () => console.log('third action'),
            },
          ]}
        />
        <MultiActionButton
          variant='primary'
          size='small'
          mainActionLabel='First Action'
          mainActionOnClick={() => console.log('first action')}
          otherActions={[
            {
              label: 'Second Action',
              value: 'second-action',
              onClick: () => console.log('second action'),
            },
          ]}
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <MultiActionButton
          variant='secondary'
          mainActionLabel='First Action'
          mainActionOnClick={() => console.log('first action')}
          otherActions={[
            {
              label: 'Second Action',
              value: 'second-action',
              onClick: () => console.log('second action'),
            },
          ]}
        />
        <MultiActionButton
          variant='secondary'
          size='small'
          mainActionLabel='First Action'
          mainActionOnClick={() => console.log('first action')}
          otherActions={[
            {
              label: 'Second Action',
              value: 'second-action',
              onClick: () => console.log('second action'),
            },
          ]}
        />
      </div>
    </div>
  </DemoWrapper>
)

export default MultiActionButtonDemo
