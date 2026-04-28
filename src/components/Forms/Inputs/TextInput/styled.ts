import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
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
  gap: ${size === 'small' ? '0.75rem' : '1rem'};
  margin-bottom: ${noMarginBottom ? '0' : '1.25rem'};
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
  font-size: ${size === 'small' ? '0.875rem' : '1rem'};
  font-weight: 400;
  line-height: ${size === 'small' ? '1.25rem' : '1.5rem'};
  margin-bottom: 0.125rem;
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
    margin-top: 0.25rem;
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
  font-size: ${size === 'small' ? '0.75rem' : '0.875rem'};
  font-weight: 400;
  line-height: ${size === 'small' ? '1rem' : '1.25rem'};

  &:first-letter {
    text-transform: uppercase;
  }
`

export const fieldErrorMessageStyles = (size: TextInputProps['size']) => css`
  color: ${getThemedColor('error', 900)};
  font-size: ${size === 'small' ? '0.75rem' : '0.875rem'};
  font-weight: 700;
  line-height: ${size === 'small' ? '1rem' : '1.25rem'};
  margin-top: 0.125rem;
`

export const textInputStyles = (
  size: TextInputProps['size'],
  value?: string,
  defaultValue?: string,
) => css`
  height: ${size === 'small' ? '1.75rem' : '2.5rem'};
  width: 100%;
  border-radius: 0.25rem;
  padding: ${size === 'small' ? '0.25rem 0.5rem' : '0.75rem'};
  background-color: ${getThemedColor('neutral', 100)};
  color: ${getThemedColor('neutral', 800)};
  border: 0.0625rem solid ${getThemedColor('neutral', 400)};
  box-shadow: 0 0.0625rem 0.125rem 0 #0000000d;
  font-size: ${size === 'small' ? '0.875rem' : '1rem'};

  &:focus-visible,
  &[data-focus-visible] {
    border: 0.125rem solid ${getThemedColor('neutral', 700)};
    outline: 0.125rem solid ${getThemedColor('primary', 700)};
    outline-offset: 0.125rem;
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
  }

  &:active {
    border: 0.0625rem solid ${getThemedColor('primary', 600)} !important;
    outline: none !important;
    box-shadow: 0 0.0625rem 0.125rem 0 #0000000d;
  }

  &[data-invalid] {
    border: 0.0625rem solid ${getThemedColor('error', 900)} !important;
  }

  &:disabled {
    background-color: ${getThemedColor('neutral', 200)};
    border: 0.0625rem solid ${getThemedColor('neutral', 300)} !important;
  }

  ${value || defaultValue
    ? `
    border: 0.0625rem solid ${getThemedColor('neutral', 700)};
  `
    : ''}
`
