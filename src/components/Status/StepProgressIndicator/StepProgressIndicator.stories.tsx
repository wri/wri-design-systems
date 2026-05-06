// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import StepProgressIndicatorStory from '.'
import Button from '../../Forms/Actions/Button'

const meta = {
  title: 'Status/Step Progress Indicator',
  component: StepProgressIndicatorStory,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          'Multi-step progress indicator. Use `steps` and `currentStep` to control state.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    steps: {
      description:
        'Array of step items, each with an optional label and onClick handler',
      control: false,
    },
    currentStep: {
      description: 'Index of the currently active step (1-based)',
      control: 'number',
    },
    labels: {
      description: 'Override internal UI labels for i18n',
      control: false,
    },
  },
} satisfies Meta<typeof StepProgressIndicatorStory>

export default meta
type Story = StoryObj<typeof meta>

export const StepProgressIndicator: Story = {
  args: {
    steps: [],
    currentStep: 1,
  },
  render: (args) => {
    const [currentStep, setCurrentStep] = useState(args.currentStep)
    return (
      <div style={{ width: '33.75rem' }}>
        <StepProgressIndicatorStory
          steps={[
            { label: 'Label', onClick: () => setCurrentStep(1) },
            { label: 'Label', onClick: () => setCurrentStep(2) },
            { label: 'Label', onClick: () => setCurrentStep(3) },
            { label: 'Label', onClick: () => setCurrentStep(4) },
            { label: 'Label', onClick: () => setCurrentStep(5) },
          ]}
          currentStep={currentStep}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1.25rem',
          }}
        >
          <Button
            label='Back'
            variant='secondary'
            onClick={() => setCurrentStep(currentStep - 1)}
            disabled={currentStep === 1}
          />
          <Button
            label='Next'
            variant='primary'
            onClick={() => setCurrentStep(currentStep + 1)}
            disabled={currentStep === 5}
          />
        </div>
      </div>
    )
  },
}
