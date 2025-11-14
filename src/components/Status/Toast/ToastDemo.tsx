/* eslint-disable no-console */
import { Button, showToast } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'

const ToastDemo = () => (
  <DemoWrapper title='Toast'>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '200px',
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
    </div>
  </DemoWrapper>
)

export default ToastDemo
