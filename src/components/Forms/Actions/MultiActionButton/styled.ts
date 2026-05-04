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
  width: 12.5rem;
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 600)};
  border-radius: ${getThemedRadius(300)};
  padding: ${getThemedSpacing(200)};
`

export const menuTriggerStyles = (
  variant: MultiActionButtonProps['variant'],
) => css`
  &[data-state='open'] {
    background-color: ${variant === 'primary'
      ? getThemedColor('primary', 600)
      : getThemedColor('neutral', 200)} !important;
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('primary', 800)} !important;
  }
`

export const menuItemStyles = (size: MultiActionButtonProps['size']) => css`
  font-size: ${size === 'small' ? getThemedFontSize(300) : getThemedFontSize(400)};
  line-height: ${size === 'small' ? getThemedLineHeight(500) : getThemedLineHeight(600)};
  color: ${getThemedColor('neutral', 800)};
  padding: ${getThemedSpacing(100)};
  cursor: pointer;

  &[data-highlighted] {
    background-color: ${getThemedColor('neutral', 200)};
  }
`
export const disabledGroupStyles = css`
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
`

export const triggerMenuButtonStyles = {
  padding: getThemedSpacing(300),
}
