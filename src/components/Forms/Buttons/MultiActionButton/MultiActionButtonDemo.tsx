/* eslint-disable no-console */
import { MultiActionButton } from '../../..'

const MultiActionButtonDemo = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '10px',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
)

export default MultiActionButtonDemo
