// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react'
import Button from '../../Forms/Actions/Button'
import Toast from '.'
import { showToast } from './utils'
import { CheckIcon } from '../../icons'

const meta = {
  title: 'Status/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div>
        <Story />
        <Toast />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  decorators: [
    () => (
      <Button
        label='Show Toast'
        variant='primary'
        onClick={() =>
          showToast({
            label: 'Label',
            caption: 'Caption',
            type: 'info',
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
            type: 'success',
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
            type: 'success',
            placement: 'bottom-end',
            icon: <CheckIcon color='red' />,
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
            type: 'success',
            placement: 'bottom-end',
            closable: true,
          })
        }
      />
    ),
  ],
}

export const ClosableLabel: Story = {
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
            closable: true,
            closableLabel: 'Dismiss',
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
            type: 'success',
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
            type: 'success',
            placement: 'top-start',
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
            type: 'success',
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
            type: 'success',
            placement: 'bottom-start',
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
            type: 'success',
            placement: 'bottom-end',
          })
        }
      />
    ),
  ],
}
