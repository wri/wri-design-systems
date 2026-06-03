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
  variant,
  itemWidth,
  hideControl,
}: OptionCardProps) => (
  <RadioCard.Root defaultValue={defaultValue} onValueChange={onValueChange}>
    <HStack alignItems='flex-start' flexWrap='wrap' gap='0.75rem'>
      {items?.map((item) => (
        <RadioCard.Item
          css={optionCardContainerStyles(
            itemWidth,
            item.selectedColor,
            item.selectedBackgroundColor,
          )}
          key={`${item.label}-${item.value}`}
          value={item.value}
          disabled={item.disabled}
        >
          <RadioCard.ItemHiddenInput />
          <RadioCard.ItemControl css={optionCardControlStyles}>
            <div css={optionCardHeaderStyles(variant)}>
              <div
                css={optionCardIconContainerStyles}
                className='option-card-icon-container'
              >
                {item.icon}
              </div>
              <div style={{ width: '100%' }}>
                <p
                  css={optionCardHeaderLabelStyles(variant, item.disabled)}
                  aria-label={item.label}
                  aria-disabled={item.disabled}
                >
                  {item.label}
                </p>
                <p
                  css={optionCardHeaderCaptionStyles(variant, item.disabled)}
                  aria-label={item.caption}
                  aria-disabled={item.disabled}
                >
                  {item.caption}
                </p>
              </div>
            </div>
            {hideControl ? null : (
              <RadioCard.ItemIndicator
                css={optionCardItemIndicatorStyles(variant)}
              />
            )}
          </RadioCard.ItemControl>
          {item.children && variant === 'expanded' ? (
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
