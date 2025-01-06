// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import Button from '../Buttons/Button'
import { InfoIcon } from '../icons'
import {
  InfoWhiteInlineMessage,
  ErrorInlineMessage,
  InfoGreyInlineMessage,
  SuccessInlineMessage,
  WarningInlineMessage,
  InlineMessageTitle,
  InlineMessageCaption,
  InlineMessageHeader,
} from './styled'
import { InlineMessageProps } from './types'

const InlineMessage = ({
  label,
  caption,
  variant,
  size = 'large',
  icon = <InfoIcon height='16px' width='16px' />,
  onActionClick,
  actionLabel,
  isButtonRight,
}: InlineMessageProps) => {
  let StyledInlineMessage = InfoWhiteInlineMessage
  if (variant === 'info-grey') {
    StyledInlineMessage = InfoGreyInlineMessage
  } else if (variant === 'success') {
    StyledInlineMessage = SuccessInlineMessage
  } else if (variant === 'warning') {
    StyledInlineMessage = WarningInlineMessage
  } else if (variant === 'error') {
    StyledInlineMessage = ErrorInlineMessage
  }

  return (
    <StyledInlineMessage
      isButtonRight={isButtonRight}
      size={size}
      aria-roledescription='Note'
    >
      <div>
        <InlineMessageHeader>
          {icon}
          <InlineMessageTitle size={size}>{label}</InlineMessageTitle>
        </InlineMessageHeader>
        <InlineMessageCaption size={size}>{caption}</InlineMessageCaption>
      </div>
      {actionLabel ? (
        <Button
          label={actionLabel}
          variant={
            variant === 'info-white' || variant === 'info-grey'
              ? 'primary'
              : 'secondary'
          }
          size={size === 'large' ? 'default' : 'small'}
          onClick={onActionClick}
        />
      ) : null}
    </StyledInlineMessage>
  )
}

export default InlineMessage
