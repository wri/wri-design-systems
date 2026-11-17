// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useRef, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import DialogStory from '.'
import Button from '../../Forms/Actions/Button'
import InlineMessage from '../../Status/InlineMessage'
import { getThemedSpacing } from '../../../lib/theme'

const dialogBody = (
  <p style={{ margin: 0 }}>
    Lorem ipsum dolor sit amet consectetur. Sollicitudin aliquet in libero nunc
    scelerisque cras magna hendrerit. Vel neque convallis ac velit sed. Semper
    diam metus.
  </p>
)

const actionFooter = (onClose: () => void) => (
  <>
    <Button label='Cancel' variant='secondary' onClick={onClose} />
    <Button label='Save' onClick={onClose} />
  </>
)

const destructiveFooter = (onClose: () => void) => (
  <>
    <Button label='Cancel' variant='secondary' onClick={onClose} />
    <Button label='Delete' variant='negative' onClick={onClose} />
  </>
)

const longDialogContent = Array.from({ length: 20 }, (_, i) => (
  <p key={i} style={{ margin: 0 }}>
    Paragraph {i + 1}. Lorem ipsum dolor sit amet consectetur. Sollicitudin
    aliquet in libero nunc scelerisque cras magna hendrerit. Vel neque convallis
    ac velit sed. Semper diam metus.
  </p>
))

const meta = {
  title: 'Overlays/Dialog',
  component: DialogStory,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Opinionated confirmation dialog. Compose it with the `title`, `children` and `footer` props, and control visibility with the `open` prop.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { description: '`title` string', control: 'text' },
    children: { description: '`children` content', control: false },
    footer: { description: '`footer` content', control: false },
    hideCloseButton: {
      description: '`hideCloseButton` flag',
      control: 'boolean',
    },
    open: { description: '`open` flag', control: 'boolean' },
    onClose: { description: '`onClose` handler', control: false },
    width: { description: '`width` value', control: false },
    closeOnEscape: { description: '`closeOnEscape` flag', control: 'boolean' },
    closeOnInteractOutside: {
      description: '`closeOnInteractOutside` flag',
      control: 'boolean',
    },
    initialFocusEl: { description: '`initialFocusEl` element', control: false },
    scrollBehavior: {
      description: '`scrollBehavior` variant',
      control: { type: 'select' },
      options: ['inside', 'outside'],
    },
    placement: {
      description: '`placement` variant',
      control: { type: 'select' },
      options: ['top', 'center', 'bottom'],
    },
    labels: { description: '`labels` overrides', control: false },
  },
} satisfies Meta<typeof DialogStory>

export default meta
type Story = StoryObj<typeof meta>

export const Dialog: Story = {
  args: {
    title: 'Title',
    children: dialogBody,
    open: false,
  },
  render: (args) => {
    const [showDialog, setShowDialog] = useState(false)

    return (
      <>
        <Button label='Show Dialog' onClick={() => setShowDialog(true)} />
        <DialogStory
          {...args}
          open={showDialog}
          onClose={() => setShowDialog(false)}
          footer={actionFooter(() => setShowDialog(false))}
        />
      </>
    )
  },
}

export const WithoutCloseButton: Story = {
  args: {
    title: 'Title',
    children: dialogBody,
    hideCloseButton: true,
    open: false,
  },
  render: (args) => {
    const [showDialog, setShowDialog] = useState(false)

    return (
      <>
        <Button label='Show Dialog' onClick={() => setShowDialog(true)} />
        <DialogStory
          {...args}
          open={showDialog}
          onClose={() => setShowDialog(false)}
          footer={actionFooter(() => setShowDialog(false))}
        />
      </>
    )
  },
}

export const RichBody: Story = {
  args: {
    title: 'Title',
    children: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: getThemedSpacing(300),
        }}
      >
        <p style={{ margin: 0 }}>
          Lorem ipsum dolor sit amet consectetur. Sollicitudin aliquet in libero
          nunc scelerisque cras magna hendrerit. Vel neque convallis ac velit
          sed. Semper diam metus.
        </p>
        <InlineMessage
          label='This dataset is used by 3 dashboards.'
          variant='warning'
        />
      </div>
    ),
    open: false,
  },
  render: (args) => {
    const [showDialog, setShowDialog] = useState(false)

    return (
      <>
        <Button label='Show Dialog' onClick={() => setShowDialog(true)} />
        <DialogStory
          {...args}
          open={showDialog}
          onClose={() => setShowDialog(false)}
          footer={actionFooter(() => setShowDialog(false))}
        />
      </>
    )
  },
}

export const Destructive: Story = {
  args: {
    title: 'Delete dataset?',
    children: dialogBody,
    open: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Destructive confirmation using the `negative` Button variant in the footer.',
      },
    },
  },
  render: (args) => {
    const [showDialog, setShowDialog] = useState(false)

    return (
      <>
        <Button label='Show Dialog' onClick={() => setShowDialog(true)} />
        <DialogStory
          {...args}
          open={showDialog}
          onClose={() => setShowDialog(false)}
          footer={destructiveFooter(() => setShowDialog(false))}
        />
      </>
    )
  },
}

export const Blocking: Story = {
  args: {
    title: 'Title',
    children: dialogBody,
    hideCloseButton: true,
    closeOnEscape: false,
    closeOnInteractOutside: false,
    open: false,
  },
  render: (args) => {
    const [showDialog, setShowDialog] = useState(false)

    return (
      <>
        <Button label='Show Dialog' onClick={() => setShowDialog(true)} />
        <DialogStory
          {...args}
          open={showDialog}
          onClose={() => setShowDialog(false)}
          footer={actionFooter(() => setShowDialog(false))}
        />
      </>
    )
  },
}

