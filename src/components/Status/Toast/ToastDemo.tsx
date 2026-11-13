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
      }}
    >
      <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Top Left</p>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Button
          label='General'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'general',
              placement: 'top-start',
            })
          }
        />
        <Button
          label='Closable'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'general',
              placement: 'top-start',
              closable: true,
            })
          }
        />
        <Button
          label='Closable with Action'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'general',
              placement: 'top-start',
              action: {
                label: 'Action',
                onClick: () => console.log('Action'),
              },
              closable: true,
            })
          }
        />
        <Button
          label='Hide Icon'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'general',
              placement: 'top-start',
              hideIcon: true,
            })
          }
        />
      </div>

      <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Top Center</p>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Button
          label='Success'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'success',
              placement: 'top',
            })
          }
        />
        <Button
          label='Closable'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'success',
              placement: 'top',
              closable: true,
            })
          }
        />
        <Button
          label='Closable with Action'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'success',
              placement: 'top',
              action: {
                label: 'Action',
                onClick: () => console.log('Action'),
              },
              closable: true,
            })
          }
        />
      </div>

      <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Top Right</p>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Button
          label='Warning'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'warning',
              placement: 'top-end',
            })
          }
        />
        <Button
          label='Closable'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'warning',
              placement: 'top-end',
              closable: true,
            })
          }
        />
        <Button
          label='Closable with Action'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'warning',
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

      <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Bottom Left</p>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Button
          label='Error'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'error',
              placement: 'bottom-start',
            })
          }
        />
        <Button
          label='Closable'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'error',
              placement: 'bottom-start',
              closable: true,
            })
          }
        />
        <Button
          label='Closable with Action'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'error',
              placement: 'bottom-start',
              action: {
                label: 'Action',
                onClick: () => console.log('Action'),
              },
              closable: true,
            })
          }
        />
      </div>

      <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Bottom Center</p>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Button
          label='Information'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'information',
              placement: 'bottom',
            })
          }
        />
        <Button
          label='Closable'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'information',
              placement: 'bottom',
              closable: true,
            })
          }
        />
        <Button
          label='Closable with Action'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'information',
              placement: 'bottom',
              action: {
                label: 'Action',
                onClick: () => console.log('Action'),
              },
              closable: true,
            })
          }
        />
      </div>

      <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Bottom Right</p>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Button
          label='Loading'
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
        <Button
          label='Closable with Action'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              caption: 'Caption',
              type: 'loading',
              placement: 'bottom-end',
              action: {
                label: 'Action',
                onClick: () => console.log('Action'),
              },
              closable: true,
            })
          }
        />
      </div>

      <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Close Trigger</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button
          label='Show'
          variant='primary'
          onClick={() =>
            showToast({
              id: 'show-toast-id',
              label: 'Label',
              caption: 'Caption',
              type: 'loading',
              placement: 'bottom',
            })
          }
        />
        <Button
          label='Close'
          variant='secondary'
          onClick={() => closeToast('show-toast-id')}
        />
      </div>

      <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Custom Width</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button
          label='Show'
          variant='primary'
          onClick={() =>
            showToast({
              label: 'Label',
              type: 'general',
              placement: 'bottom',
              width: '15.625rem', // 250px
            })
          }
        />
      </div>
    </div>
  </DemoWrapper>
)

export default ToastDemo
