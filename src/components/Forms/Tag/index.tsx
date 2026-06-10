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
import { useLabels } from '../../../lib/i18n/useLabels'

const Tag = ({
  label,
  size = 'default',
  variant,
  disabled,
  icon,
  onClose,
  closable,
  labels,
  ...rest
}: TagProps) => {
  const l = useLabels('Tag', labels)

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
        <ChakraTag.StartElement aria-hidden='true'>
          {icon}
        </ChakraTag.StartElement>
      ) : null}
      <ChakraTag.Label aria-label={label}>{label}</ChakraTag.Label>
      {closable && !disabled && size !== 'small' ? (
        <ChakraTag.EndElement>
          <div
            className='chakra-tag__closeTrigger'
            role='button'
            tabIndex={0}
            onClick={onClose}
            onKeyDown={(event) => {
              if (onClose && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault()
                onClose()
              }
            }}
            aria-label={l.closeButtonAriaLabel(label)}
          >
            <CloseIcon />
          </div>
        </ChakraTag.EndElement>
      ) : null}
    </ChakraTag.Root>
  )
}

export default Tag
