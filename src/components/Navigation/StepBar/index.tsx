/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { CheckIcon } from '../../icons'
import {
  stepBarContainerStyles,
  stepBarItemIndicatorStyles,
  stepBarItemLabelStyles,
  stepBarItemStyles,
  stepBarLineContainerStyles,
  stepBarLineStyles,
} from './styled'
import { StepBarProps } from './types'

const StepBar = ({ steps, currentStep }: StepBarProps) => (
  <div css={stepBarContainerStyles}>
    {steps.map((step, idx) => (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={`${step.label}-${idx}`}
        css={stepBarItemStyles}
      >
        <button
          css={stepBarItemIndicatorStyles(currentStep >= idx + 1)}
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
          <p css={stepBarItemLabelStyles(currentStep === idx + 1)}>
            {step.label}
          </p>
        ) : null}
      </div>
    ))}
    <div css={stepBarLineContainerStyles}>
      <div css={stepBarLineStyles} />
    </div>
  </div>
)

export default StepBar
