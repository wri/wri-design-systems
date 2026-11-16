import { useState } from 'react'

import { Button, IconButton, Popover, TextInput } from '../..'
import { InfoIcon } from '../../icons'
import DemoWrapper from '../../UI/DemoWrapper'

const PopoverDemo = () => {
  const [controlledOpen, setControlledOpen] = useState(false)

  return (
    <DemoWrapper title='Popover'>
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}
      >
        <Popover content='This is a popover'>
          <Button label='Default' />
        </Popover>

        <div style={{ display: 'flex', gap: '0.625rem' }}>
          <Popover
            content='Arrow aligned left'
            arrowAlignment='left'
            placement='bottom-start'
          >
            <Button label='Left arrow' />
          </Popover>
          <Popover
            content='Arrow centered'
            arrowAlignment='center'
            placement='bottom'
          >
            <Button label='Center arrow' />
          </Popover>
          <Popover
            content='Arrow aligned right'
            arrowAlignment='right'
            placement='bottom-end'
          >
            <Button label='Right arrow' />
          </Popover>
        </div>

        <Popover content='This is a popover' hideArrow>
          <Button label='No Arrow' />
        </Popover>

        <Popover content='This is a popover' width='18.75rem'>
          <Button label='Custom Width' />
        </Popover>

        <Popover content='This is a popover' placement='right'>
          <Button label='Right placement' />
        </Popover>

        <Popover
          placement='bottom'
          arrowAlignment='center'
          content={
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <TextInput
                label='URL'
                placeholder='http://example.org'
                noMarginBottom
              />
              <TextInput
                label='Label (optional)'
                placeholder='Label (optional)'
                noMarginBottom
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button label='Apply' variant='secondary' size='small' />
              </div>
            </div>
          }
        >
          <IconButton icon={<InfoIcon />} aria-label='Edit link details' />
        </Popover>

        <Popover
          open={controlledOpen}
          onClose={() => setControlledOpen(false)}
          content='Controlled popover content'
        >
          <Button
            label={`Controlled: ${controlledOpen ? 'Open' : 'Closed'}`}
            onClick={() => setControlledOpen(!controlledOpen)}
          />
        </Popover>
      </div>
    </DemoWrapper>
  )
}

export default PopoverDemo
