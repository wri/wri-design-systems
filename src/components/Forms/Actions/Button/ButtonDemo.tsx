import { Button } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'
import { SSOButtons } from './presets/SSOButtons'

const ButtonDemo = () => (
  <DemoWrapper title='Button'>
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
        <Button label='Button Label' variant='primary' />
        <Button label='Button Label' variant='primary' size='small' />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Button label='Button Label' variant='secondary' />
        <Button label='Button Label' variant='secondary' size='small' />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Button label='Button Label' variant='borderless' />
        <Button label='Button Label' variant='borderless' size='small' />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Button label='Button Label' variant='outline' />
        <Button label='Button Label' variant='outline' size='small' />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <SSOButtons.Google />
        <SSOButtons.Facebook />
        <SSOButtons.X />
        <SSOButtons.Microsoft />
      </div>
    </div>
  </DemoWrapper>
)

export default ButtonDemo
