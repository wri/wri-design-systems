import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'
import { fieldFocusVisibleStyles } from '../FieldWrapper/styled'
import { TextInputProps } from './types'

export const textInputStyles = (
  size: TextInputProps['size'],
  isFilled?: boolean,
) => css`
  height: ${size === 'small' ? getThemedSpacing(700) : getThemedSpacing(1000)};
  width: 100%;
  border-radius: ${getThemedRadius(300)};
  padding: ${size === 'small'
    ? `${getThemedSpacing(100)} ${getThemedSpacing(200)}`
    : getThemedSpacing(300)};
  background-color: ${getThemedColor('neutral', 100)};
  color: ${getThemedColor('neutral', 800)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  box-shadow: 0 0.0625rem 0.125rem 0 #0000000d;
  font-size: ${size === 'small'
    ? getThemedFontSize(300)
    : getThemedFontSize(400)};

  &:focus-visible,
  &[data-focus-visible] {
    ${fieldFocusVisibleStyles}
  }

  &[data-invalid] {
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('error', 900)} !important;
  }

  &:disabled {
    background-color: ${getThemedColor('neutral', 200)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)} !important;
  }

  ${isFilled
    ? `
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 700)};
  `
    : ''}
`
