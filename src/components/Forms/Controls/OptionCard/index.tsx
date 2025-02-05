// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { HStack, RadioCard } from '@chakra-ui/react'
import { OptionCardGroupProps, OptionCardProps } from './types'
import {
  OptionCardHeader,
  OptionCardHeaderContent,
  OptionCardHeaderCaption,
  OptionCardHeaderLabel,
  OptionCardIconContainer,
  OptionCardContainer,
  OptionCardExpandedContainer,
  OptionCardItemHiddenInput,
  OptionCardControl,
  OptionCardItemIndicator,
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
  <OptionCardContainer value={value} disabled={disabled}>
    <OptionCardItemHiddenInput />
    <OptionCardControl>
      <OptionCardHeader variant={variant}>
        <OptionCardIconContainer>{icon}</OptionCardIconContainer>
        <OptionCardHeaderContent>
          <OptionCardHeaderLabel
            variant={variant}
            disabled={disabled}
            aria-label={label}
            aria-disabled={disabled}
          >
            {label}
          </OptionCardHeaderLabel>
          <OptionCardHeaderCaption
            variant={variant}
            disabled={disabled}
            aria-label={caption}
            aria-disabled={disabled}
          >
            {caption}
          </OptionCardHeaderCaption>
        </OptionCardHeaderContent>
      </OptionCardHeader>
      <OptionCardItemIndicator />
    </OptionCardControl>
    {variant === 'expanded' ? (
      <OptionCardExpandedContainer disabled={disabled}>
        {children}
      </OptionCardExpandedContainer>
    ) : null}
  </OptionCardContainer>
)

export default OptionCard

export const OptionCardGroup = ({
  children,
  ...rest
}: OptionCardGroupProps) => (
  <RadioCard.Root {...rest}>
    <HStack alignItems='flex-start' flexWrap='wrap' gap='12px'>
      {children}
    </HStack>
  </RadioCard.Root>
)
