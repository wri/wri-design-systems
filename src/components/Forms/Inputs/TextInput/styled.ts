import styled from '@emotion/styled'
import { Input, Field } from '@chakra-ui/react'
import { getThemedColor } from '../../../../lib/theme'

export const TextInputContainer = styled.div<{ size: 'small' | 'default' }>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ size }) => (size === 'small' ? '12px' : '16px')};
  margin-bottom: 20px;
`

export const ErrorBar = styled.div`
  width: 3px;
  height: 100%;
  background-color: ${getThemedColor('error', 500)};
  position: absolute;
  top: 0;
  left: 0;
`

export const StyledFieldLabel = styled(Field.Label)<{
  size: 'small' | 'default'
  disabled?: boolean
}>`
  color: ${({ disabled }) => getThemedColor('neutral', disabled ? 600 : 900)};
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
  font-weight: 400;
  line-height: ${({ size }) => (size === 'small' ? '20px' : '24px')};
  margin-bottom: 2px;

  span {
    color: ${({ disabled }) => getThemedColor('neutral', disabled ? 600 : 700)};
  }

  .chakra-field__requiredIndicator {
    color: ${({ disabled }) =>
      disabled ? getThemedColor('neutral', 600) : getThemedColor('error', 500)};
  }
`

export const StyledFieldCaption = styled(Field.HelperText)<{
  size: 'small' | 'default'
  disabled?: boolean
}>`
  color: ${({ disabled }) => getThemedColor('neutral', disabled ? 500 : 600)};
  font-size: ${({ size }) => (size === 'small' ? '12px' : '14px')};
  font-weight: 400;
  line-height: ${({ size }) => (size === 'small' ? '16px' : '20px')};
`

export const StyledFieldErrorMessage = styled(Field.ErrorText)<{
  size: 'small' | 'default'
}>`
  color: ${getThemedColor('error', 500)};
  font-size: ${({ size }) => (size === 'small' ? '12px' : '14px')};
  font-weight: 700;
  line-height: ${({ size }) => (size === 'small' ? '16px' : '20px')};
  margin-top: 2px;
`

export const StyledTextInput = styled(Input)<{ size: 'small' | 'default' }>`
  height: ${({ size }) => (size === 'small' ? '28px' : '40px')};
  width: 100%;
  border-radius: 4px;
  padding: ${({ size }) => (size === 'small' ? '4px 8px' : '12px')};
  margin-top: 8px;
  background-color: ${getThemedColor('neutral', 100)};
  color: ${getThemedColor('neutral', 800)};
  border: 1px solid ${getThemedColor('neutral', 400)};
  box-shadow: 0px 1px 2px 0px #0000000d;

  &:focus-visible,
  &[data-focus-visible] {
    border: 2px solid ${getThemedColor('neutral', 700)};
    outline: 2px solid ${getThemedColor('primary', 700)};
    outline-offset: 2px;
  }

  &:active {
    border: 1px solid ${getThemedColor('primary', 600)} !important;
    outline: none !important;
    box-shadow: 0px 1px 2px 0px #0000000d;
  }

  &[data-invalid] {
    border: 1px solid ${getThemedColor('error', 500)} !important;
  }

  &:disabled {
    background-color: ${getThemedColor('neutral', 200)};
    border: 1px solid ${getThemedColor('neutral', 300)} !important;
  }

  ${({ value, defaultValue }) =>
    value || defaultValue
      ? `
    border: 1px solid ${getThemedColor('neutral', 700)};
  `
      : ''}
`
