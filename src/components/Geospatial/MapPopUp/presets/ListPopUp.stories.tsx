// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useRef, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import MapPopUpStory from '..'
import { NotificationIcon, PlaceholderIcon, UserIcon } from '../../../icons'
import { IconMarkers } from '../../IconMarker/presets/IconMarkers'
import { getThemedColor } from '../../../../lib/theme'
import List from '../../../DataDisplay/List'
import Button from '../../../Forms/Actions/Button'

const meta = {
  title: 'Geospatial/Map Pop Up/Preset/List Pop Up',
  component: MapPopUpStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div
        style={{
          height: '1030px',
          width: '800px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
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
            gap: '4px',
          }}
        >
          <NotificationIcon />
          <p
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 'bold',
              marginBottom: '4px',
              color: getThemedColor('neutral', 800),
            }}
          >
            Title
          </p>
        </div>
        <p
          style={{
            fontSize: '14px',
            lineHeight: '20px',
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
        <IconMarkers.Plant
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
