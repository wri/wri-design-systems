// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react'
import MultiActionButton from '.'
import { InfoIcon } from '../../../icons'

const meta = {
  title: 'Forms/Actions/Multi Action Button',
  component: MultiActionButton,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Button that reveals a dropdown of additional actions on click.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Visual style of the button',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'borderless', 'outline', 'negative'],
    },
    size: {
      description: 'Size variant',
      control: { type: 'select' },
      options: ['default', 'small'],
    },
    mainActionLabel: {
      description: 'Label for the primary action',
      control: 'text',
    },
    mainActionLeftIcon: {
      description: 'Icon to the left of the main action label',
      control: false,
    },
    mainActionRightIcon: {
      description: 'Icon to the right of the main action label',
      control: false,
    },
    mainActionOnClick: {
      description: 'Handler for the primary action click',
      control: false,
    },
    otherActions: {
      description: 'List of secondary action items',
      control: false,
    },
    disabled: { description: 'Disables the button', control: 'boolean' },
  },
} satisfies Meta<typeof MultiActionButton>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryDefault: Story = {
  args: {
    variant: 'primary',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

export const PrimarySmall: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

export const SecondaryDefault: Story = {
  args: {
    variant: 'secondary',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

export const SecondarySmall: Story = {
  args: {
    variant: 'secondary',
    size: 'small',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

export const BorderlessDefault: Story = {
  args: {
    variant: 'borderless',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

export const BorderlessSmall: Story = {
  args: {
    variant: 'borderless',
    size: 'small',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

export const OutlineDefault: Story = {
  args: {
    variant: 'outline',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

export const OutlineSmall: Story = {
  args: {
    variant: 'outline',
    size: 'small',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

export const NegativeDefault: Story = {
  args: {
    variant: 'negative',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

export const NegativeSmall: Story = {
  args: {
    variant: 'negative',
    size: 'small',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
    disabled: true,
  },
}

export const WithDisabledMenuItem: Story = {
  args: {
    variant: 'primary',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
        disabled: true,
      },
    ],
  },
}

export const WithLeftIcon: Story = {
  args: {
    variant: 'primary',
    mainActionLabel: 'First Action',
    mainActionLeftIcon: <InfoIcon />,
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

export const WithRightIcon: Story = {
  args: {
    variant: 'secondary',
    mainActionLabel: 'First Action',
    mainActionRightIcon: <InfoIcon />,
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
}

/**
 * State reference for design QA (DS-328 / MultiActionButton spec):
 *
 * - Default — variant background, variant border.
 * - Hover — variant background + emphasized border (primary-800 for the
 *   primary variant) + elevated shadow.
 * - Pressed — variant active colors (primary-600 bg / primary-700 border for
 *   primary). Applies to both segments, including while the menu is open.
 * - Open — trigger keeps the DEFAULT background, only the border is
 *   emphasized and the chevron rotates 180°.
 *
 * Hover/pressed are native CSS states — interact with the story to see them.
 */
export const States: Story = {
  args: {
    variant: 'primary',
    mainActionLabel: 'First Action',
    mainActionOnClick: () => console.log('first action'),
    otherActions: [
      {
        label: 'Second Action',
        value: 'second-action',
        onClick: () => console.log('second action'),
      },
      {
        label: 'Third Action',
        value: 'third-action',
        onClick: () => console.log('third action'),
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default / hover / pressed / open states. Hover and pressed are native interactions; click the chevron segment to see the open state (default background + emphasized border, chevron rotated).',
      },
    },
  },
}
