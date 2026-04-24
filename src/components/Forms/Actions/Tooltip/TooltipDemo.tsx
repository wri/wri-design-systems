import { Checkbox, Tooltip } from '../../..'
import { InfoIcon } from '../../../icons'
import DemoWrapper from '../../../UI/DemoWrapper'

const TooltipDemo = () => (
  <DemoWrapper title='Tooltip'>
    <div
      style={{ display: 'inline-flex', flexDirection: 'column', gap: '1.25rem' }}
    >
      <div style={{ display: 'flex', gap: '0.625rem' }}>
        <p>Pill:</p>
        <Tooltip content='This is a tooltip'>
          <InfoIcon height='1.25rem' width='1.25rem' />
        </Tooltip>
      </div>
      <div style={{ display: 'flex', gap: '0.625rem' }}>
        <p>Pill:</p>
        <Tooltip content='This is a tooltip'>
          <Checkbox name='Checkbox' value='1'>
            Checkbox
          </Checkbox>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', gap: '0.625rem' }}>
        <p>Text:</p>
        <Tooltip content='This is a tooltip' variant='text'>
          <InfoIcon height='1.25rem' width='1.25rem' />
        </Tooltip>
      </div>
      <div style={{ display: 'flex', gap: '0.625rem' }}>
        <p>With icon:</p>
        <Tooltip
          content={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.3125rem',
              }}
            >
              <InfoIcon />
              This is a tooltip
            </div>
          }
        >
          <InfoIcon height='1.25rem' width='1.25rem' />
        </Tooltip>
      </div>
      <div style={{ display: 'flex', gap: '0.625rem' }}>
        <p>Right position:</p>
        <Tooltip content='This is a tooltip' position='right'>
          <InfoIcon height='1.25rem' width='1.25rem' />
        </Tooltip>
      </div>
      <div style={{ display: 'flex', gap: '0.625rem' }}>
        <p>Delay:</p>
        <Tooltip content='This is a tooltip' closeDelay={2000}>
          <InfoIcon height='1.25rem' width='1.25rem' />
        </Tooltip>
      </div>
    </div>
  </DemoWrapper>
)

export default TooltipDemo
