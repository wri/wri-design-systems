// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Slider from '.'

const meta = {
  title: 'Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Continuous: Story = {
  args: {
    width: '250px',
    min: 0,
    max: 100,
    defaultValue: [50],
  },
}

export const Discrete: Story = {
  args: {
    width: '250px',
    min: 0,
    max: 100,
    defaultValue: [50],
    marks: [
      { value: 0, label: 0 },
      { value: 25, label: 25 },
      { value: 50, label: 50 },
      { value: 75, label: 75 },
      { value: 100, label: 100 },
    ],
  },
}

export const DiscreteWithSteps: Story = {
  args: {
    width: '250px',
    min: 0,
    max: 100,
    defaultValue: [50],
    marks: [
      { value: 0, label: 0 },
      { value: 25, label: 25 },
      { value: 50, label: 50 },
      { value: 75, label: 75 },
      { value: 100, label: 100 },
    ],
    step: 25,
  },
}

export const Range: Story = {
  args: {
    width: '250px',
    min: 0,
    max: 100,
    defaultValue: [20, 80],
  },
}

export const Disabled: Story = {
  args: {
    width: '250px',
    min: 0,
    max: 100,
    defaultValue: [50],
    disabled: true,
  },
}
