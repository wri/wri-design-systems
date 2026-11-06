/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { isValidElement, type ReactNode } from 'react'
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

const getLabelText = (node: ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node)
  }
  if (isValidElement(node)) {
    return getLabelText((node.props as { children?: ReactNode }).children)
  }
  if (Array.isArray(node)) {
    return node.map(getLabelText).join('')
  }
  return ''
}

const Tag = ({
  label,
  size = 'default',
  variant,
  disabled,
  icon,
  ariaLabel,
  color,
  borderColor,
  closeIconColor,
  iconPosition = 'start',
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

  if (color || borderColor || closeIconColor) {
    variantTagStyles = css`
      ${variantTagStyles}
      ${color ? `background-color: ${color};` : ''}
      ${borderColor ? `border-color: ${borderColor};` : ''}
      ${closeIconColor
        ? `.chakra-tag__closeTrigger { color: ${closeIconColor}; }`
        : ''}
    `
  }

  const hasCustomBorder = Boolean(borderColor)
  const accessibleName = ariaLabel ?? getLabelText(label)

  return (
    <ChakraTag.Root
      css={[baseTagStyles(size, hasCustomBorder), variantTagStyles]}
      data-disabled={disabled}
      {...rest}
    >
      {icon && iconPosition === 'start' ? (
        <ChakraTag.StartElement aria-hidden='true'>
          {icon}
        </ChakraTag.StartElement>
      ) : null}
      <ChakraTag.Label aria-label={accessibleName || undefined}>
        {label}
      </ChakraTag.Label>
      {icon && iconPosition === 'end' ? (
        <ChakraTag.EndElement
          aria-hidden='true'
          className='chakra-tag__iconEndElement'
        >
          {icon}
        </ChakraTag.EndElement>
      ) : null}
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
            aria-label={l.closeButtonAriaLabel(accessibleName)}
          >
            <CloseIcon />
          </div>
        </ChakraTag.EndElement>
      ) : null}
    </ChakraTag.Root>
  )
}

export default Tag
