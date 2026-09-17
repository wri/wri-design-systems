// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useMemo, useRef, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import GuidedTour from '.'
import { NotificationIcon } from '../../../../icons'
import {
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
} from '../../../../../lib/theme'
import { MapMarkers } from '../../../MapMarker/Presets'
import Button from '../../../../Forms/Actions/Button'
import type { GuidedTourStep } from './types'

const meta = {
  title: 'Geospatial/Map Pop Up/Preset/Guided Tour',
  component: GuidedTour,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Step-by-step tour built on top of MapPopUp. Renders one popup per step with a footer carrying previous/next controls, a step counter ("1 of 4") and a Skip all action.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div
        style={{
          height: '40rem',
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
    steps: { description: '`steps` value', control: false },
    activeStepIndex: { description: '`activeStepIndex` value', control: false },
    onStepChange: { description: '`onStepChange` handler', control: false },
    onFinish: { description: '`onFinish` handler', control: false },
    onSkip: { description: '`onSkip` handler', control: false },
    variant: {
      description: '`variant` value',
      options: ['dark', 'default'],
      control: { type: 'inline-radio' },
    },
    closeOnEscape: { description: '`closeOnEscape` value', control: 'boolean' },
    closeOnOutsideClick: {
      description: '`closeOnOutsideClick` value',
      control: 'boolean',
    },
    labels: { description: '`labels` value', control: false },
  },
} satisfies Meta<typeof GuidedTour>

export default meta
type Story = StoryObj<typeof meta>

const Title = ({ text, isDark }: { text: string; isDark: boolean }) => (
  <p
    style={{
      fontSize: getThemedFontSize(400),
      lineHeight: getThemedLineHeight(600),
      fontWeight: 'bold',
      color: getThemedColor('neutral', isDark ? 100 : 800),
    }}
  >
    {text}
  </p>
)

const Caption = ({ text, isDark }: { text: string; isDark: boolean }) => (
  <p
    style={{
      fontSize: getThemedFontSize(300),
      lineHeight: getThemedLineHeight(500),
      color: getThemedColor('neutral', isDark ? 200 : 700),
    }}
  >
    {text}
  </p>
)

const Body = ({ isDark }: { isDark: boolean }) => (
  <div
    style={{
      padding: '0.75rem',
      fontSize: getThemedFontSize(300),
      lineHeight: getThemedLineHeight(500),
      color: getThemedColor('neutral', isDark ? 100 : 800),
    }}
  >
    Tour steps can be anchored to any focusable element on the page. Navigate
    with the arrows in the footer, or skip the whole tour at once.
  </div>
)

/** Kept outside the story so the element identity never changes between renders. */
const stepTitle = <Title text='Step one' isDark />
const stepTwoTitle = <Title text='Step two' isDark />
const stepThreeTitle = <Title text='Step three' isDark />
const stepCaption = <Caption text='Anchored to a marker' isDark />
const stepTwoCaption = <Caption text='Same tour, different anchor' isDark />
const stepThreeCaption = <Caption text='Start exploring finishes' isDark />
const stepBody = <Body isDark />
const stepIcon = <NotificationIcon color={getThemedColor('neutral', 100)} />
const stepFooterExtra = (
  <Button
    variant='borderless'
    size='small'
    label='Extra step action'
    onClick={() => {}}
  />
)

export const GuidedTourStory: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    steps: [],
    activeStepIndex: 0,
    onStepChange: () => {},
    variant: 'dark',
  },
  render: (args) => {
    const [open, setOpen] = useState(false)
    const [stepIndex, setStepIndex] = useState(0)
    const firstRef = useRef<HTMLButtonElement>(null)
    const secondRef = useRef<HTMLButtonElement>(null)
    const thirdRef = useRef<HTMLButtonElement>(null)

    // Everything inside `steps` must be referentially stable. MapPopUp syncs
    // `anchorRef` in an effect, so a new array (or a new `icon` element) on
    // every render would re-register the reference endlessly.
    const steps: GuidedTourStep[] = useMemo(
      () => [
        {
          id: 'first',
          anchorRef: firstRef,
          placement: 'right',
          offset: 20,
          icon: stepIcon,
          title: stepTitle,
          caption: stepCaption,
          content: stepBody,
        },
        {
          id: 'second',
          anchorRef: secondRef,
          placement: 'right',
          offset: 20,
          icon: stepIcon,
          title: stepTwoTitle,
          caption: stepTwoCaption,
          content: stepBody,
        },
        {
          id: 'third',
          anchorRef: thirdRef,
          placement: 'left',
          offset: 20,
          icon: stepIcon,
          title: stepThreeTitle,
          caption: stepThreeCaption,
          content: stepBody,
          footer: stepFooterExtra,
        },
      ],
      [firstRef, secondRef, thirdRef],
    )

    const startTour = () => {
      setStepIndex(0)
      setOpen(true)
    }

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '6rem' }}>
        <MapMarkers.Plant
          ariaLabel='first tour anchor'
          onClick={startTour}
          triggerRef={firstRef}
          showFocusState={open && stepIndex === 0}
        />
        <MapMarkers.Point
          ariaLabel='second tour anchor'
          triggerRef={secondRef}
          showFocusState={open && stepIndex === 1}
        />
        <MapMarkers.Drop
          ariaLabel='third tour anchor'
          triggerRef={thirdRef}
          showFocusState={open && stepIndex === 2}
        />

        <GuidedTour
          {...args}
          open={open}
          onOpenChange={setOpen}
          steps={steps}
          activeStepIndex={stepIndex}
          onStepChange={setStepIndex}
          onFinish={() => setOpen(false)}
          onSkip={() => setOpen(false)}
        />
      </div>
    )
  },
}
