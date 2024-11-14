import { Button } from '../components'

const ButtonDemo = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '10px',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Button label='Button Label' variant='primary' />
      <Button label='Button Label' variant='primary' size='small' />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Button label='Button Label' variant='secondary' />
      <Button label='Button Label' variant='secondary' size='small' />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Button label='Button Label' variant='borderless' />
      <Button label='Button Label' variant='borderless' size='small' />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Button label='Button Label' variant='outline' />
      <Button label='Button Label' variant='outline' size='small' />
    </div>
  </div>
)

export default ButtonDemo
