// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useRef, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import MapPopUpStory from '.'
import { NotificationIcon } from '../../icons'
import { IconMarkers } from '../MapMarker/Presets'
import { getThemedColor } from '../../../lib/theme'
import Button from '../../Forms/Actions/Button'

const meta = {
  title: 'Geospatial/Map Pop Up',
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
      <div style={{ padding: '12px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
        a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
        molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
        Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
        a, enim. Pellentesque congue.
      </div>
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
