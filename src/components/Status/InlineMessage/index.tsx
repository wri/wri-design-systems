/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import Button from '../../Forms/Buttons/Button'
import { InfoIcon } from '../../icons'
import {
  defaultInlineMessageStyles,
  errorInlineMessageStyles,
  infoGreyInlineMessageStyles,
  infoWhiteInlineMessageStyles,
  inlineMessageCaptionStyles,
  inlineMessageHeaderStyles,
  inlineMessageTitleStyles,
  successInlineMessageStyles,
  warningInlineMessageStyles,
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
  let variantInlineMessageStyles = infoWhiteInlineMessageStyles
  if (variant === 'info-grey') {
    variantInlineMessageStyles = infoGreyInlineMessageStyles
  } else if (variant === 'success') {
    variantInlineMessageStyles = successInlineMessageStyles
  } else if (variant === 'warning') {
    variantInlineMessageStyles = warningInlineMessageStyles
  } else if (variant === 'error') {
    variantInlineMessageStyles = errorInlineMessageStyles
  }

  return (
    <div
      css={[
        defaultInlineMessageStyles(size, isButtonRight),
        variantInlineMessageStyles,
      ]}
      aria-roledescription='Note'
    >
      <div>
        <div css={inlineMessageHeaderStyles}>
          {icon}
          <p css={inlineMessageTitleStyles(size)}>{label}</p>
        </div>
        <p css={inlineMessageCaptionStyles(size)}>{caption}</p>
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
    </div>
  )
}

export default InlineMessage
