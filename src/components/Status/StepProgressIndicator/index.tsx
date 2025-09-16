/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { CheckIcon } from '../../icons'
import {
  stepProgressIndicatorContainerStyles,
  stepProgressIndicatorItemIndicatorStyles,
  stepProgressIndicatorItemLabelStyles,
  stepProgressIndicatorItemStyles,
  stepProgressIndicatorLineContainerStyles,
  stepProgressIndicatorLineStyles,
} from './styled'
import { StepProgressIndicatorProps } from './types'

const StepProgressIndicator = ({ steps, currentStep }: StepProgressIndicatorProps) => (
  <div css={stepProgressIndicatorContainerStyles}>
    {steps.map((step, idx) => (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={`${step.label}-${idx}`}
        css={stepProgressIndicatorItemStyles}
      >
        <button
          css={stepProgressIndicatorItemIndicatorStyles(currentStep >= idx + 1)}
          type='button'
          onClick={step.onClick}
          aria-current={currentStep === idx + 1}
          aria-disabled={currentStep < idx + 1}
          disabled={currentStep < idx + 1}
          aria-label={`Current Step ${idx}${step.label ? ` ${step.label}` : ''}`}
        >
          {currentStep > idx + 1 ? (
            <CheckIcon height='16px' width='16px' />
          ) : (
            idx + 1
          )}
        </button>
        {step.label ? (
          <p css={stepProgressIndicatorItemLabelStyles(currentStep === idx + 1)}>
            {step.label}
          </p>
        ) : null}
      </div>
    ))}
    <div css={stepProgressIndicatorLineContainerStyles}>
      <div css={stepProgressIndicatorLineStyles} />
    </div>
  </div>
)

export default StepProgressIndicator
