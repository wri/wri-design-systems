// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import StepBarStory from '.'
import Button from '../../Forms/Actions/Button'

const meta = {
  title: 'Navigation/Step Bar',
  component: StepBarStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StepBarStory>

export default meta
type Story = StoryObj<typeof meta>

export const StepBar: Story = {
  args: {
    steps: [],
    currentStep: 1,
  },
  render: (args) => {
    const [currentStep, setCurrentStep] = useState(args.currentStep)
    return (
      <div style={{ width: '540px' }}>
        <StepBarStory
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
            marginTop: '20px',
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
