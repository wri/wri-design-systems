// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { Tag as ChakraTag } from '@chakra-ui/react'
import { TagProps } from './types'
import {
  ErrorTag,
  InfoGreyTag,
  InfoWhiteTag,
  SuccessTag,
  WarningTag,
} from './styled'

const Tag = ({
  label,
  size = 'default',
  variant,
  disabled,
  icon,
  onClose,
  closable,
  ...rest
}: TagProps) => {
  let StyledTag = InfoWhiteTag
  if (variant === 'info-grey') {
    StyledTag = InfoGreyTag
  } else if (variant === 'success') {
    StyledTag = SuccessTag
  } else if (variant === 'warning') {
    StyledTag = WarningTag
  } else if (variant === 'error') {
    StyledTag = ErrorTag
  }

  return (
    <StyledTag size={size} data-disabled={disabled} {...rest}>
      {icon ? (
        <ChakraTag.StartElement aria-label={`${label} tag icon`}>
          {icon}
        </ChakraTag.StartElement>
      ) : null}
      <ChakraTag.Label aria-label={label}>{label}</ChakraTag.Label>
      {closable && !disabled ? (
        <ChakraTag.EndElement>
          <ChakraTag.CloseTrigger
            onClick={onClose}
            aria-label={`${label} tag close button`}
          />
        </ChakraTag.EndElement>
      ) : null}
    </StyledTag>
  )
}

export default Tag
