/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import Button from '../../Forms/Actions/Button'
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
  buttonLeftIcon,
  buttonRightIcon,
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
        {caption && (
          <p css={inlineMessageCaptionStyles(size, !!icon)}>{caption}</p>
        )}
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
          leftIcon={buttonLeftIcon}
          rightIcon={buttonRightIcon}
        />
      ) : null}
    </div>
  )
}

export default InlineMessage
