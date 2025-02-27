/** @jsxImportSource @emotion/react */

import { Tag as ChakraTag } from '@chakra-ui/react'
import { TagProps } from './types'
import {
  baseTagStyles,
  infoWhiteTagStyles,
  infoGreyTagStyles,
  successTagStyles,
  warningTagStyles,
  errorTagStyles,
} from './styled'
import { CloseIcon } from '../../icons'

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
  let variantTagStyles = infoWhiteTagStyles
  if (variant === 'info-grey') {
    variantTagStyles = infoGreyTagStyles
  } else if (variant === 'success') {
    variantTagStyles = successTagStyles
  } else if (variant === 'warning') {
    variantTagStyles = warningTagStyles
  } else if (variant === 'error') {
    variantTagStyles = errorTagStyles
  }

  return (
    <ChakraTag.Root
      css={[baseTagStyles(size), variantTagStyles]}
      data-disabled={disabled}
      {...rest}
    >
      {icon ? (
        <ChakraTag.StartElement aria-label={`${label} tag icon`}>
          {icon}
        </ChakraTag.StartElement>
      ) : null}
      <ChakraTag.Label aria-label={label}>{label}</ChakraTag.Label>
      {closable && !disabled && size !== 'small' ? (
        <ChakraTag.EndElement>
          <ChakraTag.CloseTrigger
            onClick={onClose}
            aria-label={`${label} tag close button`}
          >
            <CloseIcon />
          </ChakraTag.CloseTrigger>
        </ChakraTag.EndElement>
      ) : null}
    </ChakraTag.Root>
  )
}

export default Tag