export const CustomWidth: Story = {
  args: {
    title: 'Title',
    children: dialogBody,
    width: '31.25rem',
    open: false,
  },
  render: (args) => {
    const [showDialog, setShowDialog] = useState(false)

    return (
      <>
        <Button label='Show Dialog' onClick={() => setShowDialog(true)} />
        <DialogStory
          {...args}
          open={showDialog}
          onClose={() => setShowDialog(false)}
          footer={actionFooter(() => setShowDialog(false))}
        />
      </>
    )
  },
}

export const Placement: Story = {
  args: {
    title: 'Title',
    children: dialogBody,
    open: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Vertical placement of the dialog in the viewport: `top` (default), `center` or `bottom`.',
      },
    },
  },
  render: (args) => {
    const [showDialog, setShowDialog] = useState(false)
    const [placement, setPlacement] = useState<'top' | 'center' | 'bottom'>(
      'top',
    )

    return (
      <>
        <div
          style={{
            display: 'flex',
            gap: getThemedSpacing(300),
          }}
        >
          <Button
            label='Top'
            onClick={() => {
              setPlacement('top')
              setShowDialog(true)
            }}
          />
          <Button
            label='Center'
            onClick={() => {
              setPlacement('center')
              setShowDialog(true)
            }}
          />
          <Button
            label='Bottom'
            onClick={() => {
              setPlacement('bottom')
              setShowDialog(true)
            }}
          />
        </div>
        <DialogStory
          {...args}
          placement={placement}
          open={showDialog}
          onClose={() => setShowDialog(false)}
          footer={actionFooter(() => setShowDialog(false))}
        />
      </>
    )
  },
}

export const ScrollBehavior: Story = {
  args: {
    title: 'Title',
    open: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'How a dialog with overflowing content handles scroll: `inside` (default) scrolls the dialog body while the dialog stays in place, `outside` grows the dialog and scrolls the page behind it.',
      },
    },
  },
  render: (args) => {
    const [showDialog, setShowDialog] = useState(false)
    const [scrollBehavior, setScrollBehavior] = useState<'inside' | 'outside'>(
      'inside',
    )

    return (
      <>
        <div
          style={{
            display: 'flex',
            gap: getThemedSpacing(300),
          }}
        >
          <Button
            label='Inside'
            onClick={() => {
              setScrollBehavior('inside')
              setShowDialog(true)
            }}
          />
          <Button
            label='Outside'
            onClick={() => {
              setScrollBehavior('outside')
              setShowDialog(true)
            }}
          />
        </div>
        <DialogStory
          {...args}
          scrollBehavior={scrollBehavior}
          open={showDialog}
          onClose={() => setShowDialog(false)}
          footer={actionFooter(() => setShowDialog(false))}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: getThemedSpacing(300),
            }}
          >
            {longDialogContent}
          </div>
        </DialogStory>
      </>
    )
  },
}

export const NestedDialogs: Story = {
  args: {
    title: 'First dialog',
    open: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A second dialog opens on top of the first one, mirroring the `MultipleModalsStacked` pattern from Modal.',
      },
    },
  },
  render: (args) => {
    const [firstOpen, setFirstOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)

    return (
      <>
        <Button label='Open First Dialog' onClick={() => setFirstOpen(true)} />
        <DialogStory
          {...args}
          footer={
            <Button
              label='Close All'
              variant='secondary'
              onClick={() => {
                setFirstOpen(false)
                setSecondOpen(false)
              }}
            />
          }
          open={firstOpen}
          onClose={() => {
            setFirstOpen(false)
            setSecondOpen(false)
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: getThemedSpacing(300),
            }}
          >
            <p style={{ margin: 0 }}>First dialog</p>
            <Button
              label='Open Second Dialog'
              onClick={() => setSecondOpen(true)}
            />
          </div>
        </DialogStory>
        <DialogStory
          title='Second dialog'
          footer={
            <Button
              label='Close Second Dialog'
              onClick={() => setSecondOpen(false)}
            />
          }
          width='20rem'
          open={secondOpen}
          onClose={() => setSecondOpen(false)}
        >
          <p style={{ margin: 0 }}>
            Second dialog, opened on top of the first one.
          </p>
        </DialogStory>
      </>
    )
  },
}

export const Controlled: Story = {
  args: {
    title: 'Title',
    children: dialogBody,
    open: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Focus moves to the primary action on open (via `initialFocusEl`) and returns to the trigger on close.',
      },
    },
  },
  render: (args) => {
    const [showDialog, setShowDialog] = useState(false)
    const saveButtonRef = useRef<HTMLButtonElement>(null)

    return (
      <>
        <Button label='Show Dialog' onClick={() => setShowDialog(true)} />
        <DialogStory
          {...args}
          open={showDialog}
          onClose={() => setShowDialog(false)}
          initialFocusEl={() => saveButtonRef.current}
          footer={
            <>
              <Button
                label='Cancel'
                variant='secondary'
                onClick={() => setShowDialog(false)}
              />
              <Button
                ref={saveButtonRef}
                label='Save'
                onClick={() => setShowDialog(false)}
              />
            </>
          }
        />
      </>
    )
  },
}
