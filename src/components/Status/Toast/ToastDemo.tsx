import { Button, showToast } from '../..'

const ToastDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button
        label='Info - Top Start'
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
        label='Success - Top End'
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
        label='Warning - Bottom Start'
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
        label='Error - Bottom End'
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
        label='Loading - Bottom End'
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
