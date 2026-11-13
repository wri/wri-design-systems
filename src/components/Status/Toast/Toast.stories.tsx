// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react'
import Button from '../../Forms/Actions/Button'
import Toast from '.'
import { closeToast, showToast } from './utils'
import { CheckIcon } from '../../icons'

const meta = {
  title: 'Status/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Transient notification message. Use `showToast()` utility to trigger it programmatically. Choose `type` to convey intent: success, warning, error, general, information, or loading. The legacy `info` type is deprecated and maps to `general`.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    // The Toast component deduplicates itself when mounted multiple times
    // (Storybook Docs renders the primary story twice), so it is safe to
    // render it unconditionally here.
    (Story: any) => (
      <div>
        <Story />
        <Toast />
      </div>
    ),
  ],
  argTypes: {
    labels: {
      description: 'Override internal UI labels for i18n',
      control: false,
    },
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const General: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'general',
            placement: 'bottom-end',
          })
        }
      />
    ),
  ],
}

export const Information: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'information',
            placement: 'bottom-end',
          })
        }
      />
    ),
  ],
}

export const Success: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'success',
            placement: 'bottom-end',
          })
        }
      />
    ),
  ],
}

export const Warning: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'warning',
            placement: 'bottom-end',
          })
        }
      />
    ),
  ],
}

export const Error: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
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
    ),
  ],
}

export const Loading: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'loading',
            placement: 'bottom-end',
          })
        }
      />
    ),
  ],
}

export const CustomDuration10Seconds: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'general',
            placement: 'bottom-end',
            duration: 10000,
          })
        }
      />
    ),
  ],
}

export const CustomIcon: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'general',
            placement: 'bottom-end',
            icon: <CheckIcon color='red' />,
          })
        }
      />
    ),
  ],
}

export const NoIcon: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'general',
            placement: 'bottom-end',
            hideIcon: true,
          })
        }
      />
    ),
  ],
}

export const Closable: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'general',
            placement: 'bottom-end',
            closable: true,
          })
        }
      />
    ),
  ],
}

export const WithAction: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'general',
            placement: 'bottom-end',
            action: {
              label: 'Action',
              onClick: () => console.log('Action'),
            },
            closable: true,
          })
        }
      />
    ),
  ],
}

export const TopLeft: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
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
    ),
  ],
}

export const TopCenter: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'general',
            placement: 'top',
          })
        }
      />
    ),
  ],
}

export const TopRight: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'general',
            placement: 'top-end',
          })
        }
      />
    ),
  ],
}

export const BottomLeft: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'general',
            placement: 'bottom-start',
          })
        }
      />
    ),
  ],
}

export const BottomCenter: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'general',
            placement: 'bottom',
          })
        }
      />
    ),
  ],
}

export const BottomRight: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'general',
            placement: 'bottom-end',
          })
        }
      />
    ),
  ],
}

export const OnClose: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'general',
            placement: 'bottom-end',
            closable: true,
            // eslint-disable-next-line no-alert
            onClose: () => alert('Closed'),
          })
        }
      />
    ),
  ],
}

export const ManualClose: Story = {
  decorators: [
    () => (
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
    ),
  ],
}

export const CustomWidth: Story = {
  decorators: [
    () => (
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
    ),
  ],
}
