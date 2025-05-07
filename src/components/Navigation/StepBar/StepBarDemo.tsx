import { useState } from 'react'
import { StepBar, Button } from '../..'

const StepBarDemo = () => {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <div>
      <StepBar
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
}

export default StepBarDemo
