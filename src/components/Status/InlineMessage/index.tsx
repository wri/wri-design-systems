/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import Button from '../../Forms/Actions/Button'
import { InfoIcon } from '../../icons'
import {
  defaultInlineMessageStyles,
  errorInlineMessageStyles,
  infoGreyInlineMessageStyles,
  infoWhiteInlineMessageStyles,
  inlineMessageCaptionContainerStyles,
  inlineMessageCaptionStyles,
  inlineMessageHeaderStyles,
  inlineMessageTitleStyles,
  successInlineMessageStyles,
  warningInlineMessageStyles,
} from './styled'
import { InlineMessageProps } from './types'
import { useLabels } from '../../../lib/i18n/useLabels'

const InlineMessage = ({
  label,
  caption,
  variant,
  size = 'large',
  icon = <InfoIcon height='1rem' width='1rem' />,
  onActionClick,
  actionLabel,
  isButtonRight,
  buttonLeftIcon,
  buttonRightIcon,
  labels,
}: InlineMessageProps) => {
  const l = useLabels('InlineMessage', labels)
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
      aria-roledescription={l.roleDescription}
    >
      <div>
        <div css={inlineMessageHeaderStyles}>
          {icon}
          <p css={inlineMessageTitleStyles(size)}>{label}</p>
        </div>
        {caption && typeof caption === 'string' ? (
          <p css={inlineMessageCaptionStyles(size, !!icon)}>{caption}</p>
        ) : caption ? (
          <div css={inlineMessageCaptionContainerStyles(size, !!icon)}>
            {caption}
          </div>
        ) : null}
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
