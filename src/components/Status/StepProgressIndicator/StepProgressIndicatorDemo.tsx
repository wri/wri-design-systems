import { useState } from 'react'
import { StepProgressIndicator, Button } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'
import { MaxWidth } from '../../Navigation/Footer/Footer.stories'

const StepProgressIndicatorDemo = () => {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <DemoWrapper title='Step Progress Indicator'>
      <div style={{ maxWidth: '25rem' }}>
        <StepProgressIndicator
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
    </DemoWrapper>
  )
}

export default StepProgressIndicatorDemo
