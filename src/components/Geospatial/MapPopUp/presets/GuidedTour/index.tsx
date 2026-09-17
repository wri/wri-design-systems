/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import MapPopUp from '../..'
import Button from '../../../../Forms/Actions/Button'
import IconButton from '../../../../Forms/Actions/IconButton'
import { ChevronLeftIcon, ChevronRightIcon } from '../../../../icons'
import { useLabels } from '../../../../../lib/i18n/useLabels'
import { GuidedTourProps } from './types'
import {
  guidedTourFooterControlsStyles,
  guidedTourFooterStyles,
  guidedTourNavigationButtonStyles,
  guidedTourNavigationStyles,
  guidedTourNextButtonStyles,
  guidedTourSkipButtonStyles,
  guidedTourStepCounterStyles,
} from './styled'
import { getThemedColor } from '../../../../../lib/theme'

const GuidedTour = ({
  open,
  onOpenChange,
  steps,
  activeStepIndex,
  onStepChange,
  onFinish,
  onSkip,
  variant = 'dark',
  closeOnEscape = true,
  closeOnOutsideClick = false,
  labels,
}: GuidedTourProps) => {
  const l = useLabels('GuidedTour', labels)

  const totalSteps = steps.length
  const step = steps[activeStepIndex]

  if (!open || !step || totalSteps === 0) return null

  const isFirstStep = activeStepIndex === 0
  const isLastStep = activeStepIndex === totalSteps - 1
  const isDark = variant === 'dark'

  const handleFinish = () => {
    if (onFinish) {
      onFinish()
      return
    }
    onOpenChange(false)
  }

  const handleSkip = () => {
    if (onSkip) {
      onSkip()
      return
    }
    onOpenChange(false)
  }

  const header = (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '0.25rem',
        }}
      >
        {step.icon}
        <p
          style={{
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: 'bold',
            marginBottom: step.caption ? '0.25rem' : 0,
            color: getThemedColor('neutral', isDark ? 100 : 800),
          }}
        >
          {step.title}
        </p>
      </div>
      {step.caption ? (
        <p
          style={{
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            color: getThemedColor('neutral', isDark ? 200 : 700),
          }}
        >
          {step.caption}
        </p>
      ) : null}
    </div>
  )

  const footer = (
    <div css={guidedTourFooterStyles}>
      <div css={guidedTourFooterControlsStyles}>
        <div css={guidedTourNavigationStyles}>
          <IconButton
            css={guidedTourNavigationButtonStyles(isDark)}
            icon={<ChevronLeftIcon />}
            aria-label={l.previousStepLabel}
            disabled={isFirstStep}
            onClick={() => onStepChange(activeStepIndex - 1)}
          />
          <p css={guidedTourStepCounterStyles(isDark)}>
            {l.stepCounterLabel(activeStepIndex + 1, totalSteps)}
          </p>
          <IconButton
            css={[
              guidedTourNavigationButtonStyles(isDark),
              guidedTourNextButtonStyles(),
            ]}
            icon={<ChevronRightIcon />}
            aria-label={isLastStep ? l.finishLabel : l.nextStepLabel}
            onClick={
              isLastStep
                ? handleFinish
                : () => onStepChange(activeStepIndex + 1)
            }
          />
        </div>

        {isLastStep ? (
          <Button
            variant='primary'
            size='small'
            label={l.startExploringLabel}
            onClick={handleFinish}
          />
        ) : (
          <Button
            css={guidedTourSkipButtonStyles(isDark)}
            variant='borderless'
            size='small'
            label={l.skipAllLabel}
            onClick={handleSkip}
          />
        )}
      </div>

      {step.footer}
    </div>
  )

  return (
    <MapPopUp
      open={open}
      onOpenChange={onOpenChange}
      anchorRef={step.anchorRef}
      placement={step.placement}
      offset={step.offset}
      variant={variant}
      closeOnEscape={closeOnEscape}
      closeOnOutsideClick={closeOnOutsideClick}
      header={header}
      content={step.content}
      footer={footer}
      labels={step.labels}
    />
  )
}

export default GuidedTour
