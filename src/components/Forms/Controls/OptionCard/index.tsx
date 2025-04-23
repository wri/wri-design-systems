/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { RadioCard, HStack } from '@chakra-ui/react'

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
  defaultValue,
  items,
  onValueChange,
}: OptionCardProps) => (
  <RadioCard.Root defaultValue={defaultValue} onValueChange={onValueChange}>
    <HStack alignItems='flex-start' flexWrap='wrap' gap='12px'>
      {items.map((item) => (
        <RadioCard.Item
          css={optionCardContainerStyles}
          key={`${item.label}-${item.value}`}
          value={item.value}
          disabled={item.disabled}
        >
          <RadioCard.ItemHiddenInput />
          <RadioCard.ItemControl css={optionCardControlStyles}>
            <div css={optionCardHeaderStyles(item.variant)}>
              <div css={optionCardIconContainerStyles}>{item.icon}</div>
              <div style={{ width: '100%' }}>
                <p
                  css={optionCardHeaderLabelStyles(item.variant, item.disabled)}
                  aria-label={item.label}
                  aria-disabled={item.disabled}
                >
                  {item.label}
                </p>
                <p
                  css={optionCardHeaderCaptionStyles(
                    item.variant,
                    item.disabled,
                  )}
                  aria-label={item.caption}
                  aria-disabled={item.disabled}
                >
                  {item.caption}
                </p>
              </div>
            </div>
            <RadioCard.ItemIndicator
              css={optionCardItemIndicatorStyles(item.variant)}
            />
          </RadioCard.ItemControl>
          {item.children && item.variant === 'expanded' ? (
            <RadioCard.ItemAddon
              css={optionCardExpandedContainerStyles(item.disabled)}
            >
              {item.children}
            </RadioCard.ItemAddon>
          ) : null}
        </RadioCard.Item>
      ))}
    </HStack>
  </RadioCard.Root>
)

export default OptionCard
