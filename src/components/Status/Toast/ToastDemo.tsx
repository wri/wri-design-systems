/* eslint-disable no-console */
import { Button, showToast, closeToast } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'

const ToastDemo = () => (
  <DemoWrapper title='Toast'>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '12.5rem',
      }}
    >
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
        label='Info - Top Center'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'info',
            placement: 'top',
            closable: true,
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
        label='Info - Bottom Center'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'info',
            placement: 'bottom',
            closable: true,
            onClose: () => console.log('Closed'),
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
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button
          label='Show'
          variant='primary'
          onClick={() =>
            showToast({
              id: 'show-toast-id',
              label: 'Validating Polygons...',
              type: 'loading',
              placement: 'bottom',
              maxWidth: '15.625rem', // 250px
            })
          }
        />
        <Button
          label='Close'
          variant='secondary'
          onClick={() => closeToast('show-toast-id')}
        />
      </div>
    </div>
  </DemoWrapper>
)

export default ToastDemo
