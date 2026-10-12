// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import ModalStory from '.'
import Button from '../../Forms/Actions/Button'
import Switch from '../../Forms/Controls/Switch'
import {
  getThemedColor,
  getThemedFontSize,
  getThemedSpacing,
} from '../../../lib/theme'

const paddedContent = (
  <div style={{ padding: getThemedSpacing(300) }}>
    <p>Content</p>
  </div>
)

const modalHeader = (
  <p
    style={{
      fontWeight: 'bold',
      color: getThemedColor('neutral', 800),
    }}
  >
    Title
  </p>
)

const recommendedDialogConfig = {
  lazyMount: true,
  unmountOnExit: true,
  restoreFocus: false,
  modal: false,
}

const configSummaryStyles = {
  fontSize: getThemedFontSize(200),
  color: getThemedColor('neutral', 700),
  margin: `0 0 ${getThemedSpacing(200)}`,
}

const configSummary = (config: {
  lazyMount?: boolean
  unmountOnExit?: boolean
  restoreFocus?: boolean
  modal?: boolean
}) => (
  <p style={configSummaryStyles}>
    {`lazyMount: ${config.lazyMount} — unmountOnExit: ${config.unmountOnExit} — restoreFocus: ${config.restoreFocus} — modal: ${config.modal}`}
  </p>
)

const meta = {
  title: 'Containers/Modal',
  component: ModalStory,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Dialog overlay. Use `blocking=true` to prevent closing on backdrop click. Use `draggable=true` to allow repositioning. Control visibility with the `open` prop.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    header: { description: '`header` content', control: false },
    content: { description: '`content` content', control: false },
    footer: { description: '`footer` content', control: false },
    size: {
      description: '`size` variant',
      control: { type: 'select' },
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge', 'full-width'],
    },
    draggable: { description: '`draggable` flag', control: 'boolean' },
    blocking: { description: '`blocking` flag', control: 'boolean' },
    open: { description: '`open` flag', control: 'boolean' },
    onClose: { description: '`onClose` handler', control: false },
    width: { description: '`width` value', control: false },
    height: { description: '`height` value', control: false },
    maxHeight: { description: '`maxHeight` value', control: false },
    lazyMount: { description: '`lazyMount` flag', control: 'boolean' },
    unmountOnExit: { description: '`unmountOnExit` flag', control: 'boolean' },
    restoreFocus: { description: '`restoreFocus` flag', control: 'boolean' },
    modal: { description: '`modal` flag', control: 'boolean' },
    initialFocusEl: { description: '`initialFocusEl` element', control: false },
    finalFocusEl: { description: '`finalFocusEl` element', control: false },
    trapFocus: { description: '`trapFocus` flag', control: 'boolean' },
  },
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
    content: paddedContent,
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

export const ExtraSmall: Story = {
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
    content: paddedContent,
    size: 'xsmall',
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
    content: paddedContent,
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
    content: paddedContent,
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
    content: paddedContent,
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
export const FullWidth: Story = {
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
    content: paddedContent,
    size: 'full-width',
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

export const CustomSize: Story = {
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
    content: paddedContent,
    width: '31.25rem',
    height: '18.75rem',
    maxHeight: '25rem',
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
    content: paddedContent,
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
    content: paddedContent,
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
    content: paddedContent,
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

export const MultipleModalsStacked: Story = {
  args: {
    header: modalHeader,
    content: paddedContent,
    open: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A second modal opens on top of the first one. Uses the recommended Dialog.Root configuration to avoid the focus-trap error.',
      },
    },
  },
  render: (args) => {
    const [firstOpen, setFirstOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)

    return (
      <>
        <Button label='Open First Modal' onClick={() => setFirstOpen(true)} />
        <ModalStory
          {...args}
          content={
            <div
              style={{
                padding: getThemedSpacing(300),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: getThemedSpacing(300),
              }}
            >
              <p>First modal</p>
              {configSummary(recommendedDialogConfig)}
              <Button
                label='Open Second Modal'
                onClick={() => setSecondOpen(true)}
              />
            </div>
          }
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
          size='medium'
          open={firstOpen}
          onClose={() => {
            setFirstOpen(false)
            setSecondOpen(false)
          }}
          {...recommendedDialogConfig}
        />
        <ModalStory
          header={modalHeader}
          content={
            <div style={{ padding: getThemedSpacing(300) }}>
              <p>Second modal, opened on top of the first one.</p>
              {configSummary(recommendedDialogConfig)}
            </div>
          }
          footer={
            <Button
              label='Close Second Modal'
              onClick={() => setSecondOpen(false)}
            />
          }
          size='small'
          open={secondOpen}
          onClose={() => setSecondOpen(false)}
          {...recommendedDialogConfig}
        />
      </>
    )
  },
}

export const MultipleModalsSwapped: Story = {
  args: {
    header: modalHeader,
    content: paddedContent,
    open: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The first modal closes while the second one opens, so the new modal renders before the previous one has fully unmounted.',
      },
    },
  },
  render: (args) => {
    const [firstOpen, setFirstOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)

    return (
      <>
        <Button label='Open Modal A' onClick={() => setFirstOpen(true)} />
        <ModalStory
          {...args}
          content={
            <div
              style={{
                padding: getThemedSpacing(300),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: getThemedSpacing(300),
              }}
            >
              <p>Modal A</p>
              {configSummary(recommendedDialogConfig)}
              <Button
                label='Swap To Modal B'
                onClick={() => {
                  setFirstOpen(false)
                  setSecondOpen(true)
                }}
              />
            </div>
          }
          footer={
            <Button
              label='Close'
              variant='secondary'
              onClick={() => setFirstOpen(false)}
            />
          }
          size='medium'
          open={firstOpen}
          onClose={() => setFirstOpen(false)}
          {...recommendedDialogConfig}
        />
        <ModalStory
          header={modalHeader}
          content={
            <div style={{ padding: getThemedSpacing(300) }}>
              <p>Modal B, opened while Modal A was closing.</p>
              {configSummary(recommendedDialogConfig)}
            </div>
          }
          footer={<Button label='Close' onClick={() => setSecondOpen(false)} />}
          size='medium'
          open={secondOpen}
          onClose={() => setSecondOpen(false)}
          {...recommendedDialogConfig}
        />
      </>
    )
  },
}
