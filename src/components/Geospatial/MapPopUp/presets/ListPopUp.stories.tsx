// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useRef, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import MapPopUpStory from '..'
import { NotificationIcon, PlaceholderIcon, UserIcon } from '../../../icons'
import { MapMarkers } from '../../MapMarker/Presets'
import { getThemedColor } from '../../../../lib/theme'
import List from '../../../DataDisplay/List'
import Button from '../../../Forms/Actions/Button'

const meta = {
  title: 'Geospatial/Map Pop Up/Preset/List Pop Up',
  component: MapPopUpStory,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Popup overlay anchored to a map coordinate. Triggered on marker click.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div
        style={{
          height: '64.375rem',
          width: '50rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    open: { description: '`open` flag', control: 'boolean' },
    onOpenChange: { description: '`onOpenChange` handler', control: false },
    anchorRef: { description: '`anchorRef` value', control: false },
    header: { description: '`header` content', control: false },
    content: { description: '`content` content', control: false },
    footer: { description: '`footer` content', control: false },
    placement: { description: '`placement` value', control: false },
    offset: { description: '`offset` value', control: false },
    closeOnEscape: { description: '`closeOnEscape` value', control: false },
    closeOnOutsideClick: {
      description: '`closeOnOutsideClick` value',
      control: false,
    },
    labels: { description: '`labels` value', control: false },
  },
} satisfies Meta<typeof MapPopUpStory>

export default meta
type Story = StoryObj<typeof meta>

const footer = (
  <div>
    <Button label='Label' size='small' />
  </div>
)

export const MapPopUp: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    anchorRef: null as any,
    header: (
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '0.25rem',
          }}
        >
          <NotificationIcon />
          <p
            style={{
              fontSize: '1rem',
              lineHeight: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '0.25rem',
              color: getThemedColor('neutral', 800),
            }}
          >
            Title
          </p>
        </div>
        <p
          style={{
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            color: getThemedColor('neutral', 700),
          }}
        >
          Caption
        </p>
      </div>
    ),
    content: (
      <List
        items={[
          {
            id: 'data-1',
            label: 'Label',
            value: 'Data',
            variant: 'data',
            icon: <UserIcon />,
          },
          {
            id: 'data-2',
            label: 'Label',
            value: 'Data',
            variant: 'data',
            icon: <UserIcon />,
          },
          {
            id: 'data-3',
            label: 'Label',
            value: 'Data',
            variant: 'data',
            icon: <UserIcon />,
          },
          {
            id: 'data-4',
            label: 'Label',
            value: 'Data',
            variant: 'data',
            icon: <UserIcon />,
          },
        ]}
        noBorder
      />
    ),
    footer,
  },
  render: (args) => {
    const [open, setOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)

    return (
      <div>
        <MapMarkers.Plant
          ariaLabel='plant icon'
          onClick={() => setOpen(true)}
          triggerRef={triggerRef}
          showFocusState={open}
        />
        <MapPopUpStory
          {...args}
          open={open}
          onOpenChange={setOpen}
          anchorRef={triggerRef}
          placement='right'
        />
      </div>
    )
  },
}
