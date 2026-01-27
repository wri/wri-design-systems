import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
import { TextInputProps } from './types'

export const textInputContainerStyles = (size: TextInputProps['size']) => css`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${size === 'small' ? '12px' : '16px'};
`

export const textInputErrorBarStyles = css`
  width: 3px;
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
  font-size: ${size === 'small' ? '14px' : '16px'};
  font-weight: 400;
  line-height: ${size === 'small' ? '20px' : '24px'};
  margin-bottom: 2px;
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
    margin-top: 4px;
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
  font-size: ${size === 'small' ? '12px' : '14px'};
  font-weight: 400;
  line-height: ${size === 'small' ? '16px' : '20px'};

  &:first-letter {
    text-transform: uppercase;
  }
`

export const fieldErrorMessageStyles = (size: TextInputProps['size']) => css`
  color: ${getThemedColor('error', 900)};
  font-size: ${size === 'small' ? '12px' : '14px'};
  font-weight: 700;
  line-height: ${size === 'small' ? '16px' : '20px'};
  margin-top: 2px;
`

export const textInputStyles = (
  size: TextInputProps['size'],
  value?: string,
  defaultValue?: string,
) => css`
  height: ${size === 'small' ? '28px' : '40px'};
  width: 100%;
  border-radius: 4px;
  padding: ${size === 'small' ? '4px 8px' : '12px'};
  margin-top: 8px;
  background-color: ${getThemedColor('neutral', 100)};
  color: ${getThemedColor('neutral', 800)};
  border: 1px solid ${getThemedColor('neutral', 400)};
  box-shadow: 0px 1px 2px 0px #0000000d;
  font-size: ${size === 'small' ? '14px' : '16px'};

  &:focus-visible,
  &[data-focus-visible] {
    border: 2px solid ${getThemedColor('neutral', 700)};
    outline: 2px solid ${getThemedColor('primary', 700)};
    outline-offset: 2px;
    box-shadow:
      0 0 0 2px ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
  }

  &:active {
    border: 1px solid ${getThemedColor('primary', 600)} !important;
    outline: none !important;
    box-shadow: 0px 1px 2px 0px #0000000d;
  }

  &[data-invalid] {
    border: 1px solid ${getThemedColor('error', 900)} !important;
  }

  &:disabled {
    background-color: ${getThemedColor('neutral', 200)};
    border: 1px solid ${getThemedColor('neutral', 300)} !important;
  }

  ${value || defaultValue
    ? `
    border: 1px solid ${getThemedColor('neutral', 700)};
  `
    : ''}
`
