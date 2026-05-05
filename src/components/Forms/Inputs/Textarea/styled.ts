import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'
import { TextareaProps } from './types'

export const textareaContainerStyles = (size: TextareaProps['size']) => css`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${size === 'small' ? getThemedSpacing(300) : getThemedSpacing(400)};
  margin-bottom: ${getThemedSpacing(400)};
`
export const textareaErrorBarStyles = css`
  width: 0.1875rem;
  height: 100%;
  background-color: ${getThemedColor('error', 900)};
  position: absolute;
  top: 0;
  left: 0;
`

export const fieldLabelStyles = (
  size: TextareaProps['size'],
  disabled?: TextareaProps['disabled'],
) => css`
  color: ${getThemedColor('neutral', disabled ? 600 : 900)};
  font-size: ${size === 'small'
    ? getThemedFontSize(300)
    : getThemedFontSize(400)};
  font-weight: 400;
  line-height: ${size === 'small'
    ? getThemedLineHeight(500)
    : getThemedLineHeight(600)};
  margin-bottom: ${getThemedSpacing(50)};

  span {
    color: ${getThemedColor('neutral', disabled ? 600 : 700)};
  }

  .chakra-field__requiredIndicator {
    color: ${disabled
      ? getThemedColor('neutral', 600)
      : getThemedColor('error', 500)};
  }
`

export const fieldCaptionStyles = (
  size: TextareaProps['size'],
  disabled?: TextareaProps['disabled'],
) => css`
  color: ${getThemedColor('neutral', disabled ? 600 : 700)};
  font-size: ${size === 'small'
    ? getThemedFontSize(200)
    : getThemedFontSize(300)};
  font-weight: 400;
  line-height: ${size === 'small'
    ? getThemedLineHeight(400)
    : getThemedLineHeight(500)};
`

export const fieldHelperTextStyles = css`
  color: ${getThemedColor('neutral', 600)};
  font-size: ${getThemedFontSize(200)};
  font-weight: 400;
  line-height: ${getThemedLineHeight(400)};
  margin-top: ${getThemedSpacing(200)};
`

export const fieldErrorMessageStyles = css`
  color: ${getThemedColor('error', 900)};
  font-size: ${getThemedFontSize(300)};
  font-weight: 700;
  line-height: ${getThemedLineHeight(500)};
  margin-top: ${getThemedSpacing(50)};
`

export const textareaSyles = (
  size: TextareaProps['size'],
  value?: string,
  defaultValue?: string,
) => css`
  height: 6.5rem;
  width: 100%;
  border-radius: ${getThemedRadius(300)};
  padding: ${size === 'small' ? getThemedSpacing(200) : getThemedSpacing(300)};
  margin-top: ${getThemedSpacing(200)};
  background-color: ${getThemedColor('neutral', 100)};
  color: ${getThemedColor('neutral', 800)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)};
  box-shadow: 0 ${getThemedBorderWidth(100)} ${getThemedSpacing(50)} 0 #0000000d;

  &:focus-visible,
  &[data-focus-visible] {
    border: ${getThemedBorderWidth(200)} solid ${getThemedColor('neutral', 700)};
    outline: ${getThemedBorderWidth(200)} solid
      ${getThemedColor('primary', 700)};
    outline-offset: ${getThemedSpacing(50)};
    box-shadow:
      0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 ${getThemedSpacing(50)} ${getThemedSpacing(50)}
        ${getThemedSpacing(100)};
  }

  &:active {
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('primary', 600)} !important;
    outline: none !important;
    box-shadow: 0 ${getThemedBorderWidth(100)} ${getThemedSpacing(50)} 0
      #0000000d;
  }

  &[data-invalid] {
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('error', 900)} !important;
  }

  &:disabled {
    background-color: ${getThemedColor('neutral', 200)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)} !important;
  }

  ${value || defaultValue
    ? `
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 700)};
  `
    : ''}
`
