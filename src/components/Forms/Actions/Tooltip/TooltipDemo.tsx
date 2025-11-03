import { Checkbox, Tooltip } from '../../..'
import { InfoIcon } from '../../../icons'
import DemoWrapper from '../../../UI/DemoWrapper'

const TooltipDemo = () => (
  <DemoWrapper title='Tooltip'>
    <div
      style={{ display: 'inline-flex', flexDirection: 'column', gap: '20px' }}
    >
      <div style={{ display: 'flex', gap: '10px' }}>
        <p>Pill:</p>
        <Tooltip content='This is a tooltip'>
          <InfoIcon height='20px' width='20px' />
        </Tooltip>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <p>Pill:</p>
        <Tooltip content='This is a tooltip'>
          <Checkbox name='Checkbox' value='1'>
            Checkbox
          </Checkbox>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <p>Text:</p>
        <Tooltip content='This is a tooltip' variant='text'>
          <InfoIcon height='20px' width='20px' />
        </Tooltip>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <p>With icon:</p>
        <Tooltip
          content={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <InfoIcon />
              This is a tooltip
            </div>
          }
        >
          <InfoIcon height='20px' width='20px' />
        </Tooltip>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <p>Right position:</p>
        <Tooltip content='This is a tooltip' position='right'>
          <InfoIcon height='20px' width='20px' />
        </Tooltip>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <p>Delay:</p>
        <Tooltip content='This is a tooltip' closeDelay={2000}>
          <InfoIcon height='20px' width='20px' />
        </Tooltip>
      </div>
    </div>
  </DemoWrapper>
)

export default TooltipDemo
