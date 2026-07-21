import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'
import { fieldFocusVisibleStyles } from '../FieldWrapper/styled'
import { TextareaProps } from './types'

export const fieldHelperTextStyles = css`
  color: ${getThemedColor('neutral', 600)};
  font-size: ${getThemedFontSize(200)};
  font-weight: 400;
  line-height: ${getThemedLineHeight(400)};
  margin: 0;
`

export const fieldErrorMessageStyles = css`
  color: ${getThemedColor('error', 900)};
  font-size: ${getThemedFontSize(300)};
  font-weight: 700;
  line-height: ${getThemedLineHeight(500)};
  margin: 0;
`

export const textareaSyles = (
  size: TextareaProps['size'],
  isFilled?: boolean,
) => css`
  height: 6.5rem;
  width: 100%;
  border-radius: ${getThemedRadius(300)};
  padding: ${size === 'small' ? getThemedSpacing(200) : getThemedSpacing(300)};
  background-color: ${getThemedColor('neutral', 100)};
  color: ${getThemedColor('neutral', 800)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)};
  box-shadow: 0 0.0625rem 0.125rem 0 #0000000d;

  &:is(:placeholder-shown, [data-placeholder-shown]) {
    color: ${getThemedColor('neutral', 700)};
  }

  &::placeholder {
    color: ${getThemedColor('neutral', 700)};
    opacity: 1;
  }

  &:focus {
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 700)};
  }

  &[data-focus-visible] {
    ${fieldFocusVisibleStyles}
  }

  &[data-invalid] {
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('error', 900)} !important;
  }

  &:disabled {
    background-color: ${getThemedColor('neutral', 200)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)} !important;
    color: ${getThemedColor('neutral', 600)};
    -webkit-text-fill-color: ${getThemedColor('neutral', 600)};
    opacity: 1;
  }

  ${isFilled
    ? `
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 700)};
  `
    : ''}
`
