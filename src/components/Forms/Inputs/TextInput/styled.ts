import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'
import { TextInputProps } from './types'

export const textInputContainerStyles = (
  size: TextInputProps['size'],
  noMarginBottom?: boolean,
) => css`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${size === 'small' ? getThemedSpacing(300) : getThemedSpacing(400)};
  margin-bottom: ${noMarginBottom ? '0' : getThemedSpacing(500)};
`

export const textInputErrorBarStyles = css`
  width: 0.1875rem;
  height: 100%;
  background-color: ${getThemedColor('error', 900)};
  position: absolute;
  top: 0;
  left: 0;
`

export const fieldLabelStyles = (
  size: TextInputProps['size'],
  disabled?: TextInputProps['disabled'],
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
  display: flex;
  align-items: flex-start;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  cursor: text;

  span {
    color: ${getThemedColor('neutral', disabled ? 600 : 700)};
  }

  .chakra-field__requiredIndicator {
    margin-top: ${getThemedSpacing(100)};
    color: ${disabled
      ? getThemedColor('neutral', 600)
      : getThemedColor('error', 500)};
  }
`

export const fieldCaptionStyles = (
  size: TextInputProps['size'],
  disabled?: TextInputProps['disabled'],
) => css`
  color: ${getThemedColor('neutral', disabled ? 600 : 700)};
  font-size: ${size === 'small'
    ? getThemedFontSize(200)
    : getThemedFontSize(300)};
  font-weight: 400;
  line-height: ${size === 'small'
    ? getThemedLineHeight(400)
    : getThemedLineHeight(500)};

  &:first-letter {
    text-transform: uppercase;
  }
`

export const fieldErrorMessageStyles = (size: TextInputProps['size']) => css`
  color: ${getThemedColor('error', 900)};
  font-size: ${size === 'small'
    ? getThemedFontSize(200)
    : getThemedFontSize(300)};
  font-weight: 700;
  line-height: ${size === 'small'
    ? getThemedLineHeight(400)
    : getThemedLineHeight(500)};
  margin-top: ${getThemedSpacing(50)};
`

export const textInputStyles = (
  size: TextInputProps['size'],
  value?: string,
  defaultValue?: string,
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
    outline: ${getThemedBorderWidth(200)} solid
      ${getThemedColor('primary', 700)};
    outline-offset: ${getThemedSpacing(50)};
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
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
