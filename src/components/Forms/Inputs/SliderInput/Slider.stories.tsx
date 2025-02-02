// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import SliderInput from '.'

const meta = {
  title: 'Forms/Inputs/Slider Input',
  component: SliderInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ width: '420px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SliderInput>

export default meta
type Story = StoryObj<typeof meta>

export const Continuous: Story = {
  args: {
    label: 'Continuous',
    caption: 'Caption',
    sliderItem: {
      min: 0,
      max: 100,
      defaultValue: [30],
    },
    onChange: (value) => console.log('Continuous', value),
    required: true,
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    caption: 'Caption',
    size: 'small',
    sliderItem: {
      min: 0,
      max: 100,
      defaultValue: [60],
    },
    onChange: (value) => console.log('Small', value),
    required: true,
  },
}

export const Discrete: Story = {
  args: {
    label: 'Discrete',
    caption: 'Caption',
    sliderItem: {
      min: 0,
      max: 100,
      defaultValue: [75],
      marks: [
        { value: 0, label: 0 },
        { value: 25, label: 25 },
        { value: 50, label: 50 },
        { value: 75, label: 75 },
        { value: 100, label: 100 },
      ],
      step: 25,
    },
    onChange: (value) => console.log('Discrete', value),
    required: true,
  },
}

export const Range: Story = {
  args: {
    label: 'Range',
    caption: 'Caption',
    sliderItem: {
      min: 0,
      max: 100,
      defaultValue: [20, 80],
    },
    onChange: (value) => console.log('Range', value),
    required: true,
  },
}

export const Centered: Story = {
  args: {
    label: 'Centered',
    caption: 'Caption',
    sliderItem: {
      min: -100,
      max: 100,
      defaultValue: [0],
      isCentred: true,
    },
    onChange: (value) => console.log('Centered', value),
    required: true,
  },
}
