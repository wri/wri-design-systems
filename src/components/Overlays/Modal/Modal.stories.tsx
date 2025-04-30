// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import ModalStory from '.'
import Button from '../../Forms/Buttons/Button'

const meta = {
  title: 'Overlays/Modal',
  component: ModalStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onActionClick: fn() },
} satisfies Meta<typeof ModalStory>

export default meta
type Story = StoryObj<typeof meta>

export const Modal: Story = {
  args: {
    title: 'Title',
    content: <p>Content</p>,
    open: false,
  },
  render: (args) => {
    const [showModal, setShowModal] = useState(false)

    return (
      <>
        <Button label='Show Modal' onClick={() => setShowModal(true)} />
        <ModalStory
          {...args}
          open={showModal}
          onClose={() => setShowModal(false)}
        />
      </>
    )
  },
}

export const Small: Story = {
  args: {
    title: 'Title',
    content: <p>Content</p>,
    size: 'small',
    open: false,
  },
  render: (args) => {
    const [showModal, setShowModal] = useState(false)

    return (
      <>
        <Button label='Show Modal' onClick={() => setShowModal(true)} />
        <ModalStory
          {...args}
          open={showModal}
          onClose={() => setShowModal(false)}
        />
      </>
    )
  },
}

export const Large: Story = {
  args: {
    title: 'Title',
    content: <p>Content</p>,
    size: 'large',
    open: false,
  },
  render: (args) => {
    const [showModal, setShowModal] = useState(false)

    return (
      <>
        <Button label='Show Modal' onClick={() => setShowModal(true)} />
        <ModalStory
          {...args}
          open={showModal}
          onClose={() => setShowModal(false)}
        />
      </>
    )
  },
}

export const ExtraLarge: Story = {
  args: {
    title: 'Title',
    content: <p>Content</p>,
    size: 'xlarge',
    open: false,
  },
  render: (args) => {
    const [showModal, setShowModal] = useState(false)

    return (
      <>
        <Button label='Show Modal' onClick={() => setShowModal(true)} />
        <ModalStory
          {...args}
          open={showModal}
          onClose={() => setShowModal(false)}
        />
      </>
    )
  },
}

export const WithActions: Story = {
  args: {
    title: 'Title',
    content: <p>Content</p>,
    open: false,
  },
  render: (args) => {
    const [showModal, setShowModal] = useState(false)

    return (
      <>
        <Button label='Show Modal' onClick={() => setShowModal(true)} />
        <ModalStory
          {...args}
          open={showModal}
          onClose={() => setShowModal(false)}
          showCancelButton
          cancelLabel='Cancel'
          showActionButton
          actionLabel='Save'
          onActionClick={() => setShowModal(false)}
        />
      </>
    )
  },
}

export const Draggable: Story = {
  args: {
    title: 'Title',
    content: <p>Content</p>,
    open: false,
  },
  render: (args) => {
    const [showModal, setShowModal] = useState(false)

    return (
      <>
        <Button label='Show Modal' onClick={() => setShowModal(true)} />
        <ModalStory
          {...args}
          open={showModal}
          onClose={() => setShowModal(false)}
          isDraggable
        />
      </>
    )
  },
}
