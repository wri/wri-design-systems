/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import SheetStory from '.'
import Button from '../../Forms/Actions/Button'
import IconButton from '../../Forms/Actions/IconButton'
import { CloseIcon } from '../../icons'

const meta = {
  title: 'Containers/Sheet',
  component: SheetStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof SheetStory>

export default meta
type Story = StoryObj<typeof meta>

const content = (
  <div>
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
  </div>
)

export const Sheet: Story = {
  args: {
    open: false,
    content,
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(args.open)

    const handleClose = () => {
      setIsOpen(false)
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <SheetStory
          {...args}
          header={
            <div
              style={{
                width: '100%',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p>Header</p>
              <IconButton
                icon={<CloseIcon />}
                aria-label='Close'
                onClick={handleClose}
              />
            </div>
          }
          content={<div style={{ padding: '1rem' }}>{args.content}</div>}
          footer={<div style={{ padding: '1rem' }}>Footer</div>}
          open={isOpen}
          onClose={handleClose}
        />
        <Button
          style={{ width: '12.5rem' }}
          label='Show Minimized Sheet'
          onClick={() => setIsOpen(true)}
        />
      </div>
    )
  },
}

export const SheetMid: Story = {
  args: {
    open: false,
    content,
    defaultSnap: 'mid',
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(args.open)

    const handleClose = () => {
      setIsOpen(false)
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <SheetStory
          {...args}
          header={
            <div
              style={{
                width: '100%',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p>Header</p>
              <IconButton
                icon={<CloseIcon />}
                aria-label='Close'
                onClick={handleClose}
              />
            </div>
          }
          content={<div style={{ padding: '1rem' }}>{args.content}</div>}
          footer={<div style={{ padding: '1rem' }}>Footer</div>}
          open={isOpen}
          onClose={handleClose}
        />
        <Button
          style={{ width: '12.5rem' }}
          label='Show Mid Sheet'
          onClick={() => setIsOpen(true)}
        />
      </div>
    )
  },
}

export const SheetFull: Story = {
  args: {
    open: false,
    content,
    defaultSnap: 'full',
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(args.open)

    const handleClose = () => {
      setIsOpen(false)
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <SheetStory
          {...args}
          header={
            <div
              style={{
                width: '100%',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p>Header</p>
              <IconButton
                icon={<CloseIcon />}
                aria-label='Close'
                onClick={handleClose}
              />
            </div>
          }
          content={<div style={{ padding: '1rem' }}>{args.content}</div>}
          footer={<div style={{ padding: '1rem' }}>Footer</div>}
          open={isOpen}
          onClose={handleClose}
        />
        <Button
          style={{ width: '12.5rem' }}
          label='Show Full Sheet'
          onClick={() => setIsOpen(true)}
        />
      </div>
    )
  },
}

export const SheetClosed: Story = {
  args: {
    open: false,
    content,
    defaultSnap: 'closed',
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(args.open)

    const handleClose = () => {
      setIsOpen(false)
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <SheetStory
          {...args}
          header={
            <div
              style={{
                width: '100%',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p>Header</p>
              <IconButton
                icon={<CloseIcon />}
                aria-label='Close'
                onClick={handleClose}
              />
            </div>
          }
          content={<div style={{ padding: '1rem' }}>{args.content}</div>}
          footer={<div style={{ padding: '1rem' }}>Footer</div>}
          open={isOpen}
          onClose={handleClose}
        />
        <Button
          style={{ width: '12.5rem' }}
          label='Show Closed Sheet'
          onClick={() => setIsOpen(true)}
        />
      </div>
    )
  },
}
