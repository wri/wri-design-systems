import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'
import { MultiActionButtonProps } from './types'

export const menuContentStyles = css`
  width: 100%;
  max-width: 12.5rem;
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 600)};
  border-radius: ${getThemedRadius(300)};
  padding: ${getThemedSpacing(200)};
  box-shadow: 0 0.25rem 0.375rem -0.0625rem #0000001a;
  margin-top: -0.25rem;
`

/**
 * Trigger segment state colors.
 */
const getMenuTriggerOpenBackgroundColor = (
  variant: MultiActionButtonProps['variant'],
  isOpen?: boolean,
) => {
  switch (variant) {
    case 'secondary':
      if (isOpen) return getThemedColor('neutral', 200)

      return getThemedColor('neutral', 100)
    case 'borderless':
      // Borderless has no border to emphasize, so the open state keeps the
      // pressed-style tint for visible feedback.
      return `color-mix(in srgb, ${getThemedColor('primary', 500)} 40%, transparent)`
    case 'outline':
      return 'transparent'
    case 'negative':
      return getThemedColor('error', 100)
    case 'primary':
      if (isOpen) return getThemedColor('primary', 600)

      return getThemedColor('primary', 500)
    default:
      return getThemedColor('primary', 500)
  }
}

const getMenuTriggerEmphasizedBorderColor = (
  variant: MultiActionButtonProps['variant'],
  isOpen?: boolean,
) => {
  switch (variant) {
    case 'secondary':
      if (isOpen) return getThemedColor('neutral', 500)

      return getThemedColor('neutral', 300)
    case 'borderless':
      return 'transparent'
    case 'outline':
      return getThemedColor('primary', 900)
    case 'negative':
      return getThemedColor('error', 500)
    case 'primary':
      if (isOpen) return getThemedColor('primary', 700)

      return getThemedColor('primary', 600)
    default:
      return getThemedColor('primary', 800)
  }
}

export const getMenuTriggerIconColor = (
  variant: MultiActionButtonProps['variant'],
  disabled?: boolean,
) => {
  if (disabled) return getThemedColor('neutral', 500)

  switch (variant) {
    case 'secondary':
      return getThemedColor('neutral', 800)
    case 'borderless':
      return getThemedColor('neutral', 900)
    case 'outline':
      return getThemedColor('primary', 800)
    case 'negative':
      return (
        getThemedColor('accessible', 'text-on-negative-mids') ||
        getThemedColor('error', 900)
      )
    case 'primary':
    default:
      return (
        getThemedColor('accessible', 'text-on-primary-mids') ||
        getThemedColor('primary', 900)
      )
  }
}

export const menuTriggerStyles = (
  variant: MultiActionButtonProps['variant'],
) => css`
  /* Hover on the closed trigger: keep the Button hover background and
     elevation, only emphasize the border. z-index raises the hovered
     segment above its neighbour so the emphasized border is visible at the
     shared 1px seam (the attached Group overlaps segments by 1px). */
  &:hover:not(:disabled):not([data-disabled]):not([data-state='open']) {
    border-color: ${getMenuTriggerEmphasizedBorderColor(variant)};
    z-index: 1;

    ${variant === 'secondary'
      ? `
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10) !important;
    `
      : ''}
  }

  /* Pressed: raise the segment above its neighbour so the full pressed
     border is visible at the shared 1px seam. */
  &:active:not(:disabled):not([data-disabled]) {
    z-index: 1;
  }

  /* Open (menu expanded): default background + emphasized border, no
     elevation. The doubled ampersand doubles the class specificity so this
     rule also wins over the Button hover styles while the menu is open. */
  &&[data-state='open']:not(:disabled):not([data-disabled]) {
    background-color: ${getMenuTriggerOpenBackgroundColor(variant, true)};
    border-color: ${getMenuTriggerEmphasizedBorderColor(variant, true)};
    box-shadow: none;
  }

  &&[data-disabled] {
    background-color: ${getThemedColor('neutral', 300)};
    border-color: ${getThemedColor('neutral', 400)};
    color: ${getThemedColor('neutral', 500)};
    box-shadow: none;
  }
`

export const menuItemStyles = (size: MultiActionButtonProps['size']) => css`
  font-size: ${size === 'small'
    ? getThemedFontSize(300)
    : getThemedFontSize(400)};
  line-height: ${size === 'small'
    ? getThemedLineHeight(500)
    : getThemedLineHeight(600)};
  color: ${getThemedColor('neutral', 900)};
  padding: ${getThemedSpacing(100)};
  cursor: pointer;

  &[data-highlighted] {
    background-color: ${getThemedColor('neutral', 200)};
  }

  &[data-disabled] {
    cursor: not-allowed;
    color: ${getThemedColor('neutral', 500)};
  }
`
export const disabledGroupStyles = css`
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
`

/**
 * Horizontal padding for the chevron trigger segment. The Button fixes the
 * segment height (40px default / 28px small), so only the horizontal padding
 * is tuned to keep the segment roughly square.
 */
export const getTriggerMenuButtonStyle = (
  size: MultiActionButtonProps['size'],
) => ({
  padding:
    size === 'small'
      ? `0.375rem ${getThemedSpacing(200)}`
      : `${getThemedSpacing(200)} ${getThemedSpacing(300)}`,
})
