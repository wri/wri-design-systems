// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Popover from '.'
import Button from '../../Forms/Actions/Button'
import IconButton from '../../Forms/Actions/IconButton'
import TextInput from '../../Forms/Inputs/TextInput'
import { InfoIcon } from '../../icons'

const meta = {
  title: 'Overlays/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          "Contextual popup for information or actions that don't belong in a menu. Wraps any trigger element. Supports custom content, a default Figma width with an overridable `width`, left/center/right arrow alignment, and hiding the arrow via `hideArrow`.",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { description: '`children` content', control: false },
    content: { description: '`content` content', control: false },
    width: { description: '`width` value', control: false },
    hideArrow: { description: '`hideArrow` flag', control: 'boolean' },
    arrowAlignment: {
      description: '`arrowAlignment` variant',
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    placement: {
      description: '`placement` variant',
      control: { type: 'select' },
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
    },
    open: { description: '`open` value', control: 'boolean' },
    onClose: { description: '`onClose` handler', control: false },
    closeOnEscape: { description: '`closeOnEscape` flag', control: 'boolean' },
    closeOnInteractOutside: {
      description: '`closeOnInteractOutside` flag',
      control: 'boolean',
    },
    disabled: { description: '`disabled` flag', control: 'boolean' },
    portalRef: { description: '`portalRef` value', control: false },
  },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content:
      'Voluptate reprehenderit do aute ullamco voluptate aute labore eiusmod.',
    children: <Button label='Open' />,
  },
}

export const ArrowAlignment: Story = {
  args: { children: null, content: null },
  render: function Render() {
    return (
      <div style={{ display: 'flex', gap: '1.25rem' }}>
        <Popover
          content='Arrow aligned left'
          arrowAlignment='left'
          placement='bottom-start'
        >
          <Button label='Left arrow' />
        </Popover>
        <Popover
          content='Arrow centered'
          arrowAlignment='center'
          placement='bottom'
        >
          <Button label='Center arrow' />
        </Popover>
        <Popover
          content='Arrow aligned right'
          arrowAlignment='right'
          placement='bottom-end'
        >
          <Button label='Right arrow' />
        </Popover>
      </div>
    )
  },
}

export const NoArrow: Story = {
  args: {
    content: 'Popover without an arrow',
    hideArrow: true,
    children: <Button label='Open' />,
  },
}

export const CustomWidth: Story = {
  args: {
    content:
      'Voluptate reprehenderit do aute ullamco voluptate aute labore eiusmod.',
    width: '18.75rem',
    children: <Button label='Open' />,
  },
}

export const Placement: Story = {
  args: {
    content: 'Popover placed on the right',
    placement: 'right',
    children: <Button label='Open' />,
  },
}

export const FormContent: Story = {
  args: {
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <TextInput
          label='URL'
          placeholder='http://example.org'
          noMarginBottom
        />
        <TextInput
          label='Label (optional)'
          placeholder='Label (optional)'
          noMarginBottom
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button label='Apply' variant='secondary' size='small' />
        </div>
      </div>
    ),
    children: <IconButton icon={<InfoIcon />} aria-label='Edit link details' />,
    placement: 'bottom',
    arrowAlignment: 'center',
  },
}

export const Controlled: Story = {
  args: { children: null, content: null },
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        content='Controlled popover content'
      >
        <Button
          label={`Controlled: ${open ? 'Open' : 'Closed'}`}
          onClick={() => setOpen(!open)}
        />
      </Popover>
    )
  },
}
