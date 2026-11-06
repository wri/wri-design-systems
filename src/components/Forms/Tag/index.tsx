/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { isValidElement, type ReactNode } from 'react'
import { Tag as ChakraTag, VisuallyHidden } from '@chakra-ui/react'
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

/**
 * Interpolated into an Emotion css template, a raw color string could inject
 * arbitrary CSS. Allowlist the safe color syntaxes instead: hex, named
 * colors, and css color functions. Anything else is ignored so the variant
 * styling applies.
 */
const SAFE_COLOR_PATTERN =
  /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-zA-Z]+|(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color|color-mix)\([\w\s,%./()-]*\))$/i

const safeColor = (value?: string) =>
  value && SAFE_COLOR_PATTERN.test(value) ? value : undefined

const Tag = ({
  label,
  size = 'default',
  variant,
  disabled,
  icon,
  ariaLabel,
  backgroundColor,
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

  const safeBackgroundColor = safeColor(backgroundColor)
  const safeBorderColor = safeColor(borderColor)
  const safeCloseIconColor = safeColor(closeIconColor)

  if (safeBackgroundColor || safeBorderColor || safeCloseIconColor) {
    variantTagStyles = css`
      ${variantTagStyles}
      ${safeBackgroundColor ? `background-color: ${safeBackgroundColor};` : ''}
      ${safeBorderColor ? `border-color: ${safeBorderColor};` : ''}
      ${safeCloseIconColor
        ? `.chakra-tag__closeTrigger { color: ${safeCloseIconColor}; }`
        : ''}
    `
  }

  const hasCustomBorder = Boolean(safeBorderColor)
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
      <ChakraTag.Label>
        {ariaLabel ? (
          <>
            <span aria-hidden='true'>{label}</span>
            <VisuallyHidden>{ariaLabel}</VisuallyHidden>
          </>
        ) : (
          label
        )}
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
