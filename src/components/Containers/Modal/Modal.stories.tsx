// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import ModalStory from '.'
import Button from '../../Forms/Actions/Button'
import { getThemedColor } from '../../../lib/theme'

const meta = {
  title: 'Containers/Modal',
  component: ModalStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalStory>

export default meta
type Story = StoryObj<typeof meta>

export const Modal: Story = {
  args: {
    header: (
      <p
        style={{
          fontWeight: 'bold',
          color: getThemedColor('neutral', 800),
        }}
      >
        Title
      </p>
    ),
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
    header: (
      <p
        style={{
          fontWeight: 'bold',
          color: getThemedColor('neutral', 800),
        }}
      >
        Title
      </p>
    ),
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
    header: (
      <p
        style={{
          fontWeight: 'bold',
          color: getThemedColor('neutral', 800),
        }}
      >
        Title
      </p>
    ),
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
    header: (
      <p
        style={{
          fontWeight: 'bold',
          color: getThemedColor('neutral', 800),
        }}
      >
        Title
      </p>
    ),
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
    header: (
      <p
        style={{
          fontWeight: 'bold',
          color: getThemedColor('neutral', 800),
        }}
      >
        Title
      </p>
    ),
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
          footer={
            <>
              <Button
                label='Cancel'
                variant='secondary'
                onClick={() => {
                  setShowModal(false)
                }}
              />
              <Button
                label='Save'
                onClick={() => {
                  setShowModal(false)
                }}
              />
            </>
          }
          open={showModal}
          onClose={() => setShowModal(false)}
        />
      </>
    )
  },
}

export const Draggable: Story = {
  args: {
    header: (
      <p
        style={{
          fontWeight: 'bold',
          color: getThemedColor('neutral', 800),
        }}
      >
        Title
      </p>
    ),
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
          draggable
        />
      </>
    )
  },
}

export const Blocking: Story = {
  args: {
    header: (
      <p
        style={{
          fontWeight: 'bold',
          color: getThemedColor('neutral', 800),
        }}
      >
        Title
      </p>
    ),
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
          footer={
            <>
              <Button
                label='Cancel'
                variant='secondary'
                onClick={() => {
                  setShowModal(false)
                }}
              />
              <Button
                label='Save'
                onClick={() => {
                  setShowModal(false)
                }}
              />
            </>
          }
          open={showModal}
          onClose={() => setShowModal(false)}
          blocking
        />
      </>
    )
  },
}
