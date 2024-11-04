import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import RadioGroup from './RadioGroup'
import Radio from '.'

const meta = {
  title: 'Controls/Radio Button/Radio Group',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const MultipleRadios: Story = {
  args: {
    name: 'radio-group',
    children: (
      <>
        <Radio label='One' value='1' />
        <Radio label='Two' value='2' />
        <Radio label='Three' value='3' />
      </>
    ),
  },
}

export const DefaultValue: Story = {
  args: {
    name: 'radio-group',
    children: (
      <>
        <Radio label='One' value='1' />
        <Radio label='Two' value='2' />
        <Radio label='Three' value='3' />
      </>
    ),
    defaultValue: '2',
  },
}

export const Disabled: Story = {
  args: {
    name: 'radio-group',
    children: (
      <>
        <Radio label='One' value='1' />
        <Radio label='Two' value='2' isDisabled />
        <Radio label='Three' value='3' />
      </>
    ),
    defaultValue: '2',
  },
}

export const AsRow: Story = {
  args: {
    name: 'radio-group',
    children: (
      <>
        <Radio label='One' value='1' />
        <Radio label='Two' value='2' />
        <Radio label='Three' value='3' />
      </>
    ),
    isRow: true,
  },
}
