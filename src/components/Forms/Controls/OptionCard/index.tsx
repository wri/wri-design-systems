/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { RadioCard } from '@chakra-ui/react'

import { OptionCardProps } from './types'
import {
  optionCardContainerStyles,
  optionCardControlStyles,
  optionCardExpandedContainerStyles,
  optionCardHeaderCaptionStyles,
  optionCardHeaderLabelStyles,
  optionCardHeaderStyles,
  optionCardIconContainerStyles,
  optionCardItemIndicatorStyles,
} from './styled'

const OptionCard = ({
  label,
  caption,
  icon,
  variant = 'default',
  disabled,
  children,
  value,
}: OptionCardProps) => (
  <RadioCard.Item
    css={optionCardContainerStyles}
    value={value}
    disabled={disabled}
  >
    <RadioCard.ItemHiddenInput />
    <RadioCard.ItemControl css={optionCardControlStyles}>
      <div css={optionCardHeaderStyles(variant)}>
        <div css={optionCardIconContainerStyles}>{icon}</div>
        <div style={{ width: '100%' }}>
          <p
            css={optionCardHeaderLabelStyles(variant, disabled)}
            aria-label={label}
            aria-disabled={disabled}
          >
            {label}
          </p>
          <p
            css={optionCardHeaderCaptionStyles(variant, disabled)}
            aria-label={caption}
            aria-disabled={disabled}
          >
            {caption}
          </p>
        </div>
      </div>
      <RadioCard.ItemIndicator css={optionCardItemIndicatorStyles(variant)} />
    </RadioCard.ItemControl>
    {variant === 'expanded' ? (
      <div css={optionCardExpandedContainerStyles(disabled)}>{children}</div>
    ) : null}
  </RadioCard.Item>
)

export default OptionCard
