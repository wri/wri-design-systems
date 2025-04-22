/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { CheckboxCard, HStack, CheckboxGroup } from '@chakra-ui/react'
import { CheckboxOptionCardProps } from './types'
import {
  checkboxOptionCardCaptionStyles,
  checkboxOptionCardContainerStyles,
  checkboxOptionCardContentStyles,
  checkboxOptionCardControlStyles,
  checkboxOptionCardExpandedContainerStyles,
  checkboxOptionCardIconContainerStyles,
  checkboxOptionCardIndicatorStyles,
  checkboxOptionCardLabelStyles,
} from './styled'

const CheckboxOptionCard = ({
  defaultValue,
  items,
  onValueChange,
}: CheckboxOptionCardProps) => (
  <CheckboxGroup defaultValue={defaultValue} onValueChange={onValueChange}>
    <HStack alignItems='flex-start' flexWrap='wrap' gap='12px'>
      {items.map((item) => (
        <CheckboxCard.Root
          key={`${item.label}-${item.value}`}
          css={checkboxOptionCardContainerStyles}
          defaultChecked={defaultValue?.indexOf(item.value) !== -1}
          disabled={item.disabled}
          value={item.value}
        >
          <CheckboxCard.HiddenInput />
          <CheckboxCard.Control css={checkboxOptionCardControlStyles}>
            <CheckboxCard.Content
              css={checkboxOptionCardContentStyles(item.variant)}
            >
              <div css={checkboxOptionCardIconContainerStyles}>{item.icon}</div>
              <div style={{ width: '100%' }}>
                <CheckboxCard.Label
                  css={checkboxOptionCardLabelStyles(
                    item.variant,
                    item.disabled,
                  )}
                >
                  {item.label}
                </CheckboxCard.Label>
                {item.caption ? (
                  <CheckboxCard.Description
                    css={checkboxOptionCardCaptionStyles(
                      item.variant,
                      item.disabled,
                    )}
                  >
                    {item.caption}
                  </CheckboxCard.Description>
                ) : null}
              </div>
            </CheckboxCard.Content>
            <CheckboxCard.Indicator
              css={checkboxOptionCardIndicatorStyles(item.variant)}
            />
          </CheckboxCard.Control>
          {item.children && item.variant === 'expanded' ? (
            <CheckboxCard.Addon
              css={checkboxOptionCardExpandedContainerStyles(item.disabled)}
            >
              {item.children}
            </CheckboxCard.Addon>
          ) : null}
        </CheckboxCard.Root>
      ))}
    </HStack>
  </CheckboxGroup>
)

export default CheckboxOptionCard
