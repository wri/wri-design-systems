/* eslint-disable no-console */
import { Button, showToast } from '../..'

const ToastDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button
        label='Info - Top Left'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'info',
            placement: 'top-start',
            action: {
              label: 'Action',
              onClick: () => console.log('Action'),
            },
            closable: true,
            closableLabel: 'Dismiss',
          })
        }
      />
      <Button
        label='Success - Top Right'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'success',
            placement: 'top-end',
            action: {
              label: 'Action',
              onClick: () => console.log('Action'),
            },
            closable: true,
          })
        }
      />
    </div>
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button
        label='Warning - Bottom Left'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'warning',
            placement: 'bottom-start',
          })
        }
      />
      <Button
        label='Error - Bottom Right'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'error',
            placement: 'bottom-end',
          })
        }
      />
    </div>
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button
        label='Loading - Bottom Right'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'loading',
            placement: 'bottom-end',
            closable: true,
          })
        }
      />
    </div>
  </div>
)

export default ToastDemo
